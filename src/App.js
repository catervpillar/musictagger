import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainRootLayout from './pages/MainRoot';
import HomePage from './pages/Home';
import Tagger from './pages/Tagger';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'tagger',
        element: <Tagger />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;