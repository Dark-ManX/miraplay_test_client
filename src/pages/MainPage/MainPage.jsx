import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import cursor from "../../imgs/cursor.png";

const AuthPage = () => {
  return (
    <div className={` text-white py-[20px] px-[50px] bg-black`}>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthPage;
