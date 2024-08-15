export const board: BoardType = {
    id: 'board-1',
    orgId: 'org_id_1',
    assignedTo: 'member_1',
    creator: 'creator_id_1',
    tasks: {
        'task-1': { id: 'task-1', content: 'task 1 content' },
        'task-2': { id: 'task-2', content: 'task 2 content' },
        'task-3': { id: 'task-3', content: 'task 3 content' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3' ],
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds: []
        },
    },
    columnOrder: ['column-1', 'column-2']
}