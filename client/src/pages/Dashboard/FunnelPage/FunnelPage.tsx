import { useRecoilState } from "recoil";
import { boardAtom } from "../../../AppState/state";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import Funnel from "../../../components/Funnel";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TaskForm from "../Task/TaskForm";

const FunnelPage: React.FC = () => {
    const [ board, setBoard ] = useRecoilState(boardAtom)
    
    const { orgId } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const { response, fetchData } = useAxios({
        method: 'GET',
        url: `/boards/${orgId}`
    })

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if(!response) return
        
        setBoard(response)
    }, [response])

    const createTask = (columnId: string) => {
        navigate(`${location.pathname}/task/${columnId}`)
    }

    return <>
        <Funnel board={board} setBoard={setBoard} createTask={createTask} />
        <TaskForm />
    </>

}

export default FunnelPage;
