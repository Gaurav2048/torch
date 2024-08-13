import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import Funnel from "../../components/Funnel";
import Progress from "../../components/Progress";
import Members from "../../components/Members";
import { useRecoilState } from "recoil";
import { boardAtom } from "../../AppState/state";

const Dashboard: React.FC = () => {
    const [ board, setBoard ] = useRecoilState(boardAtom)
    return <Box flexGrow={1} display="flex" flexDirection="column">
        <Box padding="24px 32px" display="flex" justifyContent="space-between" >
            <Progress title="Piper Enterprise" />
            <Members />
        </Box>
        <Tabs display="flex" flexDirection="column" flexGrow={1} variant="line" >
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
                <p>two!</p>
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