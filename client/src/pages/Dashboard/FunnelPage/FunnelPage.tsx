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
import { BoardType } from "../../..";

const FunnelPage: React.FC = () => {
  const [board, setBoard] = useRecoilState(boardAtom);
  const org = useRecoilValue(orgAtom);

  const { boardId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const filteredBoard = useMemo(() => {

  }, [board])

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

  const createTask = (columnId: string) => {
    navigate(`${location.pathname}/create/task/${columnId}`);
  };

  const openTask = (taskId: string) => {
    navigate(`${location.pathname}/view/task/${taskId}`);
  };

  const applyFilter = (appliedFilters: Array<APPLIED_FILER>) => {
    // appliedFilters.map(filter => )
  }

  return !loading ? (
    <>
      <AppFilter applyFilter={applyFilter} />
      <Box bgColor="rgb(247, 247, 247)">
        <Funnel
          board={board}
          setBoard={setBoard}
          createTask={createTask}
          openTask={openTask}
        />
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
