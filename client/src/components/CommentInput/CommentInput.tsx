import React, { useMemo } from "react";
import { MentionsInput, Mention } from "react-mentions";
import AppButton from "../AppButton";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import defaultStyle from "./defaultStyle";
import { Member } from "../..";

type CommentInputType = {
  comment: string;
  isPrimary: boolean;
  setComment: (comment: string) => void;
  members?: Array<Member>;
  commentId: string;
  createComment: (text: string) => void;
  createReply: (text: string, taskId: string) => void;
};

const CommentInput: React.FC<CommentInputType> = ({
  comment,
  setComment,
  members,
  isPrimary,
  createComment,
  createReply,
  commentId,
}) => {
  const memberSuggestions = useMemo<{ id: string; display: string }[]>(() => {
    if (!members) return [];
    return members?.map((member) => ({
      id: member._id,
      display: member.name,
    }));
  }, [members]);

  const handleCreateComment = () => {
    if (isPrimary) {
      createComment(comment);
    } else {
      createReply(comment, commentId);
    }
    setComment("");
  };

  return (
    <Box>
      <MentionsInput
        value={comment}
        placeholder="Enter your comment"
        onChange={(_, newValue) => setComment(newValue)}
        style={defaultStyle}
      >
        <Mention
          trigger="@"
          data={memberSuggestions}
          renderSuggestion={(suggestion) => (
            <Suggestion displayName={suggestion?.display || ""} />
          )}
        />
      </MentionsInput>
      {comment ? (
        <AppButton
          float="right"
          onClick={handleCreateComment}
          color="white"
          marginTop="-36px"
          bgColor="#6B49F2"
          fontSize="md"
          marginRight="8px"
          size="small"
          padding="4px"
        >
          SEND
        </AppButton>
      ) : null}
    </Box>
  );
};

const Suggestion: React.FC<{ displayName: string }> = ({ displayName }) => {
  return (
    <Flex gap="4px">
      <Avatar title={displayName} name={displayName} size="xs" />
      {displayName}
    </Flex>
  );
};

export default CommentInput;
