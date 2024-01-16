import type { NextPage } from "next";
import { useState, useCallback } from "react";
import DrwawerMenu from "./drwawer-menu";
import PortalDrawer from "./portal-drawer";

const Handburger: NextPage = () => {
  const [isDrwawerMenuOpen, setDrwawerMenuOpen] = useState(false);

  const openDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(true);
  }, []);

  const closeDrwawerMenu = useCallback(() => {
    setDrwawerMenuOpen(false);
  }, []);

  return (
    <>
      <div
        className="h-[27px] flex flex-col items-center justify-start gap-[5px] cursor-pointer"
        onClick={openDrwawerMenu}
      >
        <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
        <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-1.5" />
        <div className="relative rounded-[378.41px] bg-yellowgreen-200 w-[37px] h-[5px]" />
      </div>
      {isDrwawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeDrwawerMenu}
        >
          <DrwawerMenu onClose={closeDrwawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Handburger;
