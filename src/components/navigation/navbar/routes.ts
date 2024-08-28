import { Chart1, Home, Icon } from "iconsax-react";

export type RouteItem = {
  title: string;
  path: string;
  isVisible: boolean;
  isAccess: boolean[];
  nodes: RouteItemNodes;
  Icon: Icon | undefined;
};

export type RouteItemNodes = undefined | RouteItem[];

const routes: RouteItem[] = [
  {
    title: "home",
    path: "home",
    isVisible: true,
    isAccess: [true],
    nodes: undefined,
    Icon: Home,
  },
  {
    title: "reports",
    path: "reports",
    isVisible: true,
    isAccess: [true],
    Icon: Chart1,
    nodes: [
      {
        title: "one",
        path: "reports/one",
        isVisible: true,
        isAccess: [true],
        Icon: undefined,
        nodes: undefined,
      },
      {
        title: "one",
        path: "reports/two",
        isVisible: true,
        isAccess: [true],
        nodes: undefined,
        Icon: undefined,
      },
    ],
  },
];

export default routes;
