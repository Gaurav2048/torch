interface BoardType {
  _id: string;
  name: string;
  tasks: Tasks;
  columns: Columns;
  columnOrder: string[];
  members?: Array<string>;
  creator: string;
  orgId: string;
  assignedTo: string;
}
interface Columns {
  [key: string]: Column;
}
interface Column {
  _id: string;
  id: string;
  title: string;
  taskIds: string[];
}
interface Tasks {
  [key: string]: Task;
}
interface Task {
  _id: string;
  id: string;
  content: string;
  title?: string;
  sprintId?: string;
  createdBy?: string;
  assignedTo?: string;
  columnId?: string;
  todos?: Array<Todo>;
  comments?: Array<CommentType>;
  workType: string;
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface CommentType {
  _id: string;
  comment: string;
  commenterId: string;
  reactions?: Array<Reaction>;
  replies: Array<Reply>;
}

interface Reply {
  _id: string;
  reply: string;
  replierId: string;
  reactions?: Array<Reaction>;
}

export enum REACTION_TYPE {
  SMILE,
  THUMBS_UP,
  THUMBS_DOWN,
  CLAPS,
  THANKS,
}

interface Reaction {
  reactedBy: string;
  reaction: REACTION_TYPE;
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
  boards: Array<Partial<BoardType>>;
}

interface Sprint {
  _id: string;
  name: string;
  size: number; // in days
}

interface WorkType {
  _id: string;
  name: string;
  color: string;
}

interface Member {
  _id: string;
  name: string;
  email: string;
  password: string;
  online?: boolean;
  role: string;
  organisation: string;
  createdAt?: string;
  boards?: Array<string>;
}

interface MemberMap {
  [key: string]: Member;
}

interface DisplayPriority {
  display: "board" | "list";
  column: string;
  orderBy: string;
  asc: boolean;
  displayItems: Array<string>;
}
