import { AppShell, Button, Flex, Group, Image, Menu, Text } from "@mantine/core";

import { Sort } from "iconsax-react";
import Link from "next/link";
import SidebarItem from "../navbar/item";
import routes from "../navbar/routes";
import ToggleTheme from "./components/toggle-theme";

const Header = ({ opened, toggle }: { opened: boolean; toggle: () => void }) => {
  const checkIsVisible = () => {
    return routes.filter((item) => item.isVisible === true);
  };

  const checkIsAccess = () => {
    return checkIsVisible().filter((item) => item.isAccess.includes(true));
  };
  return (
    <AppShell.Header bg="bg.0" pl={10} pt={5}>
      <Group h="100%" justify="space-between" align="center" pr={320} display={{ base: "none", lg: "flex" }}>
        <Flex gap={"lg"} align={"center"}>
          <ToggleTheme />
        </Flex>
      </Group>
      <Group display={{ base: "flex", lg: "none" }} justify="space-between" gap={-15}>
        <Flex align={"center"} gap={10} w={{ base: "100%", xs: "auto" }}>
          <div
            style={{
              borderRadius: "50%",
              padding: 2,
              border: "1px solid #D9D9D9",
            }}
          >
            <Image src={"/image/ai-hub/notification.png"} />
          </div>
          <Text fz={14}>شرکت دمو فنی</Text>
        </Flex>
        <Flex>
          <Link
            href={"/"}
            style={{
              fontWeight: "bolder",
              textDecoration: "none",
              // backgroundColor: "pink",
            }}
          >
            خانه
          </Link>
        </Flex>
        <Menu>
          <Menu.Target>
            <Button
              variant="subtle"
              style={{
                border: "1px solid #D9D9D9",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                padding: 0,
              }}
            >
              {/* <ToggleBurger opened={opened} toggle={toggle}> */}
              <Sort />
              {/* </ToggleBurger> */}
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            {checkIsAccess().map((item, index) => (
              <Menu.Item key={index}>
                <SidebarItem item={item} />
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </Group>
    </AppShell.Header>
  );
};

export default Header;
