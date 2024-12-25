import { useRecoilState, useRecoilValue } from "recoil";
import { boardAtom, orgAtom } from "../../../AppState/state";
import { useEffect, useMemo, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import Funnel from "../../../components/Funnel";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TaskForm from "../Task/TaskForm";
import CreateBoard from "../Board";
import ViewTask from "../view";
import AppFilter from "../../../components/AppFilter";
import { Box } from "@chakra-ui/react";
import { APPLIED_FILER } from "../../../Constants/FilterData";
import { produce } from "immer";
import { BoardType } from "../../..";

const FunnelPage: React.FC = () => {
  const [board, setBoard] = useRecoilState(boardAtom);
  const [applicableBoard, setApplicableBoard] = useState<BoardType>()
  const org = useRecoilValue(orgAtom);

  const [appliedFilters, setAppliedFilters] = useState<Array<APPLIED_FILER>>([]);


  const { boardId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setApplicableBoard(produce(board, draft => {
      return appliedFilters.reduce((boardDraft, current) => {
        return current.filterMethod(current.params, boardDraft)
      }, draft)
    }))
  }, [board, appliedFilters])

  const { loading, response, fetchData } = useAxios({
    method: "GET",
    url: `/boards/${org._id}/board/${boardId}`,
  });

  useEffect(() => {
    if (org?._id) {
      fetchData();
    }
  }, [boardId, org?._id]);

  useEffect(() => {
    if (!response) return;
    setBoard(response);
  }, [response]);

  useEffect(() => {
    setApplicableBoard(board)
  }, [board])

  const createTask = (columnId: string) => {
    navigate(`${location.pathname}/create/task/${columnId}`);
  };

  const openTask = (taskId: string) => {
    navigate(`${location.pathname}/view/task/${taskId}`);
  };

  return !loading ? (
    <>
      <AppFilter appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} />
      <Box bgColor="rgb(247, 247, 247)">
        {applicableBoard ? <Funnel
          board={applicableBoard}
          setBoard={setApplicableBoard}
          createTask={createTask}
          openTask={openTask}
        /> : null}
        <TaskForm />
        <CreateBoard />
        <ViewTask />
      </Box>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default FunnelPage;
