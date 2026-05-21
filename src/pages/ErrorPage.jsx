import React from 'react';

const ErrorPage = () => {

  return (
    <div className="min-h-screen bg-[#F5F7F6] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Top Section */}
        <div className="bg-[#1F5C4D] px-8 py-10 text-center relative">
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-2xl"></div>

          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-5xl">😵</span>
          </div>

          <h1 className="text-5xl font-extrabold text-white mt-6 tracking-wide">
            404
          </h1>

          <p className="text-[#D8E7E2] mt-3 text-sm">
            Oops! The page you are looking for doesn’t exist.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="px-8 py-8 text-center">
          <h2 className="text-2xl font-bold text-[#1F5C4D]">
            Lost in KinKeeper?
          </h2>

          <p className="text-gray-500 mt-3 text-sm leading-6">
            The page may have been moved, deleted, or never existed in the
            first place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => window.history.back()}
              className="flex-1 py-3 rounded-xl border border-[#1F5C4D] text-[#1F5C4D] font-semibold hover:bg-[#EEF6F3] transition-all duration-300"
            >
              Go Back
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              className="flex-1 py-3 rounded-xl bg-[#1F5C4D] text-white font-semibold hover:bg-[#17493D] transition-all duration-300 shadow-md"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );


};

export default ErrorPage;