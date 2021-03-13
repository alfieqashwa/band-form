import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Band Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen g-gray-50 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-2 bg-white">
          <div className="w-1/2 max-w-md mx-auto space-y-8">
            <div>
              <img className="w-auto h-12 mx-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                Create your band
            </h2>
              <p className="mt-2 text-sm text-center text-gray-600">
                And
              <a href="#" className="ml-1 font-medium text-indigo-600 hover:text-indigo-500">
                  show the world your creativity
              </a>
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="band" className="sr-only">Band Name</label>
                  <input id="band" name="band" type="text" className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Band Name" />
                </div>
                <div>
                  <label htmlFor="member" className="sr-only">Member</label>
                  <input id="member" name="member" type="number" className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="How many member" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input id="phone" name="phone" type="number" className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone number" />
                </div>
                <div>
                  <label htmlFor="socmed" className="sr-only">Socmed</label>
                  <input id="socmed" name="socmed" type="text" className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Social media" />
                </div>
              </div>

              <div>
                <button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Sign in
              </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 max-w-md mx-auto space-y-8">
            <div>
              <img className="w-auto h-12 mx-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                Create your band
            </h2>
              <p className="mt-2 text-sm text-center text-gray-600">
                And
              <a href="#" className="ml-1 font-medium text-indigo-600 hover:text-indigo-500">
                  show the world your creativity
              </a>
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-1 focus:ring-indigo-500" />
                  <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">
                    Remember me
                </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                </a>
                </div>
              </div>

              <div>
                <button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Sign in
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ >
  )
}
