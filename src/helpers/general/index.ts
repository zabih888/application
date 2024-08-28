export const getRoutesList = (pathname: string) => {
  let listOfRoutes = [];
  if (pathname?.includes("?")) {
    let temp = pathname?.split("?")[0];
    listOfRoutes = temp?.split("/")?.slice(1);
  } else {
    listOfRoutes = pathname?.split("/")?.slice(1);
  }
  const stringOfJoinedRoute = listOfRoutes?.join("/");
  return {
    stringOfJoinedRoute,
    listOfRoutes,
  };
};
