import { Box, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import Icon from "../Icon";
import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "../Header";
import Search from "../Search";
import Others, { HEADER_ICON_COLOR, HEADER_ICON_SIZE } from "../Header/Others";
import Dashboard from "../../pages/Dashboard";
import AppRouter from "../../router";
import { useLocation, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { GiSprint } from "react-icons/gi";
import { GoWorkflow } from "react-icons/go";

type OwnProps = {
    children: React.ReactElement | React.ReactElement[]
}

const SecondaryNavigation: React.FC<OwnProps> = ({
    children
}) => {

    const location = useLocation()

    const isProject = useMemo<boolean>(() => {
       return location.pathname.includes('dashboard')
    }, [])

    return (
        <Box display="flex" width="100%">
          <Box width="300px" height="100%" borderRight="1px solid rgba(235, 235, 235, 1)">
            {isProject ? <Projects /> : <SettingsMenu />}
          </Box>
          <Box overflow="hidden" display="flex" flexDirection="column" flexGrow="1" width="100%" height="100%">
            <Header>
                <>
                    <Search />
                    <Others />
                </>
            </Header>
            {children}
          </Box>
        </Box>
      )
}

export default SecondaryNavigation;

const Projects: React.FC = () => {
    return (
        <Box padding="12px 16px">
            <Text align="left" fontWeight="600" fontSize='xl' marginBottom="24px">Projects</Text>
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

const SettingsMenu: React.FC = () => {
    const links = [{
        name: 'Organisation',
        id: 1,
        link: '/settings/org',
        icon: () => <IoSettingsOutline color={HEADER_ICON_COLOR} size={HEADER_ICON_SIZE} />
    }, {
        name: 'Sprints',
        id: 2,
        link: '/settings/sprints',
        icon: () => <GiSprint color={HEADER_ICON_COLOR} size={HEADER_ICON_SIZE} />
    }, {
        name: 'Work Type',
        id: 3,
        link: '/settings/workType',
        icon: () => <GoWorkflow color={HEADER_ICON_COLOR} size={HEADER_ICON_SIZE} />
    }]

    const [ current, setCurrent ] = useState(0)

    const setActive = (id: number) => {
        setCurrent(id)
    }

    return <Box padding="12px 16px">
        <Text align="left" fontWeight="600" fontSize='xl' marginBottom="12px">Settings</Text>
        <Box height="300px" overflow="scroll">
            {links.map(link => <Item {...link} current={current} key={link.id} setActive={setActive} />)}
        </Box>
    </Box>
}

type ItemProps = {
    setActive: (id: number) => void;
    icon: () => any;
    name: string;
    link: string;
    id: number;
    current: number;
}

const Item: React.FC<ItemProps> = ({
    setActive,
    icon,
    current,
    name,
    link,
    id
}) => {
    const [hover, setHover] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(link)
        setActive(id)
    }

    return <Box onClick={handleClick} cursor="pointer" bgColor={ current === id ? 'rgba(53, 94, 255, .1)' : hover ? 'rgba(51, 51, 51, 0.1)' : ''} display="flex" alignItems="center" gap="12px" padding="8px" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {icon()}
            {name}
        </Box>
    
}