import { Box } from "@chakra-ui/react";
import TaskComponent from "./Task";
import { Droppable } from "react-beautiful-dnd";
import { Column, Task } from "../..";

type OwnProps = {
  column: Column;
  tasks: Task[];
  openTask: (taskId: string) => void;
};

const ColumnComponent: React.FC<OwnProps> = ({ column, tasks, openTask }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <Box height="100%" ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <TaskComponent openTask={openTask} key={task.id} index={index} task={task} />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default ColumnComponent;
