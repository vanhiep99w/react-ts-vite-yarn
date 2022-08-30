import { Box, Button, Dialog, TextField } from "@mui/material";
import { useFormik } from "formik";
import { BoxContainer } from "@/components/common";
import { sendReport } from "@/services";
import { useAppSelector } from "@/hooks";
import { buildValidationSchema, FORM_FIELDS, initialValues } from "./constants";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MailInformation = ({ open, onClose }: Props) => {
  const { startDate, endDate, selectedAccount } = useAppSelector(
    (state) => state.filter
  );
  const accountIds = selectedAccount.map((account) => account.id);

  const formik = useFormik({
    initialValues,
    validationSchema: buildValidationSchema(),
    onSubmit: (values) => {
      sendReport({ accountIds, endDate, startDate }, { ...values });
      onClose();
    }
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <BoxContainer>
        <BoxContainer.Top title="Mail Information" />
        <form onSubmit={formik.handleSubmit}>
          {FORM_FIELDS.map(({ id, name, label, type }) => {
            return (
              <TextField
                key={id}
                id={id}
                label={label}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 }}
                type={type}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
                {...formik.getFieldProps(name)}
              />
            );
          })}
          <Button variant="outlined" type="submit" sx={{ float: "right" }}>
            Send
          </Button>
        </form>
      </BoxContainer>
    </Dialog>
  );
};

export default MailInformation;
