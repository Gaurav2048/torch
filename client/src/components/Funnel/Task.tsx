import { Avatar, AvatarGroup, Box, Flex, Text } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import { FaTasks } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";

type OwnProps = {
    task: Task;
    index: number;
}

const Task: React.FC<OwnProps> = ({ task, index }) => {
    return <Draggable draggableId={task.id} index={index} >
        {(provided) => (
            <Flex
                border="1px solid rgba(235, 235, 235, 1)" 
                borderRadius="8px" 
                marginBottom="8px"
                bgColor="white"
                minHeight="250px"
                flexDirection="column"
                justifyContent="space-between"
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                <Box padding="8px 16px 12px 16px" >
                    <Text fontWeight={600} fontSize='xs' borderRadius="14px" padding="4px 12px" bgColor="white"  width="fit-content" border="1px solid orange" color="orange">UX Stage</Text>
                    <Text marginTop="16px" fontSize='sm' textAlign='left' fontWeight={600}>Wireframing</Text>
                    <Text marginTop="16px" fontSize='xs' textAlign='left' color="rgb(188, 193, 199)">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, adipisci quisquam quod magnam odit porro! Quisquam unde voluptates assumenda natus?</Text>
                    <Flex marginTop="8px" padding="2px 4px" gap="8px" alignItems="center" width="max-content" color="rgb(188, 193, 199)" border="1px solid rgb(188, 193, 199)" borderRadius="4px" >
                        <FaTasks fontSize="16px" />
                        <Text fontSize='xs'>1/8</Text>
                    </Flex>
                </Box>
                <Flex padding="12px 16px" justifyContent="space-between" alignItems="center" borderTop="1px solid rgb(188, 193, 199)">
                <AvatarGroup size='xs' max={2}>
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </AvatarGroup>
                <Flex alignItems="center" gap="4px">
                    <FaRegComment color="lightgray" />
                    <Text fontSize="xs" color="rgb(188, 193, 199)">11</Text>
                </Flex>
                </Flex>
            </Flex>
        )}
    </Draggable>
}

export default Task;
