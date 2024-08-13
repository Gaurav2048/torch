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
    return <Box  >
        <Droppable droppableId={column.id}>
            {(provided) => (
                <Box ref={provided.innerRef} {...provided.droppableProps} height="800px" overflow="scroll !important" >
                    
                        {tasks.map((task, index) => <Task key={task.id} index={index} task={task} />)}
                        {provided.placeholder}
                   
                </Box>
            )}
        </Droppable>
    </Box>
}

export default Column;
