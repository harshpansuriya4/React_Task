import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

export default function Dashboard() {

  const { getUser } = useAuth();
  const user = getUser();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-16" >
        <div className="flex justify-center" >
          <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2"> Welcome {user?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">This is your dashboard.</p>
            <p></p>
          </div>
        </div>
      </div>

    </div>
  );
}