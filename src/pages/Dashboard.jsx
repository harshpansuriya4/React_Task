import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

export default function Dashboard() {

  const { getUser } = useAuth();

  const user = getUser();

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

      <Navbar />

      <div className="flex justify-center items-center mt-16">

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-96 text-center">

          <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
            Welcome {user?.name}
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            This is your dashboard.
          </p>

        </div>

      </div>

    </div>
  );
}