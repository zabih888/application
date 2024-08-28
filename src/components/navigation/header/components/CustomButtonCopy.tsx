import { Button, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { DocumentCopy } from "iconsax-react";

const CustomButtonCopy = ({ value, title }: { value: string; title: string }) => {
  const clipboard = useClipboard();
  return (
    <Tooltip
      label="کپی شد"
      offset={5}
      position="bottom"
      radius="md"
      transitionProps={{ duration: 100, transition: "slide-down" }}
      opened={clipboard.copied}
    >
      <Button
        fw={"lighter"}
        variant="default"
        rightSection={<DocumentCopy variant={clipboard.copied ? "Bold" : "Linear"} />}
        radius="md"
        size="sm"
        h={50}
        onClick={() => clipboard.copy(value)}
        style={{ color: "gray" }}
      >
        {title}
      </Button>
    </Tooltip>
  );
};
export default CustomButtonCopy;
