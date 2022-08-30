import { PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import { Label } from "@/components/common";

type Props = {
  title: string;
} & PropsWithChildren;
const BoxContainerTop = ({ title, children }: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Label title={title} />
      {children}
    </Stack>
  );
};

export default BoxContainerTop;
