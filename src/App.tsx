import { ThemeProvider } from "@/providers";
import StoreProvider from "@/providers/StoreProvider";
import OrderStatistics from "@/components/OrderStatistics/OrderStatistics";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <OrderStatistics />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
