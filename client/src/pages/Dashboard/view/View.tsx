import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import AppModal from "../../../components/AppModal";
import TaskDetails from "./TaskDetails";
import Comments from "../../../components/CommentInput";
import { useRecoilValue } from "recoil";
import { boardAtom, memberAtom } from "../../../AppState/state";
import { useMemo } from "react";
import { Member } from "../../..";
import useComments from "./useComments";

const View: React.FC = () => {
  return (
    <AppModal title="Task Details" identifier="view/task">
      <ViewTask />
    </AppModal>
  );
};

export default View;

const ViewTask: React.FC = () => {
  const members = useRecoilValue(memberAtom);
  const board = useRecoilValue(boardAtom);
  const { createComment, createReply, comments, fetchCommentLoader } =
    useComments();

  const boardMembers = useMemo<Array<Member>>(() => {
    return members.filter((member) =>
      board.members?.includes(member._id || ""),
    );
  }, [members, board]);

  return (
    <Box height="70vh" overflow="hidden">
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Task</Tab>
          <Tab>Comments</Tab>
        </TabList>
      </Tabs>
      <TaskDetails />
      {fetchCommentLoader ? (
        <div>Loading...</div>
      ) : (
        <Comments
          comments={comments || []}
          members={boardMembers}
          createComment={createComment}
          createReply={createReply}
        />
      )}
    </Box>
  );
};
