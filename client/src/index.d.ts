interface BoardType {
    _id: string;
    name: string;
    tasks: Tasks;
    columns: Columns;
    columnOrder: string[];
    members?: Array<TMember>;
    creator: string; 
    orgId: string;
    assignedTo: string;
  }
  interface Columns {
    [key: string]: Column;
  }
  interface Column {
    _id: string;
    title: string;
    taskIds: string[];
  }
  interface Tasks {
    [key: string]: Task;
  }
  interface Task {
    _id: string;
    content: string;
    title?: string;
    sprintId?: string;
    todos?: Array<Todo>;
    comments?: Array<Comment>;
    workType: string;
  }

  interface Todo {
    _id: string;
    text: string;
    completed: boolean;
  }

  interface Comment {
    _id: String;
    text: String;
  }

  interface TMember {
    _id: string;
    role: "ADMIN" | "USER";
  }


  interface Organisation {
    _id: string;
    name: string;
    sprints: Array<sprint>;
    workTypes: Array<WorkType>;
    boards: Array<Partial<BoardType>>
  }

  interface Sprint {
    _id: string;
    name: string;
    size: number; // in days
  }

  interface WorkType {
    _id: string;
    name: string;
  }

  interface Member {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: string;
    organisation: string;
    createdAt?: string;
    boards?: Array<string>;
  }