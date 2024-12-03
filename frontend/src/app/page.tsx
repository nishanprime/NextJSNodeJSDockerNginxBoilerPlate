import Link from "next/link";
import { Database, Home, ChevronRight } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-100 mb-12 text-center animate-fade-in">
        Welcome 👋
      </h1>

      <div className="space-y-6 w-full max-w-md">
        <Link
          href="/schema"
          className="block hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg animate-slide-up">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Database className="h-6 w-6 text-blue-400 mr-3 animate-pop-in" />
                <h2 className="text-xl font-semibold text-gray-100">
                  Database Diagram Tool
                </h2>
              </div>
              <ChevronRight className="h-5 w-5 text-blue-400 transition-transform duration-300" />
            </div>
            <p className="mt-2 text-gray-400">Explore diagram builder tool</p>
          </div>
        </Link>

        <Link
          href="/landing"
          className="block hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg animate-slide-up">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Home className="h-6 w-6 text-blue-400 mr-3 animate-pop-in" />
                <h2 className="text-xl font-semibold text-gray-100">
                  Landing Page
                </h2>
              </div>
              <ChevronRight className="h-5 w-5 text-blue-400 transition-transform duration-300" />
            </div>
            <p className="mt-2 text-gray-400">Landing page design.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
