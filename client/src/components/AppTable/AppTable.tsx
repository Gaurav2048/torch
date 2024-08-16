import { Avatar, Box, Flex, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react";

type OwnProps = {
    members: Array<Member>;
    action?: () => React.ReactElement;
}


const AppTable: React.FC<OwnProps> = ({ members }) => {
    return <TableContainer margin="0 32px" borderRadius="8px" border="1px solid rgba(235, 235, 235, 1)" >
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>User Name</Th>
          <Th>Access Type</Th>
          <Th>Projects</Th>
          <Th>Date Added</Th>
        </Tr>
      </Thead>
      <Tbody>
        {members.map(member => <Tr key={member._id}>
          <Td>
            <User name={member.name} email={member.email} />
          </Td>
          <Td>
            <Access />
          </Td>
          <Td></Td>
          <Td>
            <Text fontSize='sm'>20th Jan, 2023</Text>
          </Td>
        </Tr>)}
      </Tbody>
    </Table>
  </TableContainer>
}

export default AppTable;

type UserProps = {
    name: string,
    email: string,
}

const User: React.FC<UserProps> = ({
    name,
    email
}) => {
    return <Flex gap="8px" alignItems="center">
        <Avatar size="sm" name={name} />
        <Box>
            <Text fontSize="md" fontWeight={600} padding="0">{name}</Text>
            <Text fontSize="xs" fontWeight={300}>{email}</Text>
        </Box>
    </Flex>
}


const Access: React.FC = () => {
    return <Box width="max-content" padding="2px 12px" fontSize="12px" borderRadius="8px" color="lightgreen" border="1px solid lightgreen">
        Admin
    </Box>
}