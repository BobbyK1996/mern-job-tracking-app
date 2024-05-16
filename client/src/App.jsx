import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { StyleSheetManager } from 'styled-components';

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

const shouldForwardProp = (prop) => !['variation'].includes(prop);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    errorElement: <Error />,
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
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <RouterProvider router={router} />
    </StyleSheetManager>
  );
}

export default App;
