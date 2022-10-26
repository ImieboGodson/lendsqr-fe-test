import {  Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import './App.scss';
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/Signin/Signin";
import WorkInprogress from "./routes/Work-in-progres/Work-in-progress";
import User from "./routes/User/User";
import Users from "./routes/Users/Users";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import { useAppSelector } from "./utils/hooks";
import GeneralDetails from "./routes/GeneralDetails/GeneralDetails";

const App = () => {

  const { isAuth, isSession} = useAppSelector(state => state.auth);

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Dashboard />}>
              <Route path='' element={<WorkInprogress />} />
              <Route path='users' element={<Users />} />
              <Route path='*' element={<WorkInprogress />} />
              <Route path='users/:id' element={<User />}>
                <Route path='' element={<GeneralDetails /> } />
                <Route path='documents' element={<WorkInprogress />} />
                <Route path='bank_details' element={<WorkInprogress />} />
                <Route path='loans' element={<WorkInprogress />} />
                <Route path='savings' element={<WorkInprogress />} />
                <Route path='app_and_system' element={<WorkInprogress />} />
              </Route>
          </Route>
        </Route>
        <Route path='/signin' element={(isSession || isAuth) ? <Navigate to='/users'/> : <Signin />} />
    </Routes>
    </Router>
  );
}

export default App;
