import { produce } from "immer"
import { BoardType } from ".."
import { IconAssignee, IconLabel, IconPriority, IconSprint, IconStatus } from "./Icons"

export type FILTER_TYPES = "STATUS" | "ASSIGNEE" | "LABEL" | "PRIORITY" | "SPRINT"

export type APPLICABLE_FILTER_TYPE = {
    type: FILTER_TYPES,
    filterMethod: (params: Array<PARAM_TYPE>, board: BoardType) => BoardType,
    icon: (color: string) => React.ReactElement,
    alias: string[]
}

export type PARAM_TYPE = { id: string, name: string, icon: string }
export type APPLIED_FILER = APPLICABLE_FILTER_TYPE & { params: Array<PARAM_TYPE>; id: string }

const filterByStatus = (params: Array<PARAM_TYPE>, board: BoardType): BoardType => {
    const initialColumns: { [key: string]: any } = {}   
    return produce(board, draft => {
      draft.columns = Object.keys(draft.columns).reduce((prev, current) => {
        const column = draft.columns[current]
        if (!!params.find(param => param.id.includes(current))) {
            prev[current] = column
        }
        return prev
      }, initialColumns);

      draft.columnOrder = draft.columnOrder.reduce((prev, current) => {
        if (!!params.find(param => param.id.includes(current))) {
            prev.push(current)
        }
        return prev
      }, [] as string[])

      return draft
    })
}

const filterByAssignee = (params: Array<FILTER_TYPES>, board: BoardType) => { 
}

export const APPLICABLE_FILTERS: APPLICABLE_FILTER_TYPE[] = [
    {
        type: "STATUS",
        filterMethod: filterByStatus,
        icon: (color: string) => <IconStatus color={color} />,
        alias: ["is", "is one of"]
    },
    {
        type: "ASSIGNEE",
        filterMethod: (params, board) => board,
        icon: (color: string) => <IconAssignee color={color} />,
        alias: ["is", "is one of"]
    },
    {
        type: "LABEL",
        filterMethod: (params, board) => board,
        icon: (color: string) => <IconLabel color={color} />,
        alias: ["is", "is one of"]
    },
    {
        type: "PRIORITY",
        filterMethod: (params, board) => board,
        icon: (color: string) => <IconPriority color={color} />,
        alias: ["is", "is one of"]
    },
    {
        type: "SPRINT",
        filterMethod: (params, board) => board,
        icon: (color: string) => <IconSprint color={color} />,
        alias: ["is", "is one of"]
    },
]

