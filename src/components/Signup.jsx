import { swanai, google, github } from "./Image.js";

const RegistartionForm = () => {
  return (
    <div className="h-[100vh] bg-no-repeat bg-cover bg-center bg-home-img items-center  flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-lg w-1/2 ml-64 mb-24 bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 text-center hidden md:flex">
          <img src={swanai} alt="" />
        </div>
        <div className="lg:w-1/2 w-full p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Sign up
              </h1>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex items-center flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                />

                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-red-300 text-gray-100 w-full py-4 rounded-lg  transition-all  duration-300 ease-in-out flex items-center hover:bg-red-500 justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p>Or</p>
                <div className="flex gap-5">
                  <img src={google} alt="google" />
                  <img src={github} alt="github" />
                </div>
                <p className="mt-6 text-lg text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href="">
                    <span className="text-orange-300 font-semibold">LogIn</span>
                  </a>
                </p>
                <p className="text-center">
                  By signing in, You agree to our{" "}
                  <span className="font-bold">
                    Terms, conditions, Privacy &policy.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistartionForm;
