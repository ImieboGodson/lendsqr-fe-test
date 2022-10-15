import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './App.scss';
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/Signin/Signin";
import User from "./routes/User/User";
import Users from "./routes/Users/Users";


const router = createBrowserRouter( 
  createRoutesFromElements(
    <>
      <Route path='/' element={<Signin />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='users' element={<Users />} />
        <Route path='users/:id' element={<User />} />
      </Route>
    </>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
