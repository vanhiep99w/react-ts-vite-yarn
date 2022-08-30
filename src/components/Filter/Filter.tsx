import { BoxContainer } from "@/components/common";
import { Stack } from "@mui/material";
import React from "react";
import AccountSearch from "./AccountSearch";
import FilterDate from "./FilterDate";
import { filterContainerSx } from "./Filter.style";

const Filter = () => {
  return (
    <BoxContainer sx={{ ...filterContainerSx }}>
      <Stack flexDirection="row">
        <AccountSearch />
        <FilterDate />
      </Stack>
    </BoxContainer>
  );
};

export default Filter;
