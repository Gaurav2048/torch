import { Avatar, AvatarGroup, Box, Button } from "@chakra-ui/react"
import { GoPlus } from "react-icons/go";

const Members: React.FC = () => {

    return <Box display="flex" gap="16px" alignItems="center"> 
        <AvatarGroup size='sm'  max={4} cursor="pointer"  >
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        </AvatarGroup>
        <Button leftIcon={<GoPlus color="white" />} size='sm' bgColor="#355EFF" color="white">Add Member</Button>
    </Box>
}

export default Members;
