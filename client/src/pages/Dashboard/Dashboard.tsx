import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import Funnel from "../../components/Funnel";
import Progress from "../../components/Progress";
import Members from "../../components/Members";

const Dashboard: React.FC = () => {
    return <Box>
        <Box padding="24px 32px" display="flex" justifyContent="space-between" >
            <Progress title="Piper Enterprise" />
            <Members />
        </Box>
        <Tabs variant="line" >
            <Box display="flex" justifyContent="space-between" borderBottom="1px solid rgb(235, 235, 235)" alignItems="center">
                <TabList width="max-content" borderBottomWidth="0">
                    <Tab>Overview</Tab>
                    <Tab>Tasks</Tab>
                    <Tab>Notes</Tab>    
                    <Tab>Question</Tab>
                </TabList>
            </Box>

            <TabPanels>
                <TabPanel>
                    <Funnel />
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