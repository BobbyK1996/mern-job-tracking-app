import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div>
      <h1>DashboardLayout Page</h1>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
