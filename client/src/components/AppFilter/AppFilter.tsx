import { Box, Divider, Flex, useDisclosure } from "@chakra-ui/react";
import { MdFilterList } from "react-icons/md";
import AppButton from "../AppButton";
import AppMenu from "../AppMenu";
import {
  APPLICABLE_FILTER_TYPE,
  APPLICABLE_FILTERS,
  APPLIED_FILER,
} from "../../Constants/FilterData";
import { capitalize } from "../../utils/textUtils";
import AppTypography from "../AppTypography/AppTypography";
import { colorSchema } from "../../Constants";
import AppInput from "../AppInput";
import { useState } from "react";
import FilterChip from "./FilterChip";
import { v4 as uuidV4 } from "uuid";
import { produce } from "immer";
import { NOSCROLL_BAR_PROPERTIES } from "../Funnel/Funnel";
import { IconAppAdjustment } from "../../Constants/Icons";

type OwnProps = {
  appliedFilters: Array<APPLIED_FILER>;
  setAppliedFilters: React.Dispatch<React.SetStateAction<Array<APPLIED_FILER>>>;
};

const AppFilter: React.FC<OwnProps> = ({
  appliedFilters,
  setAppliedFilters,
}) => {
  const onFilterSelected = (filter: APPLICABLE_FILTER_TYPE) => {
    setAppliedFilters([
      ...appliedFilters,
      {
        ...filter,
        params: [],
        id: uuidV4(),
      },
    ]);
  };

  const modifyFilterParams = (
    id: string,
    name: string,
    icon: string,
    filterId: string,
  ) => {
    setAppliedFilters(
      produce(appliedFilters, (draft) => {
        const param = { id, name, icon };
        for (const el of draft) {
          if (el.id === filterId) {
            if (!el.params.find((el) => el.id === id)) {
              el.params.push(param);
            } else {
              el.params = el.params.filter((param) => param.id !== id);
            }
          }
        }
        return draft;
      }),
    );
  };

  const handleRemoveFilter = (id: string) => {
    setAppliedFilters(appliedFilters.filter((filter) => filter.id !== id));
  };

  return (
    <Flex
      width="100%"
      padding="8px 0"
      margin="0 32px"
      overflow="scroll"
      justifyContent="space-between"
      alignItems="center"
      sx={NOSCROLL_BAR_PROPERTIES}
    >
      <Flex justifyContent="start" alignItems="start">
        {appliedFilters.map((filter) => (
          <FilterChip
            key={filter.id}
            {...filter}
            onRemoveFilter={handleRemoveFilter}
            modifyFilterParams={modifyFilterParams}
          />
        ))}
        <FilterMenu onFilterSelected={onFilterSelected} />
      </Flex>
      <AppButton mr="64px" size="sm" leftIcon={<IconAppAdjustment />}>Display</AppButton>
    </Flex>
  );
};

export default AppFilter;

type FilterMenuProps = {
  onFilterSelected: (filter: APPLICABLE_FILTER_TYPE) => void;
};

const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterSelected }) => {
  const [query, setQuery] = useState<string>("");

  return (
    <AppMenu
      anchor={() => (
        <AppButton size="sm" leftIcon={<MdFilterList />}>
          Filter
        </AppButton>
      )}
    >
      {(onClose) => (
        <Box>
          <AppInput onChange={(val) => setQuery(val || "")} />
          <AppTypography
            variant="caption2"
            position="absolute"
            width="20px"
            height="20px"
            right="0"
            top="0"
            marginRight="12px"
            marginTop="10px"
            borderRadius="4px"
            text="F"
            border="1px solid lightgray"
            color="primary.900"
          />
          <Divider mb="1" />
          {APPLICABLE_FILTERS.filter((el) =>
            el.type.includes(query.toUpperCase()),
          ).map((filter) => (
            <FilterMenuItem
              {...filter}
              onSelected={onFilterSelected}
              onCloseModal={onClose}
            />
          ))}
        </Box>
      )}
    </AppMenu>
  );
};

type selectionType = {
  onSelected: (type: APPLICABLE_FILTER_TYPE) => void;
  onCloseModal?: () => void;
};

const FilterMenuItem: React.FC<APPLICABLE_FILTER_TYPE & selectionType> = ({
  icon,
  type,
  filterMethod,
  alias,
  onSelected,
  onCloseModal,
}) => {
  const { isOpen: hover, onOpen: onEnter, onClose: onExit } = useDisclosure();
  const onItemSelected = () => {
    onSelected({ icon, type, filterMethod, alias });
    onCloseModal?.();
  };
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
      onClick={onItemSelected}
    >
      {icon(hover ? colorSchema.PRIMARY : "gray")}
      <AppTypography
        ml="2"
        text={capitalize(type)}
        variant="caption1"
        color={hover ? "primary.900" : "inherit"}
      />
    </Box>
  );
};
