 

import Link from "next/link";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 p-4 sm:p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">Settings</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl">
          Customize your account settings, profile, and notifications here.
          Choose an option from the sidebar to begin.
        </p>

        <div className="flex flex-col sm:space-x-12 sm:flex-row">
          {/* Sidebar - becomes horizontal menu on mobile */}
          <div className="w-full sm:w-1/4 bg-white rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-6 mb-6 sm:mb-0">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Quick Links
            </h2>
            <ul className="flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-4 overflow-x-auto pb-2 sm:pb-0">
              <li className="flex-shrink-0">
                <Link
                  className="flex items-center text-base sm:text-lg text-gray-800 hover:text-indigo-600 transition-colors py-2 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-indigo-50 whitespace-nowrap"
                  href="/dashboard/settings/account"
                >
                  <span className="text-indigo-600">Account</span>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  className="flex items-center text-base sm:text-lg text-gray-800 hover:text-yellow-600 transition-colors py-2 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-yellow-50 whitespace-nowrap"
                  href="/dashboard/settings/notifications"
                >
                  <span className="text-yellow-600">Notifications</span>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  className="flex items-center text-base sm:text-lg text-gray-800 hover:text-green-600 transition-colors py-2 px-3 sm:py-2 sm:px-4 rounded-md hover:bg-green-50 whitespace-nowrap"
                  href="/dashboard/settings/profile"
                >
                  <span className="text-green-600">Profile</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Main content area */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-4 sm:p-8">
            <h2 className="text-xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Select a Setting
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
              Choose an option from the sidebar to manage your account,
              notifications, or profile settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;