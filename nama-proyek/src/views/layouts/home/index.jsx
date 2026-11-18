import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LoadingScreen from "../../pages/shared/Loader/loading";

function HomeLayout() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isFadingOut, setIsFadingOut] = useState(false);
  // const { pathname } = useLocation(); 
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  // useEffect(() => {
  //   const fadeTimer = setTimeout(() => {
  //     setIsFadingOut(true);
  //   }, 3000);

  //   const removeTimer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3500);

  //   return () => {
  //     clearTimeout(fadeTimer);
  //     clearTimeout(removeTimer);
  //   };
  // }, []);

  return (
    <>
      {/* {isLoading && <LoadingScreen isFadingOut={isFadingOut} />} */}

      {/* {!isLoading && ( */}
        <div className="relative h-auto overflow-x-hidden z-10">
          <Outlet />
        </div>
      {/* )} */}
    </>
  );
}

export default HomeLayout;
