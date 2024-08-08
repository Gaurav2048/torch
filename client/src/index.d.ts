interface BoardType {
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
  }