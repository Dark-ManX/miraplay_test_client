import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className={` text-white py-[20px] px-[50px] bg-inherit`}>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthPage;
