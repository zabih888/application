"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import useToggleSidebarItem from "../hooks/useToggleSidebarItem";
import { RouteItem } from "../routes";
import helpers from "@/helpers";
import { Button, Flex } from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";

const SidebarItem: any = ({ item }: { item: RouteItem }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { listOfRoutes, stringOfJoinedRoute } = helpers.getRoutesList(pathname);
  const { path, Icon, nodes, title } = item;

  useToggleSidebarItem({ path, listOfRoutes, setOpen });

  // const getActiveStateForRouteHavingIcon = () => {
  //   if (stringOfJoinedRoute.split("/")[0] === path.split("/")[0] && Icon) {
  //     return true;
  //   }
  //   return false;
  // };
  const getActiveStateForRouteHavingNodeWithoutIcon = () => {
    if (stringOfJoinedRoute.split("/")[1] === path.split("/")[1]) {
      return true;
    }
    return false;
  };

  const getActiveStateForRouteWithoutNodeAndIcon = () => {
    if (stringOfJoinedRoute === path) {
      return true;
    }
    return false;
  };

  const countPath = path?.split("/")?.length;
  const getWidth = () => {
    if (countPath === 3) {
      return "85%";
    }
    if (countPath === 2) {
      return "85%";
    }
    return "95%";
  };

  if (nodes && Icon) {
    return (
      <Flex direction={"column"}>
        <Button
          onClick={() => {
            setOpen(!open);
          }}
          variant="subtle"
          color="bg"
          justify="space-between"
          leftSection={
            <Icon
              // variant={getActiveStateForRouteHavingIcon() ? "Bold" : "Linear"}
              variant={"Linear"}
              size="32"
            />
          }
          rightSection={<ArrowDown2 size="20" />}
        >
          {title}
        </Button>
        {open && nodes?.map((child: any, index: any) => <SidebarItem key={index} item={child} />)}
      </Flex>
    );
  }
  if (!nodes && Icon) {
    return (
      <Button
        my="md"
        onClick={() => router.push(`/${path}`)}
        variant="subtle"
        color="bg"
        justify="space-between"
        leftSection={<Icon variant={"Linear"} size="32" />}
        rightSection={<ArrowDown2 size="20" visibility={"hidden"} />}
      >
        {title}
      </Button>
    );
  }
  if (nodes && !Icon) {
    return (
      <Flex
        style={{
          borderRight: `3px solid ${
            getActiveStateForRouteHavingNodeWithoutIcon() ? "var(--mantine-color-primary-6)" : "var(--mantine-color-primary-2)"
          }`,
        }}
        direction={"column"}
      >
        <Button
          my="md"
          color="primary"
          variant={getActiveStateForRouteHavingNodeWithoutIcon() ? "light" : "subtle"}
          onClick={() => {
            setOpen(!open);
          }}
          w={getWidth()}
          mr="auto"
          justify="space-between"
          rightSection={<ArrowDown2 size="20" />}
        >
          {title}
        </Button>

        {open && nodes?.map((child: any, index: any) => <SidebarItem key={index} item={child} />)}
      </Flex>
    );
  }

  if (countPath === 2) {
    return (
      <Flex
        style={{
          borderRight: `3px solid ${
            getActiveStateForRouteWithoutNodeAndIcon() ? "var(--mantine-color-primary-6)" : "var(--mantine-color-primary-2)"
          }`,
        }}
        direction={"column"}
      >
        <Button
          my="md"
          w={getWidth()}
          mr="auto"
          color="primary"
          justify="space-between"
          variant={getActiveStateForRouteWithoutNodeAndIcon() ? "light" : "subtle"}
          onClick={() => router.push(`/${path}`)}
        >
          {title}
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      style={{
        borderRight: `3px solid ${
          getActiveStateForRouteWithoutNodeAndIcon() ? "var(--mantine-color-primary-6)" : "var(--mantine-color-primary-2)"
        }`,
      }}
      w={getWidth()}
      mr="auto"
      direction={"column"}
    >
      <Button
        mt="xs"
        w="80%"
        mr="auto"
        color="primary"
        justify="space-between"
        variant={getActiveStateForRouteWithoutNodeAndIcon() ? "light" : "subtle"}
        onClick={() => router.push(`/${path}`)}
      >
        {title}
      </Button>
    </Flex>
  );
};

export default SidebarItem;
