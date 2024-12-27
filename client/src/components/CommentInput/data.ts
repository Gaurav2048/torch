import { CommentType, REACTION_TYPE } from "../..";

export const comments: CommentType = {
  _id: "_id",
  comment: "This is the primary comment",
  commenterId: "66bfce1376fa92717662d42e",
  reactions: [
    {
      reactedBy: "66bfd2b776fa92717662d44c",
      reaction: REACTION_TYPE.THUMBS_UP,
    },
  ],
  replies: [
    {
      _id: "reply_id",
      reply: "First reply for this thing",
      replierId: "66c828dfecaafab5226907e1",
    },
  ],
};
