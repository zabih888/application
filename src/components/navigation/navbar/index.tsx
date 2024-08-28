import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./item";
import routes from "./routes";
import { AppShell, Flex, ScrollArea } from "@mantine/core";

const Navbar = () => {
  const checkIsVisible = () => {
    return routes.filter((item) => item.isVisible === true);
  };

  const checkIsAccess = () => {
    return checkIsVisible().filter((item) => item.isAccess.includes(true));
  };

  return (
    <AppShell.Navbar bg="bg.0" p="md" mt="-60px" display={{ base: "none", lg: "flex" }}>
      <ScrollArea>
        <Flex direction={"column"}>
          <Link href="/home" style={{ marginBottom: 40 }}>
            <Image src="/image/logo/one.png" width={145} height={80} alt="logo" />
          </Link>
          {checkIsAccess().map((item, index) => (
            <SidebarItem item={item} key={index} />
          ))}
        </Flex>
      </ScrollArea>
    </AppShell.Navbar>
  );
};
export default Navbar;
