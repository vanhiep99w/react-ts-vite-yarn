import { useAppDispatch, useAppSelector } from "@/hooks";
import { CircularProgress, Stack, TablePagination } from "@mui/material";
import { ROW_PER_PAGE_OPTIONS } from "@/constants";
import React, { useEffect } from "react";
import { setPage, setPageSize } from "@/redux/filter";
import { fetchOrdersTable } from "@/redux/orders";

const TableOrderPagination = () => {
  const { page, pageSize, endDate, startDate, selectedAccount } =
    useAppSelector((state) => state.filter);
  const { isLoading } = useAppSelector((state) => state.orders);
  const { orders } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();

  const handleChangePage = (event: unknown, pageNumber: number) => {
    dispatch(setPage(pageNumber));
  };

  const handleChangePageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPageSize(+event.target.value));
    setPage(0);
  };

  useEffect(() => {
    const accountIds = selectedAccount.map((account) => account.id);
    dispatch(
      fetchOrdersTable({
        page,
        pageSize,
        endDate,
        startDate,
        accountIds
      })
    );
  }, [page, pageSize, endDate, startDate, JSON.stringify(selectedAccount)]);

  return (
    <Stack
      flexDirection="row"
      justifyContent={isLoading ? "space-between" : "flex-end"}
      alignItems="center"
    >
      {isLoading && (
        <CircularProgress color="inherit" size={30} sx={{ mt: 1 }} />
      )}
      <TablePagination
        component="div"
        count={orders.totalCount}
        page={page}
        rowsPerPage={pageSize}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangePageSize}
        rowsPerPageOptions={ROW_PER_PAGE_OPTIONS}
      />
    </Stack>
  );
};

export default TableOrderPagination;
