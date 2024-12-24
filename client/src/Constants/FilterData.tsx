import { BoardType } from ".."
import { IconAssignee, IconLabel, IconPriority, IconSprint, IconStatus } from "./Icons"

export type FILTER_TYPES = "STATUS" | "ASSIGNEE" | "LABEL" | "PRIORITY" | "SPRINT"

export type APPLICABLE_FILTER_TYPE = {
    type: FILTER_TYPES,
    filterMethod: (params: string[], board: BoardType) => BoardType,
    icon: (color: string) => React.ReactElement,
    alias: string[]
}

export const APPLICABLE_FILTERS: APPLICABLE_FILTER_TYPE[] = [
    {
        type: "STATUS",
        filterMethod: (params, board) => board,
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