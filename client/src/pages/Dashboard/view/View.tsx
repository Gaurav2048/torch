import { Box, Tab, TabList, Tabs } from "@chakra-ui/react"
import AppModal from "../../../components/AppModal";
import TaskDetails from "./TaskDetails";
import Comments from "../../../components/CommentInput";

const View: React.FC = () => {
    return <AppModal title="Task Details" identifier="view/task">
        <ViewTask />
    </AppModal>
}

export default View;

const ViewTask: React.FC = () => {
    return <Box height="70vh" overflow="hidden">
        <Tabs variant="enclosed">
            <TabList>
                <Tab>Task</Tab>
                <Tab>Comments</Tab>
            </TabList>
        </Tabs>
        <TaskDetails />
        <Comments />
    </Box>
}
