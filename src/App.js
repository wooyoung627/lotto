import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Lotto from './pages/Lotto';
import UserProvider from './provider/UserProvider';

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/lotto",
      element: <Lotto/>
    }
  ]);

  return element;
}

function AppWrapper() {
  return (
    <UserProvider>
      <App/>
    </UserProvider>
  );
}

export default AppWrapper;
