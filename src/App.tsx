import PipeChart from "@/components/PipeChart/PipeChart";
import { ThemeProvider } from "@/providers";
import { TableOrder } from "@/components";
import { Box, Stack, styled } from "@mui/material";
import { useEffect } from "react";
import { queryAccountsByName } from "@/services/accountsService";

function App() {
  useEffect(() => {
    queryAccountsByName("Bu");
  }, []);
  return (
    <ThemeProvider>
      <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
        <Box flexGrow={1}>
          <PipeChart />
        </Box>
        <Box flexGrow={1}>
          <TableOrder />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
