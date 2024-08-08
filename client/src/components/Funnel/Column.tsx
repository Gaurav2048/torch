import { Box, Text } from "@chakra-ui/react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";


type OwnProps = {
    column: Column;
    tasks: Task[]
}

const Column: React.FC<OwnProps> = ({
    column, tasks
}) => {
    return <Box margin="8px" border="1px solid rgba(235, 235, 235, 1)" borderRadius="2px">
        <Text padding="8px" fontSize="md">{column.title}</Text>
        <Droppable droppableId={column.id}>
            {(provided) => (
                <Box ref={provided.innerRef} {...provided.droppableProps} padding="8px">
                    {tasks.map((task, index) => <Task key={task.id} index={index} task={task} />)}
                    {provided.placeholder}
                </Box>
            )}
        </Droppable>
    </Box>
}

export default Column;
