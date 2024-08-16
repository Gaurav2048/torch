export const STATE = {
    BOARD: 'state_type_board',
    ORGANISATION: 'state_type_organisation',
}

export const DEFAULT_BOARD: BoardType = {
    _id: '',
    assignedTo: '',
    creator: '',
    orgId: '',
    tasks: {},
    columns: {},
    columnOrder: []
} 

export const DEFAULT_ORG: Organisation = {
    _id: '',
    name: '',
    sprints: [],
    workTypes: [],
}