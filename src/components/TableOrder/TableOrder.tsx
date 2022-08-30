import { useState } from "react";
import { BoxContainer } from "@/components/common";
import {
  Button,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { TABLE_TITLES } from "@/constants";
import { v4 } from "uuid";
import TableOrderPagination from "./TableOrderPagination";
import TableOrderBody from "./TableOrderBody";
import MailInformation from "./MailInformation";

const TableOrder = () => {
  const [showPopup, setShowPopup] = useState(false);
  const renderedCell = TABLE_TITLES.map((title) => (
    <TableCell key={v4()}>{title}</TableCell>
  ));

  return (
    <BoxContainer>
      <BoxContainer.Top title="Order">
        <Button variant="outlined" onClick={() => setShowPopup(true)}>
          Send Data
        </Button>
      </BoxContainer.Top>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>{renderedCell}</TableRow>
          </TableHead>
          <TableOrderBody />
        </Table>
      </TableContainer>
      <TableOrderPagination />
      <MailInformation open={showPopup} onClose={() => setShowPopup(false)} />
    </BoxContainer>
  );
};

export default TableOrder;
