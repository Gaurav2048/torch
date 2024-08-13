import { Box, Text } from "@chakra-ui/react";
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
                padding="12px 16px" 
                marginBottom="8px"
                bgColor="white"
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                <Text fontWeight={600} fontSize='xs' borderRadius="14px" padding="4px 12px" bgColor="white"  width="fit-content" border="1px solid orange" color="orange">UX Stage</Text>
                <Text marginTop="16px" fontSize='sm' textAlign='left' fontWeight={600}>Wireframing</Text>
                <Text marginTop="16px" fontSize='xs' textAlign='left' color="rgb(188, 193, 199)">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, adipisci quisquam quod magnam odit porro! Quisquam unde voluptates assumenda natus?</Text>
            </Box>
        )}
    </Draggable>
}

export default Task;
