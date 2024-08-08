import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Icon from "../Icon";
import { BsThreeDotsVertical } from "react-icons/bs";
import Funnel from "../Funnel";

const SecondaryNavigation: React.FC = () => {
    return (
        <Box display="flex" paddingTop="16px">
          <Box width="250px" height="100%" borderRight="1px solid rgba(235, 235, 235, 1)">
            <Projects />
          </Box>
          <Funnel />
        </Box>
      )
}

export default SecondaryNavigation;

const Projects: React.FC = () => {
    return (
        <Box padding="12px 16px">
            <Text align="left" fontWeight="600" fontSize='xl' marginBottom="12px">Projects</Text>
            <Box height="300px" overflow="scroll">
                <Project isActive />
                <Project isActive={false} />
                <Project isActive />
            </Box>
        </Box>
    )
}

type ProjectProps = {
    isActive: boolean
}

const Project: React.FC<ProjectProps> = ({ isActive }) => {
    return <Box borderRadius="8px" 
                marginBottom="12px" 
                display="flex" 
                padding="10px 16px 10px 10px" 
                border={!isActive ? "1px solid rgba(235, 235, 235, 1)" : "none"}
                bgColor={isActive ? "#355EFF" : "white"} 
                alignItems="center"
                color={isActive ? "white" : "#333333"}
                justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Icon shape="square" size="small" text="Test Project" border="2" />
                        <Text fontSize='md'>Test Project</Text>
                    </Box>
                    <BsThreeDotsVertical color={isActive ? "white" : "#333333"} />
            </Box>
}

