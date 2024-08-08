import { Box } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

type OwnProps = {
    task: Task;
    index: number;
}

const Task: React.FC<OwnProps> = ({ task, index }) => {
    return <Draggable draggableId={task.id} index={index} >
        {(provided) => (
            <Box
                border="1px solid rgba(235, 235, 235, 1)" 
                borderRadius="8px" 
                padding="8px" 
                marginBottom="8px"
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                {task.content}
            </Box>
        )}
    </Draggable>
}

export default Task;
