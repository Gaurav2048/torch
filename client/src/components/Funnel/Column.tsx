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
    return <Droppable droppableId={column.id}>
            {(provided) => (
                <Box  height="100%" ref={provided.innerRef} {...provided.droppableProps} >
                    {tasks.map((task, index) => <Task key={task.id} index={index} task={task} />)}
                    {provided.placeholder}
                </Box>
            )}
        </Droppable>
}

export default Column;
