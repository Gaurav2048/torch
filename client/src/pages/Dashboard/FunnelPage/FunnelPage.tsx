import { useRecoilState } from "recoil";
import { boardAtom } from "../../../AppState/state";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import Funnel from "../../../components/Funnel";
import { useParams } from "react-router-dom";
import TaskForm from "../Task/TaskForm";

const FunnelPage: React.FC = () => {
    const [ board, setBoard ] = useRecoilState(boardAtom)
    
    // const { orgId } = useParams()
    // const navigate = useNavigate()

    const { response, fetchData } = useAxios({
        method: 'GET',
        url: `/boards/123-234-345`
    })

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if(!response) return
        
        setBoard(response)
    }, [response])

    return <>
        <Funnel board={board} setBoard={setBoard} />
        <TaskForm />
    </>

}

export default FunnelPage;
