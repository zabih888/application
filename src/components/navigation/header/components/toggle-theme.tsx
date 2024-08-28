import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { Moon, Sun1 } from "iconsax-react";

const ToggleTheme = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
        variant="subtle"
        size="lg"
        aria-label="Toggle color scheme"
      >
        {computedColorScheme === "light" ? <Moon color="gray" /> : <Sun1 color="gray" />}
      </ActionIcon>
    </Group>
  );
};

export default ToggleTheme;
