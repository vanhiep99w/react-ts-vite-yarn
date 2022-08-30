import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { ERROR_ALERT_DURATION } from "@/constants";
import { useAppSelector } from "@/hooks";

const ErrorAlert = () => {
  const { error: orderError } = useAppSelector((state) => state.orders);
  const { error: accountError } = useAppSelector((state) => state.accounts);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState<boolean>(false);
  const handlerClose = () => {
    setShowError(false);
  };

  useEffect(() => {
    if (accountError) {
      setError(accountError);
      setShowError(true);
    }
  }, [accountError]);

  useEffect(() => {
    if (orderError) {
      setError(orderError);
      setShowError(true);
    }
  }, [orderError]);

  return (
    <Snackbar
      open={showError}
      autoHideDuration={ERROR_ALERT_DURATION}
      onClose={handlerClose}
    >
      <Alert severity="error" sx={{ mt: 1 }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorAlert;
