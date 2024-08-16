import { Box, Flex, Text } from "@chakra-ui/react"
import SecondaryNavigation from "../../components/SecondaryNavigation";
import AppButton from "../../components/AppButton";
import AppTable from "../../components/AppTable";
import useAxios from "../../hooks/useAxios";
import { ROUTES } from "../../Constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateMember from "./create/CreateMember";
import { useRecoilState } from "recoil";
import { memberAtom } from "../../AppState/state";

const Users: React.FC = () => {
    const orgId = '66beb38e168efaf09cb836bd' // Need to change to local storage later
    const navigate = useNavigate()
    const [ members, setMembers ] = useRecoilState(memberAtom)

    const { loading, response, fetchData } = useAxios({
        method: 'GET',
        url: ROUTES.FETCH_MEMBER(orgId)
    })

    const openCreateMemberDrawer = () => {
        navigate('/members/create')
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if(!response) return
        setMembers(response)
    }, [response])
    

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
