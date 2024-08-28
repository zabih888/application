import { ArrowDown2, Icon } from "iconsax-react";
import { RouteItemNodes } from "../routes";
import { Flex, Text } from "@mantine/core";

const SidebarParentNode = ({
  nodes,
  Icon,
  title,
  activeIcon,
}: {
  nodes: RouteItemNodes;
  Icon: Icon | undefined;
  title: string;
  activeIcon?: boolean;
}) => {
  return (
    <Flex>
      {Icon && <Icon variant={activeIcon ? "Bold" : "Linear"} size="32" />}
      <Text>{title}</Text>
      {nodes ? (
        <ArrowDown2 />
      ) : (
        <ArrowDown2
          style={{
            visibility: "hidden",
          }}
        />
      )}
    </Flex>
  );
};

export default SidebarParentNode;
