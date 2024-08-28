import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

const useToggleSidebarItem = ({ path, listOfRoutes, setOpen }: { path: string; listOfRoutes: any; setOpen: Dispatch<SetStateAction<boolean>> }) => {
  const toggleSidebarItem = useCallback(() => {
    if (path && path?.split("/").length <= listOfRoutes?.length) {
      let cloneListOfRoutes = [...listOfRoutes];
      listOfRoutes.forEach(() => {
        if (cloneListOfRoutes.join("/") === path) {
          setOpen(true);
        }
        cloneListOfRoutes.pop();
      });
    }
  }, [path, listOfRoutes]);

  useEffect(() => {
    toggleSidebarItem();
  }, []);
};

export default useToggleSidebarItem;
