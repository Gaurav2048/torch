import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import Icon from "../Icon";
import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "../Header";
import Search from "../Search";
import Others, { HEADER_ICON_COLOR, HEADER_ICON_SIZE } from "../Header/Others";
import { useLocation, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { GiSprint } from "react-icons/gi";
import { GoWorkflow } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { useRecoilValue } from "recoil";
import { memberAtom, orgAtom } from "../../AppState/state";
import AppMenu from "../AppMenu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { colorSchema } from "../../Constants";
import { BoardType } from "../..";

type OwnProps = {
  children: React.ReactElement | React.ReactElement[];
};

const SecondaryNavigation: React.FC<OwnProps> = ({ children }) => {
  const location = useLocation();

  const isProject = useMemo<boolean>(() => {
    return location.pathname.includes("dashboard");
  }, []);

  return (
    <Box display="flex" width="100%" height="100%" overflow="hidden">
      <Box
        width="300px"
        height="100%"
        borderRight="1px solid rgba(235, 235, 235, 1)"
      >
        {isProject ? <Projects /> : <SettingsMenu />}
      </Box>
      <Box
        overflow="hidden"
        display="flex"
        flexDirection="column"
        width="100%"
        height="100%"
      >
        <Header>
          <>
            <Search />
            <Others />
          </>
        </Header>
        {children}
      </Box>
    </Box>
  );
};

export default SecondaryNavigation;

const Projects: React.FC = () => {
  const org = useRecoilValue(orgAtom);
  const navigate = useNavigate();
  const location = useLocation();

  const [activeBoard, setActiveBoard] = useState("");

  useEffect(() => {
    if (!activeBoard) {
      handleActive(org?.boards?.[1]?._id);
    }
  }, [org]);

  const openBoardDrawer = () => {
    navigate(`${location.pathname}/createboard`);
  };

  const handleActive = (id?: string) => {
    if (!id) return;
    setActiveBoard(id);
  };

  useEffect(() => {
    if (!activeBoard) return;
    navigate(`/dashboard/${activeBoard}/funnel`);
  }, [activeBoard]);

  return (
    <Box padding="12px 16px">
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <Text align="left" fontWeight="600" fontSize="xl">
            Projects
          </Text>
          <GoPlus size="24px" onClick={openBoardDrawer} cursor="pointer" />
        </Flex>
        <AppMenu
          anchor={() => (
            <Flex gap="4px" marginBottom="24px">
              <IoIosInformationCircleOutline color="light" size="16px" />
              <Text fontSize="2xs">1 board left</Text>
            </Flex>
          )}
        >
          {() => (
            <Box fontSize="small" textAlign="start" paddingLeft="8px">
              This is the maximum boards you can create. For further query
              <a href="mailto:gunjankalita836@gmail.com">Write To Us</a>
            </Box>
          )}
        </AppMenu>
      </Box>
      <Box height="300px" overflow="scroll">
        {org?.boards?.map((board) => (
          <Project
            key={board._id}
            isActive={activeBoard === board._id}
            board={board}
            setActive={handleActive}
          />
        ))}
      </Box>
      <TeamMembers />
    </Box>
  );
};

type ProjectProps = {
  isActive: boolean;
  board: Partial<BoardType>;
  setActive: (id?: string) => void;
};

const Project: React.FC<ProjectProps> = ({ isActive, board, setActive }) => {
  return (
    <Box
      onClick={() => setActive(board?._id)}
      borderRadius="8px"
      cursor="pointer"
      marginBottom="12px"
      display="flex"
      padding="10px 16px 10px 10px"
      border={!isActive ? "1px solid rgba(235, 235, 235, 1)" : "none"}
      bgColor={isActive ? colorSchema.PRIMARY : "white"}
      alignItems="center"
      color={isActive ? "white" : "#333333"}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <Icon shape="square" size="small" text="Test Project" border="2" />
        <Text fontSize="xs">{board.name}</Text>
      </Box>
      <BsThreeDotsVertical color={isActive ? "white" : "#333333"} />
    </Box>
  );
};

const SettingsMenu: React.FC = () => {
  const links = [
    {
      name: "Organisation",
      id: 1,
      link: "/settings/org",
      icon: () => (
        <IoSettingsOutline color={HEADER_ICON_COLOR} size={HEADER_ICON_SIZE} />
      ),
    },
    {
      name: "Sprints",
      id: 2,
      link: "/settings/sprints",
      icon: () => (
        <GiSprint color={HEADER_ICON_COLOR} size={HEADER_ICON_SIZE} />
      ),
    },
    {
      name: "Work Type",
      id: 3,
      link: "/settings/workType",
      icon: () => (
        <GoWorkflow color={HEADER_ICON_COLOR} size={HEADER_ICON_SIZE} />
      ),
    },
  ];

  const [current, setCurrent] = useState(0);

  const setActive = (id: number) => {
    setCurrent(id);
  };

  return (
    <Box padding="12px 16px">
      <Text align="left" fontWeight="600" fontSize="xl" marginBottom="12px">
        Settings
      </Text>
      <Box height="300px" overflow="scroll">
        {links.map((link) => (
          <Item
            {...link}
            current={current}
            key={link.id}
            setActive={setActive}
          />
        ))}
      </Box>
    </Box>
  );
};

type ItemProps = {
  setActive: (id: number) => void;
  icon: () => any;
  name: string;
  link: string;
  id: number;
  current: number;
};

const Item: React.FC<ItemProps> = ({
  setActive,
  icon,
  current,
  name,
  link,
  id,
}) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
    setActive(id);
  };

  return (
    <Box
      onClick={handleClick}
      cursor="pointer"
      bgColor={
        current === id
          ? "rgba(53, 94, 255, .1)"
          : hover
            ? "rgba(51, 51, 51, 0.1)"
            : ""
      }
      display="flex"
      alignItems="center"
      gap="12px"
      padding="8px"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon()}
      {name}
    </Box>
  );
};

const TeamMembers: React.FC = () => {
  const members = useRecoilValue(memberAtom);
  return (
    <>
      <Text marginBottom="16px" fontWeight={500} fontSize="md" textAlign="left">
        Team Members
      </Text>
      <Box overflow="scroll" height="300px">
        {members.map((member) => (
          <Flex
            marginBottom="8px"
            padding="4px 8px"
            borderRadius="4px"
            border="1px solid rgb(235, 235, 235)"
            key={member._id}
            gap="8px"
            alignItems="center"
          >
            <Avatar size="xs" name={member.name} />
            <Box>
              <Text fontSize="xs" fontWeight={500}>
                {member.name}
              </Text>
              <Flex gap="4px" alignItems="center">
                <Box
                  width="8px"
                  height="8px"
                  borderRadius="50%"
                  bgColor={member.online ? "green" : "white"}
                  border={`1px solid ${member.online ? "none" : "gray"}`}
                />
                <Text fontSize="2xs" color="gray">
                  {member.online ? "Online" : "Ofline"}
                </Text>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Box>
    </>
  );
};
