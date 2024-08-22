import React  from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import Column from './Column';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { NOSCROLL_BAR_PROPERTIES } from './Funnel';

type OwnProps = {
    column: Column;
    tasks: Task[];
    index: number;
    createTask: (columnId: string) => void
}

const Header: React.FC<OwnProps> = ({ column, tasks, index, createTask }) => {

    const handleCreateTask = () => createTask(column.id)

    return <Draggable draggableId={column._id} index={index}>
    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
    <Box ref={provided.innerRef} 
         {...provided.draggableProps}
         minWidth="300px"
         overflow="scroll"
         marginLeft="20px"
         height="100%"
         sx={NOSCROLL_BAR_PROPERTIES}
    >
            <Box zIndex={1000} top="0" position="sticky" bgColor="rgb(247, 247, 247)">
                <Box display="flex" marginBottom="18px" justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap="8px">
                        <Box width="8px" height="8px" borderRadius="50%" bgColor="lightgreen" />
                        <Text fontWeight="500" fontSize="md">{column.title}</Text>
                    </Flex>
                    <Box {...provided.dragHandleProps} >
                        <BsThreeDotsVertical color="#333333" />
                    </Box>
                </Box>
                <Button onClick={handleCreateTask} marginBottom="12px" leftIcon={<GoPlus color="#355EFF" />} size='md'  width="100%" color="#355EFF">Create New Task</Button>
            </Box>
            <Column column={column} tasks={tasks} />
        </Box>)}
        </Draggable>
}

export default Header;