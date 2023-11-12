import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import cursor from "../../imgs/cursor.png";

const AuthPage = () => {
  return (
    <div className={` text-white bg-black py-[20px] px-[50px]`}>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthPage;