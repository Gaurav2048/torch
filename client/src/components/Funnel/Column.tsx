import { Box } from "@chakra-ui/react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";


type OwnProps = {
    column: Column;
    tasks: Task[];
    openTask: (taskId: string) => void
}

const Column: React.FC<OwnProps> = ({
    column, tasks,
    openTask
}) => {
    return <Droppable droppableId={column.id}>
            {(provided) => (
                <Box  height="100%" ref={provided.innerRef} {...provided.droppableProps} >
                    {tasks.map((task, index) => <Task openTask={openTask} key={task.id} index={index} task={task} />)}
                    {provided.placeholder}
                </Box>
            )}
        </Droppable>
}

export default Column;
