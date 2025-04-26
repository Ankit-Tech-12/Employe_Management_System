import React, { useContext, useEffect, useState } from "react";
import Login from "./component/auth/Login";
import EmployeeD from "./component/dashboard/EmployeeD";
import AdminD from "./component/dashboard/AdminD";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData,setLoggedInUserData]=useState(null);
  const authData = useContext(AuthContext);
  useEffect(() => {
    if(authData){
    const loggedInUser=localStorage.getItem("loggedInUser");
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
    }
  }, [authData]);

  if (!authData?.employees || !authData?.admin) return <p>Loading...</p>;

  const handleLogin = (email, pass) => {
    const normalizedEmail = email.toLowerCase().trim();
    const adminUser = authData.admin.find(
      (e) => e.email.toLowerCase() === normalizedEmail && e.password === pass
    );
    const employeeUser = authData.employees.find(
      (e) => e.email.toLowerCase() === normalizedEmail && e.password === pass
    );

    if (adminUser) {
      setUser("admin");
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    } else if (employeeUser) {
      setUser("employee");
      setLoggedInUserData(employeeUser);
      localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employeeUser}))
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminD changeUser={setUser}/>}
      {user === "employee" && <EmployeeD changeUser={setUser} data={loggedInUserData}/>}
    </div>
  );
};

export default App;
