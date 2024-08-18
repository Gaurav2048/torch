import { Avatar, AvatarGroup, Box, Button } from "@chakra-ui/react"
import { GoPlus } from "react-icons/go";
import { useRecoilValue } from "recoil";
import { memberAtom } from "../../AppState/state";
import { useRef } from "react";
import AppMenu from "../AppMenu";

const Members: React.FC = () => {
    const members = useRecoilValue(memberAtom)

    const openMemberMenu = () => {
        
    }

    return <Box display="flex" gap="16px" alignItems="center"> 
        <AvatarGroup size='sm'  max={4} cursor="pointer"  >
            {members?.map(member => <Avatar key={member._id} name={member.name} />)}
        </AvatarGroup>
        <AppMenu anchor={() => <Button onClick={openMemberMenu} leftIcon={<GoPlus color="white" />} size='sm' bgColor="#355EFF" color="white">Add Member</Button>
}>
        </AppMenu>
    </Box>
}

export default Members;
