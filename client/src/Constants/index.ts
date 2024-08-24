import { BoardType, Member, Organisation } from ".."

export const STATE = {
    BOARD: 'state_type_board',
    ORGANISATION: 'state_type_organisation',
    MEMBER: 'state_type_member',
}

export const colorSchema = {
    PRIMARY: "#6B49F2"
}

export const DEFAULT_BOARD: BoardType = {
    _id: '',
    assignedTo: '',
    creator: '',
    orgId: '',
    tasks: {},
    columns: {},
    columnOrder: [],
    members: [],
    name: ''
} 

export const DEFAULT_ORG: Organisation = {
    _id: '',
    name: '',
    sprints: [],
    workTypes: [],
    boards: []
}

export const DEFAULT_MEMBER: Array< Member> = []

//&#
export const APP_IMOJI = {
    "SMILE": 128512,
    "CLAPS": 128079,
    "THUMBS_UP": 128077,
    "THUMBS_DOWN": 128078,
    "THANKS": 128591
}

export const ROUTES = {
    CREATE_MEMBER: (orgId: string) => `/member/${orgId}`,
    FETCH_MEMBER: (orgId: string) => `/member/${orgId}`,
    CREATE_BOARD: (orgId: string) => `/boards/${orgId}`,
    ADD_REMOVE_MEMBER: (orgId: string) => `/boards/${orgId}/member`,
    ADD_TASK: (orgId: string, boardId: string) => `/boards/task/${orgId}/${boardId}`

}