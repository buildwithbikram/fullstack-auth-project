import { useEffect, useState } from "react";
import { getMe } from "../services/authService";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getMe();
      setUser(data);
    };
    fetchUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (!user) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Role:</b> {user.role}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;

