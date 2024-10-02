import {
  BoardType,
  CommentType,
  Member,
  Organisation,
  REACTION_TYPE,
} from "..";

export const STATE = {
  BOARD: "state_type_board",
  ORGANISATION: "state_type_organisation",
  MEMBER: "state_type_member",
  COMMENTS: "state_type_comments",
  PROFILE: "state_type_profile",
};

export const colorSchema = {
  PRIMARY: "#6B49F2",
};

export const DEFAULT_BOARD: BoardType = {
  _id: "",
  assignedTo: "",
  creator: "",
  orgId: "",
  tasks: {},
  columns: {},
  columnOrder: [],
  members: [],
  name: "",
};

export const DEFAULT_ORG: Organisation = {
  _id: "",
  name: "",
  sprints: [],
  workTypes: [],
  boards: [],
};

export const SOCKET_EVENT_TYPE = {
  REGISTER_AVAILABILITY: "register_availability",
  JOIN_ORGANISATION: "join_organisation",
  UPDATE_ORGANISATION_AVAILABILITY: "organizationUpdate_avaliablity"
}

export const DEFAULT_MEMBER: Array<Member> = [];

//&#
export const APP_IMOJI: { [key: string]: number } = {
  SMILE: 128512,
  CLAPS: 128079,
  THUMBS_UP: 128077,
  THUMBS_DOWN: 128078,
  THANKS: 128591,
};

export const DEFAULT_COMMENT: Array<CommentType> = [];

export const ROUTES = {
  CREATE_MEMBER: (orgId: string) => `/member/${orgId}`,
  FETCH_MEMBER: (orgId: string) => `/member/${orgId}`,
  CREATE_BOARD: (orgId: string) => `/boards/${orgId}`,
  ADD_REMOVE_MEMBER: (orgId: string) => `/boards/${orgId}/member`,
  ADD_TASK: (orgId: string, boardId: string) =>
    `/boards/task/${orgId}/${boardId}`,
  CREATE_COMMENT: (orgId: string, boardId: string, taskId: string) =>
    `/comment/${orgId}/${boardId}/${taskId}`,
  GET_COMMENTS: (orgId: string, boardId: string, taskId: string) =>
    `/comment/${orgId}/${boardId}/${taskId}`,
  CREATE_REPLY: (orgId: string, boardId: string, taskId: string) =>
    `/comment/${orgId}/${boardId}/${taskId}/reply`,
  CREATE_COMMENT_REACTION: (orgId: string, boardId: string, taskId: string) =>
    `/comment/${orgId}/${boardId}/${taskId}/react`,
  FETCH_PROFILE: () => `/auth/profile` 
};
