interface BoardType {
    id: string;
    tasks: Tasks;
    columns: Columns;
    columnOrder: string[];
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
  }

  interface Todo {
    id: String;
    text: String;
    completed: boolean;
  }

  interface Comment {
    id: String;
    text: String;
  }