import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50
       flex flex-col items-center justify-center p-6"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Dashboard 
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your tasks, track analytics, and stay organized with our
          powerful dashboard.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center bg-gradient-to-b from-neutral-300 to-neutral-500
           text-white px-8 py-3 rounded-lg font-semibold hover:bg-gradient-to-b hover:from-neutral-300 hover:to-neutral-700 duration-300 delay-100 ease-out 
            transition-colors shadow-lg hover:shadow-xl"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}