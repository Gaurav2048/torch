import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs";
import AppButton from "../AppButton";
import { FiSmile } from "react-icons/fi";
import { APP_IMOJI } from "../../Constants";
import { useState } from "react";
import CommentInput from "./CommentInput";

const Comments: React.FC = () => {
    return <Box height="100%" overflow="hidden">
        <CommentInput />
        <Box height="100%" overflow="scroll">
            <Comment />
            <Comment />
        </Box>
    </Box>
}

const Comment: React.FC = () => {
    const [ showReply, setShowReply ] = useState(false)

    return <Box marginTop="12px" overflow="hidden" >
            <CommentUI isPrimary setShowReply={setShowReply} />
            <Reply showReply={showReply} />
        </Box>
}

type CommentUIType = {
    isPrimary?: boolean;
    setShowReply?: React.Dispatch<React.SetStateAction<boolean>>
}

const CommentUI: React.FC<CommentUIType> = ({
    isPrimary,
    setShowReply
}) => {

    const toogleShowReply = () => setShowReply?.(prev => !prev)

    return (
        <Box>
        <Flex justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" gap="12px">
                    <Avatar size="sm" name="John Doe" />
                    <Box>
                        <Text fontSize="lg" fontWeight={600}>John Doe</Text>
                        <Text fontSize="xs" fontWeight={400}>27th March, 2024</Text>
                    </Box>
                </Flex>
                <BsThreeDots />
            </Flex>
            <Text fontSize="medium" marginTop="8px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis consectetur optio tempora libero consequatur, sapiente obcaecati aspernatur voluptates quia. 
            </Text>
            <Flex alignItems="center" gap="8px" marginTop="16px">
                {isPrimary ? <AppButton onClick={toogleShowReply} size="md" variant="ghost" padding="4px">REPLY</AppButton> : null}
                <Box border="1px solid rgb(235, 235, 235)" padding="2px" borderRadius="2px">
                    <FiSmile color="gray" />
                </Box>
                {Object.entries(APP_IMOJI).map(([name, dec]) => (
                    <Box key={name} border="1px solid rgb(235, 235, 235)" padding="2px" borderRadius="2px">
                        {String.fromCodePoint(dec)}
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}

type replyProps = {
    showReply: boolean;
}

const Reply: React.FC<replyProps> = ({
    showReply
}) => {
    return <Box marginLeft="64px">
        <Box margin="8px 0">
            {showReply ? <CommentInput /> : null }
        </Box>
        <CommentUI />
        <CommentUI />
        <CommentUI />
        <CommentUI />
    </Box>
}

export default Comments;
