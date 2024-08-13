import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import Funnel from "../../components/Funnel";
import Progress from "../../components/Progress";
import Members from "../../components/Members";
import { useRecoilState } from "recoil";
import { boardAtom } from "../../AppState/state";
import Notes from "../Notes";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const TAB_SEGMENTS = {
    FUNNEL: "funnel",
    NOTES: "notes"
}

const Dashboard: React.FC = () => {
    const [ board, setBoard ] = useRecoilState(boardAtom)
    
    const [tabIndex, setTabIndex] = useState(0);
    const location = useLocation()
    const { orgId } = useParams()
    // const navigate = useNavigate()

    const { response, fetchData } = useAxios({
        method: 'GET',
        url: `/boards/${orgId}`
    })

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log('response', response)
        if(!response) return
        
        setBoard(response)
    }, [response])

    const handleTabsChange = (index: number) => {
      setTabIndex(index);
    };



    useEffect(() => {
        if (location.pathname.includes(TAB_SEGMENTS.FUNNEL)) {
            setTabIndex(0)
        }
        if (location.pathname.includes(TAB_SEGMENTS.NOTES)) {
            setTabIndex(1)
        }
    }, [])

    useEffect(() => {
        // if (tabIndex === 0) navigate('/')
    }, [tabIndex])

    return <Box flexGrow={1} display="flex" flexDirection="column">
        <Box padding="24px 32px" display="flex" justifyContent="space-between" >
            <Progress title="Piper Enterprise" />
            <Members />
        </Box>
        <Tabs index={tabIndex} onChange={handleTabsChange} display="flex" flexDirection="column" flexGrow={1} variant="line" >
            <Box display="flex" justifyContent="space-between" borderBottom="1px solid rgb(235, 235, 235)" alignItems="center">
                <TabList width="max-content" borderBottomWidth="0">
                    <Tab>Overview</Tab>
                    <Tab>Tasks</Tab>
                    <Tab>Notes</Tab>    
                    <Tab>Question</Tab>
                </TabList>
            </Box>

            <TabPanels flexGrow={1} bgColor="rgb(247, 247, 247)">
                <TabPanel>
                    <Funnel board={board} setBoard={setBoard} />
                </TabPanel>
                <TabPanel>
                    <Notes />
                </TabPanel>
                <TabPanel>
                <p>three!</p>
                </TabPanel>
                <TabPanel>
                <p>three!</p>
                </TabPanel>
            </TabPanels>
            </Tabs>
    </Box>
}

export default Dashboard;