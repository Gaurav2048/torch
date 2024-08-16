import { Box, Flex, Text } from "@chakra-ui/react"
import SecondaryNavigation from "../../components/SecondaryNavigation";
import AppButton from "../../components/AppButton";
import AppTable from "../../components/AppTable";
import { useNavigate } from "react-router-dom";
import CreateMember from "./create/CreateMember";
import { useRecoilValue } from "recoil";
import { memberAtom } from "../../AppState/state";

const Users: React.FC = () => {
    const navigate = useNavigate()
    const members = useRecoilValue(memberAtom)

    const openCreateMemberDrawer = () => {
        navigate('/members/create')
    }

    return <SecondaryNavigation>
        <Flex margin="32px" justifyContent="space-between" alignItems="center">
            <Text fontSize="md" fontWeight={600}>All Users </Text>
            <AppButton onClick={openCreateMemberDrawer}>Add Member</AppButton>
        </Flex>
        <Box>
            <AppTable members={members} />
            <CreateMember />
        </Box>
    </SecondaryNavigation>
}

export default Users;
