import React  from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import Column from './Column';

type OwnProps = {
    column: Column;
    tasks: Task[];
    index: number;
}

const Header: React.FC<OwnProps> = ({ column, tasks, index }) => {

    return <Draggable draggableId={column.id} index={index}>
    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
    <div ref={provided.innerRef} 
         {...provided.draggableProps}
    >
            <div >
                <div {...provided.dragHandleProps}>
                    ||
                </div>
                <div {...provided.dragHandleProps}>
                </div>
            </div>
            <Column column={column} tasks={tasks} />
        </div>)}
        </Draggable>
}

export default Header;