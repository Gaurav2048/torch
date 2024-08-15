interface BoardType {
    id: string;
    tasks: Tasks;
    columns: Columns;
    columnOrder: string[];
    members?: Array<Member>;
    creator: string; 
    orgId: string;
    assignedTo: string;
  }
  interface Columns {
    [key: string]: Column;
  }
  interface Column {
    id: string;
    title: string;
    taskIds: string[];
  }
  interface Tasks {
    [key: string]: Task;
  }
  interface Task {
    id: string;
    content: string;
    title?: string;
    sprintId?: string;
    todos?: Array<Todo>;
    comments?: Array<Comment>;
    workType: string;
  }

  interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }

  interface Comment {
    id: String;
    text: String;
  }

  interface Member {
    id: string;
    role: "ADMIN" | "USER";
  }


  interface Organisation {
    id: string;
    name: string;
    sprints: Array<Sprint>;
    workType: Array<WorkType>;
  }

  interface Sprint {
    id: string;
    name: string;
    size: number; // in days
  }

  interface WorkType {
    id: string;
    name: string;
  }