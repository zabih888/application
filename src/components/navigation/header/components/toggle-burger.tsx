import { Burger } from "@mantine/core";

const ToggleBurger = ({ opened, toggle }: { opened: boolean; toggle: () => void }) => {
  return <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"></Burger>;
};

export default ToggleBurger;
