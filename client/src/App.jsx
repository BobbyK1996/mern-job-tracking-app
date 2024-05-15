import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Admin,
  Stats,
  Profile,
  AllJobs,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <AddJob /> },
      { path: 'admin', element: <Admin /> },
      { path: 'stats', element: <Stats /> },
      { path: 'profile', element: <Profile /> },
      { path: 'all-jobs', element: <AllJobs /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
