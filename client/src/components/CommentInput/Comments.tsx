import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs";
import AppButton from "../AppButton";
import { FiSmile } from "react-icons/fi";
import { APP_IMOJI } from "../../Constants";
import { useState } from "react";
import CommentInput from "./CommentInput";
import { CommentType, Member } from "../..";
import { useRecoilValue } from "recoil";
import { memberAtom } from "../../AppState/state";


type CommentsType = {
        members?: Array<Member>;
        comments: CommentType[];
}

type CommentCreateType = {
    createComment: (text: string) => void;
    createReply: (text: string, taskId: string) => void;
}
  

const Comments: React.FC<CommentsType & CommentCreateType> = ({ members, createComment, createReply, comments }) => {
    const [ comment, setComment ] = useState<string>('')
    const handleChange = (text: string) => setComment(text)

    return <Box height="100%" overflow="hidden">
        <CommentInput commentId="" members={members} comment={comment} isPrimary createComment={createComment} createReply={createReply} setComment={handleChange} />
        <Box height="100%" overflow="scroll">
            {comments?.map(obj => <Comment handleChange={handleChange} key={obj?._id} {...obj} createComment={createComment} createReply={createReply} />)}
        </Box>
    </Box>
}

const Comment: React.FC<CommentType & CommentCreateType & { handleChange: (text: string) => void }> = ({
    handleChange,
    createComment,
    createReply, 
    ...props
}) => {
    const [ showReply, setShowReply ] = useState(false)

    return <Box marginTop="12px" overflow="hidden" >
            <CommentUI comment={props.comment} commenterId={props.commenterId}  isPrimary setShowReply={setShowReply} />
            <Reply commentId={props._id} showReply={showReply} comment={props.comment} commentObj={props} commenterId={props.commenterId} handleChange={handleChange} createComment={createComment} createReply={createReply} />
        </Box>
}

type CommentUIType = {
    comment: string;
    commenterId: string;
    isPrimary?: boolean;
    setShowReply?: React.Dispatch<React.SetStateAction<boolean>>
}

const CommentUI: React.FC<CommentUIType> = ({
    isPrimary,
    comment,
    commenterId,
    setShowReply
}) => {
    const members = useRecoilValue(memberAtom)

    const commenterProfile = members.find(member => member._id === commenterId)
    const toogleShowReply = () => setShowReply?.(prev => !prev)

    return (
        <Box>
            <Flex justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" gap="12px">
                    <Avatar size="sm" name={commenterProfile?.name} />
                    <Box>
                        <Text 
                            fontSize="lg" 
                            fontWeight={600}
                        >
                            {commenterProfile?.name}
                        </Text>
                        <Text 
                            fontSize="xs" 
                            fontWeight={400}
                        >
                            27th March, 2024
                        </Text>
                    </Box>
                </Flex>
                <BsThreeDots />
            </Flex>
            <Text fontSize="medium" marginTop="8px">
                {comment || ''}
            </Text>
            <Flex alignItems="center" gap="8px" marginTop="16px">
                {isPrimary ? 
                    <AppButton 
                        onClick={toogleShowReply} 
                        size="md" 
                        variant="ghost" 
                        padding="4px"
                    >
                        REPLY
                    </AppButton> : null}
                <Box 
                    border="1px solid rgb(235, 235, 235)" 
                    padding="2px" 
                    borderRadius="2px"
                >
                    <FiSmile color="gray" />
                </Box>
                {Object.entries(APP_IMOJI).map(([name, dec]) => (
                    <Box 
                        key={name} 
                        border="1px solid rgb(235, 235, 235)" 
                        padding="2px" 
                        borderRadius="2px"
                    >
                        {String.fromCodePoint(dec)}
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}

type replyProps = {
    showReply: boolean;
    comment: string;
    commentObj: CommentType;
    commenterId: string;
    handleChange: (text: string) => void;
    commentId: string;
} & CommentCreateType

const Reply: React.FC<replyProps> = ({
    showReply,
    commentObj,
    commenterId,
    handleChange,
    createComment,
    createReply,
    commentId
}) => {
    const [ commentReply, setCommentReply ] = useState<string>('')
    const handleChangeReply = (text: string) => setCommentReply(text)

    return <Box marginLeft="64px">
        <Box margin="8px 0">
            {showReply ? 
                <CommentInput 
                    isPrimary={false} 
                    comment={commentReply} 
                    commentId={commentId}
                    setComment={handleChangeReply} 
                    createComment={createComment} 
                    createReply={createReply} 
                /> : null }
        </Box>
        {commentObj?.
            replies?.
                map(({ reply, replierId, _id }) => 
                    <CommentUI 
                        key={_id}
                        comment={reply} 
                        commenterId={replierId} 
                    />
                )
        }
    </Box>
}

export default Comments;
