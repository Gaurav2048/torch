import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import { FaRegComment } from "react-icons/fa6";
import { useRecoilValue } from "recoil";
import { displayPriority, memberAtom, orgAtom } from "../../AppState/state";
import { Task } from "../..";
import AppMenu from "../AppMenu";
import { IconNoPriority } from "../../Constants/Icons";
import { colorSchema, DISPLAY_OPTIONS, PRIORITIES } from "../../Constants";
import AppTypography from "../AppTypography/AppTypography";
import { capitalize } from "../../utils/textUtils";
import { useMemo } from "react";
import DisplayPriorities from "../AppFilter/DisplayPriorities";
import { FaTasks } from "react-icons/fa";

type OwnProps = {
  task: Task;
  index: number;
  openTask: (taskId: string) => void;
};

const TaskComponent: React.FC<OwnProps> = ({ task, index, openTask }) => {
  const org = useRecoilValue(orgAtom);
  const members = useRecoilValue(memberAtom);
  const workType = org.workTypes.find((type) => task.workType === type._id);
  const displayProperties = useRecoilValue(displayPriority);

  const handleOpenTask = () => {
    openTask(task.id);
  };

  const assignedTo = useMemo(() => {
    return members.find((el) => el._id === task.assignedTo);
  }, [members, task]);

  const createdBy = useMemo(() => {
    return members.find((el) => el._id === task.createdBy);
  }, [members, task]);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Flex
          border="1px solid rgba(235, 235, 235, 1)"
          borderRadius="8px"
          marginBottom="8px"
          bgColor="white"
          minHeight="160px"
          flexDirection="column"
          justifyContent="space-between"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Flex
            grow={1}
            direction="column"
            justifyContent="space-between"
            padding="8px 16px 12px 16px"
            onClick={handleOpenTask}
          >
            <Box>
              <Flex justifyContent="space-between" alignItems="center">
                <RenderIf
                  condition={displayProperties.displayItems.includes(
                    DISPLAY_OPTIONS.LABEL,
                  )}
                >
                  <Text
                    fontWeight={600}
                    fontSize="2xs"
                    borderRadius="4px"
                    padding="2px 6px"
                    width="fit-content"
                    border={`1px solid ${workType?.color}`}
                    bgColor={workType?.color}
                  >
                    {workType?.name}
                  </Text>
                </RenderIf>
                <RenderIf
                  condition={displayProperties.displayItems.includes(
                    DISPLAY_OPTIONS.ASSIGNEE,
                  )}
                >
                  <Avatar
                    size="2xs"
                    name={assignedTo?.name}
                    title={assignedTo?.name}
                  />
                </RenderIf>
              </Flex>
              <Text
                marginTop="16px"
                fontSize="sm"
                textAlign="left"
                fontWeight={600}
              >
                {task.title}
              </Text>
              <Text fontSize="xs" textAlign="start" color="rgb(188, 193, 199)">
                {task.content}
              </Text>
              {task.todos?.length ? (
                <RenderIf
                  condition={displayProperties.displayItems.includes(
                    DISPLAY_OPTIONS.TODOS,
                  )}
                >
                  <Flex
                    marginTop="8px"
                    padding="2px 4px"
                    gap="8px"
                    alignItems="center"
                    width="max-content"
                    color="rgb(188, 193, 199)"
                    border="1px solid rgb(188, 193, 199)"
                    borderRadius="4px"
                  >
                    <FaTasks fontSize="16px" color="lightgrey" />
                    <Text fontSize="xs">{`${task.todos.filter((todo) => todo.completed).length} / ${task.todos.length}`}</Text>
                  </Flex>
                </RenderIf>
              ) : null}
            </Box>
          </Flex>
          <Flex
            padding="12px 16px"
            justifyContent="space-between"
            alignItems="center"
            borderTop="1px solid rgba(235, 235, 235, 1)"
          >
            <Flex gap="8px" alignItems="center">
              <AvatarGroup size="xs" max={2}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
              <RenderIf
                condition={displayProperties.displayItems.includes(
                  DISPLAY_OPTIONS.PRIORITY,
                )}
              >
                <AssignPriority />
              </RenderIf>
              <RenderIf
                condition={displayProperties.displayItems.includes(
                  DISPLAY_OPTIONS.CREATOR,
                )}
              >
                <Avatar
                  name={createdBy?.name}
                  size="xs"
                  title={createdBy?.name}
                />
              </RenderIf>
            </Flex>
            <Flex alignItems="center" gap="4px">
              <FaRegComment color="lightgray" />
              <Text fontSize="xs" color="rgb(188, 193, 199)">
                11
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Draggable>
  );
};

export default TaskComponent;

const AssignPriority: React.FC = () => {
  return (
    <AppMenu
      anchor={() => (
        <Box border="1px solid lightgray" padding="2px">
          <IconNoPriority color="lightgray" />
        </Box>
      )}
    >
      {() => (
        <>
          {PRIORITIES.map((priority) => (
            <PriorityMenuItem key={priority.id} {...priority} />
          ))}
        </>
      )}
    </AppMenu>
  );
};

type PriorityItemType = {
  id: number;
  priority: string;
  icon: (color?: string) => JSX.Element;
};

const PriorityMenuItem: React.FC<PriorityItemType> = ({
  id,
  priority,
  icon,
}) => {
  const { isOpen: hover, onOpen: onEnter, onClose: onExit } = useDisclosure();
  const onItemSelected = () => {
    // onSelected({ icon, type, filterMethod, alias });
    // onCloseModal?.();
  };
  return (
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      margin="0 4px"
      borderRadius="4px"
      bgColor={hover ? "gray.100" : "white"}
      padding="6px 8px"
      onClick={onItemSelected}
    >
      {icon(hover ? colorSchema.PRIMARY : "gray")}
      <AppTypography
        ml="2"
        text={capitalize(priority)}
        variant="caption1"
        color={hover ? "primary.900" : "inherit"}
      />
    </Box>
  );
};

const RenderIf: React.FC<{
  condition: boolean;
  children: React.ReactElement;
}> = ({ condition, children }) => {
  return condition ? children : null;
};
