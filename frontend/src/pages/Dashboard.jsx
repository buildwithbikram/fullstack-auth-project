import { useEffect, useState } from "react";
import { getMe } from "../services/authService";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getMe().then(setUser);
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white p-8 rounded-xl shadow w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>

        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Role:</b> {user.role}</p>

        <button
          onClick={logout}
          className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;



