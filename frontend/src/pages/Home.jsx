const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center pt-24 px-4">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
          Welcome to SecureAuth 
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg">
          This is a full-stack authentication system built with React, Node.js,
          MongoDB, and JWT. It supports secure login, registration, protected
          routes, role-based access, and modern UI with dark mode.
        </p>
      </div>
    </div>
  );
};

export default Home;
