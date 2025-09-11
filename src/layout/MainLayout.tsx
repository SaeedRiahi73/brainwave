import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <main className="bg-cyan-700">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
