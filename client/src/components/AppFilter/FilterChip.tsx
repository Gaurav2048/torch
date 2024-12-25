import { useRecoilValue } from "recoil";
import { boardAtom, memberAtom } from "../../AppState/state";
import {
  APPLICABLE_FILTER_TYPE,
  PARAM_TYPE,
} from "../../Constants/FilterData";
import { PRIORITIES } from "../../Constants";
import { useEffect, useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import AppTypography from "../AppTypography/AppTypography";
import { capitalize } from "../../utils/textUtils";
import AppMenu from "../AppMenu";
import { IconAppClose } from "../../Constants/Icons";
import AppInput from "../AppInput";
import AppCheckbox from "../AppCheckbox";

const dataTransform = (
  arr: Array<any>,
  id: string,
  name: string,
  icon: string,
) =>
  arr.map((el) => ({
    icon: el[icon],
    id: el[id],
    name: el[name],
  }));

type OwnProps = APPLICABLE_FILTER_TYPE & {
  params: Array<PARAM_TYPE>; 
  id: string;
  onRemoveFilter: (val: string) => void;
  modifyFilterParams: (id: string, name: string, icon: string, filterId: string) => void
};

const FilterChip: React.FC<OwnProps> = ({
  icon,
  type,
  id: filterId,
  alias,
  params,
  onRemoveFilter,
  modifyFilterParams
}) => {
  const members = useRecoilValue(memberAtom);
  const board = useRecoilValue(boardAtom);
  const [status, setStatus] = useState<{ columnID: string; value: string }[]>(
    [],
  );

  useEffect(() => {
    setStatus(
      board.columnOrder.map((column) => ({
        value: board.columns[column].title,
        columnID: column,
      })),
    );
  }, [board]);

  const dataObject: { [key: string]: Array<any> } = {
    ASSIGNEE: dataTransform(members, "_id", "name", "name"),
    PRIORITY: dataTransform(PRIORITIES, "id", "priority", "icon"),
    STATUS: dataTransform(status, "columnID", "value", "value"),
  };
  return (
    <Box marginRight="8px" alignItems="center" display="flex">
      <Box
        borderRadius="4px 0 0 4px"
        padding="4px 8px"
        alignItems="center"
        display="flex"
        bgColor="primary.100"
      >
        {icon("primary.900")}
        <AppTypography
          ml="2"
          color="primary.900"
          fontWeight="500"
          variant="caption1"
          text={capitalize(type)}
        />
      </Box>
      <AppTypography
        padding="4px 8px"
        bgColor="primary.100"
        variant="caption1"
        text={params.length > 1 ? alias[1] : alias[0]}
        margin="0 2px"
      />
      <SelectionModal type={type} data={dataObject[type]} params={params} filterId={filterId} modifyFilterParams={modifyFilterParams} />
      <Box
        padding="7px 8px"
        bgColor="primary.100"
        borderRadius="0px 4px 4px 0"
        marginLeft="2px"
        cursor="pointer"
        onClick={() => onRemoveFilter(filterId)}
      >
        <IconAppClose />
      </Box>
    </Box>
  );
};

export default FilterChip;

type SelectionModalProps = {
  type: string;
  data: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
  filterId: string;
  params: Array<PARAM_TYPE>; 
  modifyFilterParams: (id: string, name: string, icon: string, filterId: string) => void
};

const SelectionModal: React.FC<SelectionModalProps> = ({ data, modifyFilterParams, type, filterId, params }) => {
  const [query, setQuery] = useState<string>("");
  
  const handleParamsSelect = (id: string, name: string, icon: string) => {
    modifyFilterParams(id, name, icon, filterId)
  }

  return (
    <AppMenu
      defaultOpen
      anchor={() => (
        <Box
          display="flex"
          alignItems="center"
          padding="4px 8px"
          bgColor="primary.100"
        >
          <AvatarGroup size="2xs" marginRight="4px">
            <Avatar name="CO" />
            <Avatar name="SI" />
          </AvatarGroup>
          <AppTypography
            color="primary.900"
            variant="caption1"
            width="fit-content"
            text={params?.length > 1 ? `${params?.length} ${capitalize(type)}` : params?.[0]?.name || '' }
          />
        </Box>
      )}
    >
      {() => (
        <Box>
          <AppInput onChange={(val) => setQuery(val || "")} />
          <Divider mb="1" />
          {data
            .filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
            .map((el) => (
              <FilterSelectMenuItem key={el.id} {...el} selected={!!params.find(param => param.id === el.id)} onSelected={handleParamsSelect} />
            ))}
        </Box>
      )}
    </AppMenu>
  );
};

type FilterOption = {
  id: string;
  name: string;
  icon: any;
  selected: boolean;
  onSelected: (id: string, name: string,icon: string ) => void;
};

const FilterSelectMenuItem: React.FC<FilterOption> = ({
  icon,
  name,
  id,
  onSelected,
  selected,
}) => {
  const { isOpen: hover, onOpen: onEnter, onClose: onExit } = useDisclosure();
  return (
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      margin="0 4px"
      borderRadius="4px"
      bgColor={hover ? "gray.100" : "white"}
      padding="6px 8px"
      onClick={() => onSelected(id, name, icon)}
    >
      <AppCheckbox checked={selected} />
      {typeof icon === "function" ? (
        icon(hover ? "primary.900" : "gray")
      ) : (
        <Avatar size="2xs" src={icon} name={name} />
      )}
      <AppTypography
        ml="2"
        text={capitalize(name)}
        variant="caption1"
        color={hover ? "primary.900" : "inherit"}
      />
    </Box>
  );
};
