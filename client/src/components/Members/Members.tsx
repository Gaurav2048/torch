import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Checkbox,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { useRecoilState, useRecoilValue } from "recoil";
import { boardAtom, memberAtom, orgAtom } from "../../AppState/state";
import { useEffect, useMemo, useRef, useState } from "react";
import AppMenu from "../AppMenu";
import { User } from "../AppTable/AppTable";
import useAxios from "../../hooks/useAxios";
import { colorSchema, ROUTES } from "../../Constants";
import { produce } from "immer";
import { capitalize } from "../../utils/textUtils";

const Members: React.FC = () => {
  const members = useRecoilValue(memberAtom);

  return (
    <Box display="flex" gap="16px" alignItems="center">
      <AvatarGroup size="sm" max={4} cursor="pointer">
        {members?.map((member) => (
          <Avatar key={member._id} name={member.name} />
        ))}
      </AvatarGroup>
      <AppMenu
        anchor={() => (
          <Button
            leftIcon={<GoPlus color="white" />}
            size="sm"
            bgColor={colorSchema.PRIMARY}
            color="white"
          >
            Add Member
          </Button>
        )}
      >
        <AddMembersToBoard />
      </AppMenu>
    </Box>
  );
};

export default Members;

type AddMember = Member & {
  isMember: boolean;
};

const AddMembersToBoard: React.FC = () => {
  const members = useRecoilValue(memberAtom);
  const board = useRecoilValue(boardAtom);
  const org = useRecoilValue(orgAtom);

  const [selectedMemeber, setSelectedMember] = useState<AddMember | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSelectMember = (member: AddMember) => {
    if (!member) return;
    setSelectedMember(member);
    onOpen();
  };

  const boardMembers = useMemo<Array<AddMember>>(() => {
    return members.map((member) => ({
      ...member,
      isMember: !!board.members?.includes(member._id || ""),
    }));
  }, [members, board]);

  return (
    <Box width="300px" maxHeight="500px" padding="8px 16px">
      {boardMembers.map((member) => (
        <Flex
          cursor="pointer"
          onClick={() => onSelectMember(member)}
          marginBottom="4px"
          justifyContent="space-between"
          alignItems="center"
        >
          <User name={member.name} email={member.email} />
          <Checkbox isChecked={member.isMember} />
        </Flex>
      ))}
      <ConfirmMemberDialog
        name={selectedMemeber?.name}
        email={selectedMemeber?.email}
        isOpen={isOpen}
        onClose={onClose}
        boardId={board._id}
        orgId={org._id}
        memberId={selectedMemeber?._id}
        action={selectedMemeber?.isMember ? "remove" : "add"}
      />
    </Box>
  );
};

type MemberDialog = {
  action: "remove" | "add";
  memberId?: string;
  name?: string;
  email?: string;
  isOpen: boolean;
  boardId: string;
  orgId: string;
  onClose: () => void;
};

const ConfirmMemberDialog: React.FC<MemberDialog> = ({
  action,
  name,
  email,
  isOpen,
  onClose,
  memberId,
  boardId,
  orgId,
}) => {
  const [board, setBoard] = useRecoilState(boardAtom);

  const {
    loading: loadingAddMemberRequestResponse,
    response: boardWithRemovedMember,
    fetchData: createBoardMember,
  } = useAxios({
    method: "post",
    url: ROUTES.ADD_REMOVE_MEMBER(orgId),
    data: {
      memberId,
      boardId,
    },
  });

  const {
    loading: loadingRemoveMemberRequestResponse,
    response: boardWithNewMember,
    fetchData: removeBoardMember,
  } = useAxios({
    method: "put",
    url: ROUTES.ADD_REMOVE_MEMBER(orgId),
    data: {
      memberId,
      boardId,
    },
  });

  const memberChangeRequest = () => {
    if (action === "remove") {
      removeBoardMember();
    } else {
      createBoardMember();
    }
  };

  useEffect(() => {
    if (!boardWithNewMember?.board?.members) return;
    setBoard(
      produce(board, (draft) => {
        draft.members = boardWithNewMember?.board?.members;
        return draft;
      }),
    );
  }, [boardWithNewMember]);

  useEffect(() => {
    if (!boardWithRemovedMember?.board?.members) return;
    setBoard(
      produce(board, (draft) => {
        draft.members = boardWithRemovedMember?.board?.members;
        return draft;
      }),
    );
  }, [boardWithRemovedMember]);

  const cancelRef = useRef<any>();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {action === "remove" ? "Remove Member" : "Add Member"}
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure {action} this member from current project.
            <User marginY="16px" name={name || ""} email={email || ""} />
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={
                loadingAddMemberRequestResponse ||
                loadingRemoveMemberRequestResponse
              }
              colorScheme={action === "remove" ? "red" : "blue"}
              onClick={memberChangeRequest}
              ml={3}
            >
              {`${capitalize(action)} Member`}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
