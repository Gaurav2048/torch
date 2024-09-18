import { useRecoilState, useRecoilValue } from "recoil";
import {
  boardAtom,
  commentsAtom,
  memberAtom,
  orgAtom,
  profileAtom,
} from "../../../AppState/state";
import { useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { ROUTES } from "../../../Constants";
import { useParams } from "react-router-dom";
import { produce } from "immer";

const useComments = () => {
  const org = useRecoilValue(orgAtom);
  const profile = useRecoilValue(profileAtom);
  const [comments, setComments] = useRecoilState(commentsAtom);

  const { boardId, taskId } = useParams();

  const {
    loading: createCommentLoader,
    response: createCommentData,
    fetchData: createCommentRequest,
  } = useAxios({
    url: ROUTES.CREATE_COMMENT(org._id, boardId || "", taskId || ""),
    method: "POST",
  });

  const {
    loading: fetchCommentLoader,
    response: commentData,
    fetchData: fetchCommentRequest,
  } = useAxios({
    url: ROUTES.GET_COMMENTS(org._id, boardId || "", taskId || ""),
    method: "GET",
  });

  const {
    loading: createReplyLoader,
    response: createReplyData,
    fetchData: createReplyRequest,
  } = useAxios({
    url: ROUTES.CREATE_REPLY(org._id, boardId || "", taskId || ""),
    method: "POST",
  });

  const {
    loading: createCommentReactionLoader,
    response: createCommentReactionData,
    fetchData: toogleCommentReactionRequest,
  } = useAxios({
    url: ROUTES.CREATE_COMMENT_REACTION(org._id, boardId || "", taskId || ""),
    method: "PATCH",
  });

  useEffect(() => {
    fetchCommentRequest();
  }, []);

  useEffect(() => {
    if (!commentData) return;
    setComments(commentData);
  }, [commentData]);

  useEffect(() => {
    if (!createCommentData) return;
    setComments(
      produce(comments, (draft) => {
        if (!draft) return;
        draft?.unshift(createCommentData);
        return draft;
      }),
    );
  }, [createCommentData]);

  useEffect(() => {
    if (!createReplyData) return;
    setComments(
      comments?.map((c) => {
        if (c._id !== createReplyData._id) {
          return c;
        } else {
          return createReplyData;
        }
      }),
    );
  }, [createReplyData]);

  useEffect(() => {
    if (!createCommentReactionData) return;
    setComments(
      produce(comments, (draft) => {
        draft.map((c) => {
          if (c._id === createCommentReactionData._id) {
            c.reactions = createCommentReactionData.reactions;
          }
          return c;
        });
        return draft;
      }),
    );
  }, [createCommentReactionData]);

  const createReply = async (reply: string, commentId: string) => {
    const replyRequestData = {
      reply,
      commentId,
      replierId: profile._id,
    };
    await createReplyRequest(replyRequestData);
  };

  const createComment = async (comment: string) => {
    const commentData = {
      comment,
      commenterId: profile._id,
    };
    await createCommentRequest(commentData);
  };

  const toogleCommentReaction = async (data: any) => {
    await toogleCommentReactionRequest(data);
  };

  return {
    createComment,
    createReply,
    fetchCommentLoader,
    comments,
    toogleCommentReaction,
  };
};

export default useComments;
