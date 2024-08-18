import { useRecoilState, useRecoilValue } from "recoil";
import { boardAtom, orgAtom } from "../../../AppState/state";
import { useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import Funnel from "../../../components/Funnel";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TaskForm from "../Task/TaskForm";
import CreateBoard from "../Board";

const FunnelPage: React.FC = () => {
    const [ board, setBoard ] = useRecoilState(boardAtom)
    const org = useRecoilValue(orgAtom)
    
    const { boardId } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const { loading, response, fetchData } = useAxios({
        method: 'GET',
        url: `/boards/${org._id}/board/${boardId}`
    })

    useEffect(() => {
        fetchData()
    }, [boardId])

    useEffect(() => {
        if(!response) return
        setBoard(response)
    }, [response])

    const createTask = (columnId: string) => {
        navigate(`${location.pathname}/task/${columnId}`)
    }

    return !loading ? <>
        <Funnel board={board} setBoard={setBoard} createTask={createTask} />
        <TaskForm />
        <CreateBoard />
    </> : <div>Loading...</div>

}

export default FunnelPage;
