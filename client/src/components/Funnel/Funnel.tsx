import { useState } from "react";
import {board as InitialBoard} from "./data";
import { DragDropContext, Droppable, DropResult, ResponderProvided } from "react-beautiful-dnd";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { produce } from "immer";

type OwnProps = {
    board: BoardType;
    setBoard: any;
    createTask: (columnId: string) => void
}

const Funnel: React.FC<OwnProps> = ({ board, setBoard, createTask }) => {

    const move = (source: string[], destination: string[], droppableSource: DraggableLocation, droppableDestination: DraggableLocation) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
    
        destClone.splice(droppableDestination.index, 0, removed);
    
        const result: {[key: string]: string[]} = {} ;
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;
    
        return result;
    };
    
    const reorder = (list: string[], startIndex: number, endIndex: number): string[] => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
    
      return result;
    };
    
    const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
        const { source, destination, type } = result;

      if (!destination) {
        return;
    }
    
    if(type === 'column') {
        const columnOrder = board.columnOrder;
        const result = reorder(columnOrder, source.index, destination.index);
        console.log('result', result)
        setBoard(produce(board , draft => {
            draft.columnOrder=result
        }))
        // dispatchFunnelReducer({
        //     type: 'UPDATE_COLUMN',
        //     data: result,
        // })        
        return;
    }
        
    if (source.droppableId === destination.droppableId) {
        const items = reorder(
            board.columns[source.droppableId].taskIds,
            source.index,
            destination.index
        );
    
        const newBoardColumns = {
          ... board.columns,
          [source.droppableId]: {
              ... board.columns[source.droppableId],
              taskIds: items, 
          }
        }

        console.log('first', newBoardColumns)
        setBoard(produce(board , draft => {
            draft.columns=newBoardColumns
        }))
        // dispatchFunnelReducer({
        //     type: 'UPDATE_BOARD',
        //     data: newBoardColumns,
        // });
        
    } else {
        const result = move(
            board.columns[source.droppableId].taskIds,
            board.columns[destination.droppableId].taskIds,
            source,
            destination
        );
    
        const newBoardColumns = {
            ...board.columns,
            [source.droppableId]: {
                ... board.columns[source.droppableId],
                taskIds: result[source.droppableId]
            },
            [destination.droppableId]: {
                ...board.columns[destination.droppableId],
                taskIds: result[destination.droppableId]
            }
          }
          console.log('second', newBoardColumns)
          setBoard(produce(board , draft => {
            draft.columns = newBoardColumns
          }))
          // dispatchFunnelReducer({
        //       type: 'UPDATE_BOARD',
        //       data: newBoardColumns,
        //   });
    }
    
    }

    return  <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided) => <Box display="flex" {...provided.droppableProps} ref={provided.innerRef}>
            {board.columnOrder.map((columnId, index) => {
                const column = board.columns[columnId] 
                const tasks = column.taskIds.map(taskId => board.tasks[taskId])
                
                return <Header key={column.id} column={column} tasks={tasks} index={index} createTask={createTask} />
            })}
            {provided.placeholder}
        </Box>
        }
        </Droppable>
        
    </DragDropContext>
}

export default Funnel;
