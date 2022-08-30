import { useAppSelector } from "@/hooks";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { formatDate } from "@/helpers";
import { Status } from "@/components/common";

const TableOrderBody = () => {
  const { orders } = useAppSelector((state) => state.orders);
  return (
    <TableBody>
      {orders.items.map(
        ({
          id,
          orderDate,
          orderStatusInfo,
          account,
          price,
          createDate,
          modifiedDate
        }) => (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>{formatDate(orderDate)}</TableCell>
            <TableCell>
              <Status status={orderStatusInfo} />
            </TableCell>
            <TableCell>{account.name}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{formatDate(createDate)}</TableCell>
            <TableCell>{formatDate(modifiedDate)}</TableCell>
          </TableRow>
        )
      )}
    </TableBody>
  );
};

export default TableOrderBody;
