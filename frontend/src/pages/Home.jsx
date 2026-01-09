// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
//       <div className="max-w-4xl mx-auto text-center pt-24 px-4">
//         <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
//           Welcome to SecureAuth 
//         </h2>

//         <p className="text-gray-700 dark:text-gray-300 text-lg">
//           This is a full-stack authentication system built with React, Node.js,
//           MongoDB, and JWT. It supports secure login, registration, protected
//           routes, role-based access, and modern UI with dark mode.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
  className="
    min-h-screen
    bg-gradient-to-r
    from-pink-200 via-pink-300 to-pink-500
    dark:from-pink-500 dark:via-pink-600 dark:to-pink-800
    transition-colors duration-500
  "
>

      <div className="max-w-4xl mx-auto text-center pt-24 px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-pink-100 mb-4">
          Welcome to SecureAuth
        </h2>

        <p className="text-gray-800 dark:text-pink-200 text-lg">
          This is a full-stack authentication system built with React, Node.js,
          MongoDB, and JWT. It supports secure login, registration, protected
          routes, role-based access, and modern UI with dark mode.
        </p>

        {/* CTA Buttons */}
  <div className="mt-8 flex justify-center gap-4">
  {/* Login */}
  <Link
    to="/login"
    className="
      px-6 py-2 rounded-md font-semibold
      bg-pink-600 text-white
      hover:bg-pink-700
      dark:bg-pink-700 dark:hover:bg-pink-800
      transition
    "
  >
    Login
  </Link>

  {/* Register */}
  <Link
    to="/register"
    className="
      px-6 py-2 rounded-md font-semibold
      border-2 border-pink-600 text-pink-600
      hover:bg-pink-600 hover:text-white
      dark:border-pink-400 dark:text-pink-300
      dark:hover:bg-pink-600 dark:hover:text-white
      transition
    "
  >
    Register
  </Link>
</div>

      </div>
    </div>
  );
};

export default Home;


