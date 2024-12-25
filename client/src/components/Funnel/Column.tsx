import { Box } from "@chakra-ui/react";
import TaskComponent from "./Task";
import { Droppable } from "react-beautiful-dnd";
import { Column, Task } from "../..";
import { NOSCROLL_BAR_PROPERTIES } from "./Funnel";

type OwnProps = {
  column: Column;
  tasks: Task[];
  openTask: (taskId: string) => void;
};

const ColumnComponent: React.FC<OwnProps> = ({ column, tasks, openTask }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <Box
          width="300px"
          paddingBottom="40px"
          height="100%"
          overflowY="scroll"
          overflowX="hidden"
          ref={provided.innerRef}
          {...provided.droppableProps}
          sx={NOSCROLL_BAR_PROPERTIES}
        >
          {tasks.map((task, index) => (
            <TaskComponent
              openTask={openTask}
              key={task.id}
              index={index}
              task={task}
            />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default ColumnComponent;
