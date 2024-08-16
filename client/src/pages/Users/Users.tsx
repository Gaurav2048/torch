import { Box, Flex, Text } from "@chakra-ui/react"
import SecondaryNavigation from "../../components/SecondaryNavigation";
import AppButton from "../../components/AppButton";
import AppTable from "../../components/AppTable";
import useAxios from "../../hooks/useAxios";
import { ROUTES } from "../../Constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateMember from "./create/CreateMember";

const Users: React.FC = () => {
    const orgId = '66beb38e168efaf09cb836bd' // Need to change to local storage later
    const navigate = useNavigate()

    const { loading, fetchData } = useAxios({
        method: 'GET',
        url: ROUTES.CREATE_MEMBER(orgId)
    })

    const openCreateMemberDrawer = () => {
        navigate('/members/create')
    }
    

    return <SecondaryNavigation>
        <Flex margin="32px" justifyContent="space-between" alignItems="center">
            <Text fontSize="md" fontWeight={600}>All Users </Text>
            <AppButton onClick={openCreateMemberDrawer}>Add Member</AppButton>
        </Flex>
        <Box>
            <AppTable members={[]} />
            <CreateMember />
        </Box>
    </SecondaryNavigation>
}

export default Users;
