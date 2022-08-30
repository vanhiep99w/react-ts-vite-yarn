import {
  autocompleteClasses,
  styled,
  SxProps,
  TextField,
  textFieldClasses
} from "@mui/material";

export const autocompleteSx: SxProps = {
  mr: 2,
  [`& .${autocompleteClasses.tag}`]: {
    fontSize: 14,
    fontWeight: "bold"
  }
};

export const TextFieldStyled = styled(TextField)({
  [`&.${textFieldClasses.root}`]: {
    padding: 0
  },
  "& .MuiInputBase-input": {
    fontSize: 14,
    fontWeight: "bold"
  }
});

export const filterContainerSx: SxProps = {
  p: 1,
  mb: 2
};
