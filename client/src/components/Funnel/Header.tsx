import React from "react";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import Column from "./Column";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { NOSCROLL_BAR_PROPERTIES } from "./Funnel";
import { COLORS } from "../../pages/Settings/WorkFlow/WorkFlow";
import { colorSchema } from "../../Constants";

type OwnProps = {
  column: Column;
  tasks: Task[];
  index: number;
  createTask: (columnId: string) => void;
  openTask: (taskId: string) => void;
};

const Header: React.FC<OwnProps> = ({
  column,
  tasks,
  index,
  createTask,
  openTask,
}) => {
  const handleCreateTask = () => createTask(column.id);

  return (
    <Draggable draggableId={column._id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          minWidth="300px"
          overflow="scroll"
          marginLeft="20px"
          height="100%"
          sx={NOSCROLL_BAR_PROPERTIES}
        >
          <Box
            zIndex={1000}
            top="0"
            position="sticky"
            bgColor="rgb(247, 247, 247)"
          >
            <Box
              display="flex"
              marginBottom="18px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex alignItems="center" gap="8px">
                <Box
                  width="8px"
                  height="8px"
                  borderRadius="50%"
                  bgColor={COLORS[index]}
                />
                <Text fontWeight="500" fontSize="md">
                  {column.title}
                </Text>
                <Box
                  borderRadius="50%"
                  fontWeight={400}
                  bgColor="white"
                  fontSize="12px"
                  padding="2px 12px"
                >
                  {column.taskIds.length}
                </Box>
              </Flex>
              <Box {...provided.dragHandleProps}>
                <BsThreeDotsVertical color="#333333" />
              </Box>
            </Box>
            <Button
              onClick={handleCreateTask}
              marginBottom="12px"
              leftIcon={<GoPlus color={colorSchema.PRIMARY} />}
              size="md"
              width="100%"
              color={colorSchema.PRIMARY}
            >
              Create New Task
            </Button>
          </Box>
          <Column openTask={openTask} column={column} tasks={tasks} />
        </Box>
      )}
    </Draggable>
  );
};

export default Header;
