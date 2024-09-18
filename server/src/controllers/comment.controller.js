const {
  BAD_REQUEST,
  OK,
  INTERNAL_SERVER_ERROR,
  CREATED,
} = require("http-status");
const Board = require("../models/board.model");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const Comment = require("../models/comment.model");

const getComments = catchAsync(async (req, res) => {
  const { orgId, boardId, taskId } = req.params;
  const board = await Board.findById(boardId);

  if (!board || board.orgId !== orgId) {
    throw new ApiError(BAD_REQUEST, "No board found!");
  }
  // console.log(board.tasks.get(taskId), board.tasks)
  // console.log(boardId, taskId)
  if (!board.tasks.get(taskId)) {
    throw new ApiError(BAD_REQUEST, "Task not belongs to current project!");
  }

  const comments = await Comment.find({
    taskId,
  });
  res.status(OK).send(comments || []);
});

const createComment = catchAsync(async (req, res) => {
  const { orgId, boardId, taskId } = req.params;
  const { comment, commenterId } = req.body;

  const commentData = {
    comment,
    taskId,
    commenterId,
    reactions: [],
    replies: [],
  };
  // const comments = await Comment.findOne({ taskId })

  const newComment = await Comment.create(commentData);
  if (!newComment) {
    throw new ApiError(INTERNAL_SERVER_ERROR, "Something went wrong!");
  }
  res.status(CREATED).send(newComment);
});

const replyToComment = catchAsync(async (req, res) => {
  const { orgId, boardId, taskId } = req.params;
  const { reply, commentId, replierId } = req.body;

  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new ApiError(BAD_REQUEST, "Comment not found!");
  }
  const replyObj = {
    reply,
    replierId,
    reactions: [],
  };
  comment.replies.push(replyObj);
  await comment.save();
  res.status(OK).send(comment);
});

const reactToComment = catchAsync(async (req, res) => {
  const { orgId, boardId, taskId } = req.params;
  const { commentId, reaction, reactorId, type } = req.body;
  const comment = await Comment.findById(commentId);
  if (!comment) {
    throw new ApiError(BAD_REQUEST, "Comment Not found");
  }
  if (comment?.taskId !== taskId) {
    throw new ApiError(BAD_REQUEST, "Trying to update the wrong comment.");
  }
  let index = -1;
  for (let i = 0; i < comment.reactions.length; i++) {
    const { reactedBy, reaction: react } = comment.reactions[i];
    if (reactedBy === reactorId && reaction === react) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    comment.reactions.splice(index, 1);
  } else {
    comment.reactions.push({
      reactedBy: reactorId,
      reaction,
    });
  }
  await comment.save();
  res.status(OK).send(comment);
});

module.exports = {
  getComments,
  createComment,
  replyToComment,
  reactToComment,
};
