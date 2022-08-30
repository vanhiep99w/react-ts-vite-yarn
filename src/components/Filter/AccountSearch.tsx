import { Autocomplete, CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchAccountByName } from "@/redux/accounts";
import { Account } from "@/models";
import { selectAccounts } from "@/redux/filter";
import { useEffect, useState } from "react";
import { TextFieldStyled, autocompleteSx } from "./Filter.style";

const AccountSearch = () => {
  const dispatch = useAppDispatch();
  const [valueInput, setValueInput] = useState<string | null>(null);
  const { accounts, isLoading } = useAppSelector((state) => state.accounts);

  const onChange = (event: unknown, value: string) => {
    setValueInput(value);
  };

  const onSelectedAccount = (event: unknown, selectedAccounts: Account[]) => {
    dispatch(selectAccounts(selectedAccounts));
  };

  const onFirstTimeFocus = () => {
    if (accounts.length <= 0) {
      dispatch(fetchAccountByName(""));
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (valueInput) {
        dispatch(fetchAccountByName(valueInput));
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [valueInput]);

  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={accounts}
      getOptionLabel={(option) => option.name}
      onChange={onSelectedAccount}
      onInputChange={onChange}
      renderInput={(params) => (
        <TextFieldStyled placeholder="Accounts" {...params} />
      )}
      onOpen={onFirstTimeFocus}
      filterSelectedOptions
      loading={isLoading}
      loadingText={<CircularProgress color="inherit" />}
      sx={{ ...autocompleteSx }}
      fullWidth
    />
  );
};

export default AccountSearch;
