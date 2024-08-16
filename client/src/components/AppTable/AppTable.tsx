import { Avatar, Box, Flex, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import React from "react";

type OwnProps = {
    members: Array<Member>;
    action?: () => React.ReactElement;
}


const AppTable: React.FC<OwnProps> = () => {
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
        <Tr>
          <Td>
            <User />
          </Td>
          <Td>
            <Access />
          </Td>
          <Td>
            <Text fontSize='sm'>20th Jan, 2023</Text>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <User />
          </Td>
          <Td>
            <Access />
          </Td>
          <Td>
            15th Jan, 2023
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
}

export default AppTable;

const User: React.FC = () => {
    return <Flex gap="8px" alignItems="center">
        <Avatar size="sm" />
        <Box>
            <Text fontSize="md" fontWeight={600} padding="0">John Doe</Text>
            <Text fontSize="xs" fontWeight={300}>johndoe@example.com</Text>
        </Box>
    </Flex>
}


const Access: React.FC = () => {
    return <Box width="max-content" padding="2px 12px" fontSize="12px" borderRadius="8px" color="lightgreen" border="1px solid lightgreen">
        Admin
    </Box>
}