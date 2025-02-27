import React, { useContext, useEffect, useState } from "react";
import Login from "./component/auth/Login";
import EmployeeD from "./component/dashboard/EmployeeD";
import AdminD from "./component/dashboard/AdminD";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log("Current User:", user); // Logs when user state updates
  }, [user]);
  const authData=useContext(AuthContext);
  console.log(authData)
  const handleLogin = (email, pass) => {
    if (email === "admin@gmail.com" && pass === "123") {
      setUser("admin");
    } else if (email === "employee@gmail.com" && pass === "123") {
      setUser("employee");
    } else {
      alert("Invalid credentials!");
    }
  }
  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" ? <AdminD /> : user === "employee" ? <EmployeeD /> : null}
    </div>
  );
};

export default App;
