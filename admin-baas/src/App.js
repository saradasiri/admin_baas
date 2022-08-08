import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SideBar from "./components/sideBar";
import Dashboard from "./Views/dashboard";
import ShowUsers from "./Views/Users/showUsers";

const App = () => {
  return (
    <>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/console">
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<ShowUsers />} />

            </Route>
          </Routes>
        </SideBar>
      </Router>
    </>
  );
};

export default App;
