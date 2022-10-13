import {
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Signin from "./pages/Signin/Signin";
import UserDetails from "./pages/UserDetails/UserDetails";
import Users from "./pages/Users/Users";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard/users" element={<Users />} />
      <Route path="/dashboard/users/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
