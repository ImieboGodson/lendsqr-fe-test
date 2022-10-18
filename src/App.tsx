import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './App.scss';
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/Signin/Signin";
import WorkInprogress from "./routes/Work-in-progres/Work-in-progress";
import User from "./routes/User/User";
import Users from "./routes/Users/Users";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter( 
  createRoutesFromElements(
    <>
      <Route path='/signin' element={<Signin />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Dashboard />}>
          <Route path='dashboard' element={<WorkInprogress />} />
          <Route path='users' element={<Users />} />
          <Route path='*' element={<WorkInprogress />} />
          <Route path='users/:id' element={<User />}>
            <Route path='users/:id/' element={<WorkInprogress />} />
            <Route path='documents' element={<WorkInprogress />} />
            <Route path='bank_details' element={<WorkInprogress />} />
            <Route path='loans' element={<WorkInprogress />} />
            <Route path='savings' element={<WorkInprogress />} />
            <Route path='app_and_system' element={<WorkInprogress />} />
          </Route>
        </Route>
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
