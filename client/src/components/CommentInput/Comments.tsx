import { Avatar, Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import AppButton from "../AppButton";
import { FiSmile } from "react-icons/fi";
import { APP_IMOJI } from "../../Constants";
import { useState } from "react";
import CommentInput from "./CommentInput";
import { CommentType, Member, Reaction } from "../..";
import { useRecoilValue } from "recoil";
import { memberAtom, profileAtom } from "../../AppState/state";
import useComments from "../../pages/Dashboard/view/useComments";
import AppHover from "../AppHover";
import { createReationMap } from "../../utils/utils";

type CommentsType = {
  members?: Array<Member>;
  comments: CommentType[];
};

type CommentCreateType = {
  createComment: (text: string) => void;
  createReply: (text: string, taskId: string) => void;
};

const Comments: React.FC<CommentsType & CommentCreateType> = ({
  members,
  createComment,
  createReply,
  comments,
}) => {
  const [comment, setComment] = useState<string>("");
  const handleChange = (text: string) => setComment(text);

  return (
    <Box height="100%" overflow="hidden">
      <Flex alignItems="center" marginBottom="8px">
        <Text fontSize="md" fontWeight={600} marginRight="8px">
          Add a Comment
        </Text>
        <Text fontWeight={400} fontSize="xs" color="gray">
          Type '@' to mention others
        </Text>
      </Flex>
      <CommentInput
        commentId=""
        members={members}
        comment={comment}
        isPrimary
        createComment={createComment}
        createReply={createReply}
        setComment={handleChange}
      />
      <Box height="100%" overflow="scroll">
        {comments?.map((obj) => (
          <Comment
            handleChange={handleChange}
            key={obj?._id}
            {...obj}
            createComment={createComment}
            createReply={createReply}
          />
        ))}
      </Box>
    </Box>
  );
};

const Comment: React.FC<
  CommentType & CommentCreateType & { handleChange: (text: string) => void }
> = ({ handleChange, createComment, createReply, ...props }) => {
  const [showReply, setShowReply] = useState(false);

  return (
    <Box marginTop="12px" overflow="hidden">
      <CommentUI
        comment={props.comment}
        commentId={props._id}
        reactions={props.reactions}
        commenterId={props.commenterId}
        isPrimary
        setShowReply={setShowReply}
      />
      <Reply
        commentId={props._id}
        showReply={showReply}
        comment={props.comment}
        commentObj={props}
        commenterId={props.commenterId}
        handleChange={handleChange}
        createComment={createComment}
        createReply={createReply}
      />
    </Box>
  );
};

type CommentUIType = {
  comment: string;
  commenterId: string;
  isPrimary?: boolean;
  commentId: string;
  reactions?: Array<Reaction>;
  setShowReply?: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentUI: React.FC<CommentUIType> = ({
  isPrimary,
  comment,
  commenterId,
  setShowReply,
  commentId,
  reactions,
}) => {
  const members = useRecoilValue(memberAtom);
  const { isOpen: hover, onToggle } = useDisclosure();
  const profile = useRecoilValue(profileAtom);

  const commenterProfile = members.find((member) => member._id === commenterId);
  const toogleShowReply = () => setShowReply?.((prev) => !prev);
  const { toogleCommentReaction } = useComments();

  const createReaction = async (reaction: string) => {
    const reactionBody = {
      commentId,
      reaction,
      reactorId: profile._id,
    };
    if (isPrimary) {
      await toogleCommentReaction(reactionBody);
    } else {
    }
  };

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center" gap="12px">
          <Avatar size="sm" name={commenterProfile?.name} />
          <Box>
            <Text fontSize="lg" fontWeight={600}>
              {commenterProfile?.name}
            </Text>
            <Text fontSize="xs" fontWeight={400}>
              27th March, 2024
            </Text>
          </Box>
        </Flex>
        <BsThreeDots />
      </Flex>
      <Text fontSize="medium" marginTop="8px">
        {comment || ""}
      </Text>
      <Flex alignItems="center" gap="8px" marginTop="16px">
        {isPrimary ? (
          <AppButton
            onClick={toogleShowReply}
            size="md"
            variant="ghost"
            padding="4px"
          >
            REPLY
          </AppButton>
        ) : null}
        <Flex
          onMouseEnter={onToggle}
          onMouseLeave={onToggle}
          marginTop="8px"
          marginBottom="8px"
          gap="8px"
          alignItems="center"
          position="relative"
        >
          <Box
            border="1px solid rgb(235, 235, 235)"
            padding="2px"
            borderRadius="2px"
            cursor="pointer"
          >
            <FiSmile color="gray" />
          </Box>
          <Box gap="8px" top="-20px" position="absolute" display="flex">
            {hover
              ? Object.entries(APP_IMOJI).map(([name, dec]) => (
                  <ImojiComponent
                    name={name}
                    dec={dec}
                    key={name}
                    type="APPLY_REACTION"
                    createReaction={createReaction}
                  />
                ))
              : null}
          </Box>
        </Flex>
        <DisplayReaction reactions={reactions} />
      </Flex>
    </Box>
  );
};

type DisplayReactionType = {
  reactions?: Array<Reaction>;
};

const DisplayReaction: React.FC<DisplayReactionType> = ({ reactions }) => {
  const reactionMap = createReationMap(reactions);
  return Object.entries(reactionMap).map(([name, arr]) => (
    <Flex
      alignItems="center"
      padding="2px 4px"
      border="1px solid rgb(235, 235, 235)"
      borderRadius="2px"
    >
      {String.fromCodePoint(APP_IMOJI[name])}
      <Text fontSize="sm" marginLeft="8px">
        {arr.length}
      </Text>
    </Flex>
  ));
};

type ImojiComponentType = {
  name: string;
  dec: number;
  type: "APPLY_REACTION" | "DISPLAY_REACTION";
  createReaction: (name: string) => void;
};

const ImojiComponent: React.FC<ImojiComponentType> = ({
  name,
  createReaction,
  dec,
  type,
}) => {
  return (
    <AppHover>
      {({ isOpen: hover, onClose, onOpen }) => (
        <Box
          onClick={() => createReaction(name)}
          border={
            type === "DISPLAY_REACTION"
              ? "1px solid rgb(235, 235, 235)"
              : undefined
          }
          borderRadius="2px"
          cursor="pointer"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          fontSize={hover ? "20px" : "16px"}
        >
          {String.fromCodePoint(dec)}
        </Box>
      )}
    </AppHover>
  );
};

type replyProps = {
  showReply: boolean;
  comment: string;
  commentObj: CommentType;
  commenterId: string;
  handleChange: (text: string) => void;
  commentId: string;
} & CommentCreateType;

const Reply: React.FC<replyProps> = ({
  showReply,
  commentObj,
  commenterId,
  handleChange,
  createComment,
  createReply,
  commentId,
}) => {
  const [commentReply, setCommentReply] = useState<string>("");
  const handleChangeReply = (text: string) => setCommentReply(text);

  return (
    <Box marginLeft="64px">
      <Box margin="8px 0">
        {showReply ? (
          <CommentInput
            isPrimary={false}
            comment={commentReply}
            commentId={commentId}
            setComment={handleChangeReply}
            createComment={createComment}
            createReply={createReply}
          />
        ) : null}
      </Box>
      {commentObj?.replies?.map(({ reply, replierId, _id }) => (
        <CommentUI
          key={_id}
          comment={reply}
          commenterId={replierId}
          commentId={commentId}
        />
      ))}
    </Box>
  );
};

export default Comments;
