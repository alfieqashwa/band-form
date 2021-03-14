export default function MemberForm() {
  return (
    <div className="w-1/2 max-w-md mx-auto space-y-8">
      <div>
        <img className="w-auto h-12 mx-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Create member
            </h2>
        <p href="#" className="ml-1 font-medium text-center text-indigo-600 hover:text-indigo-500">
          show the world your skill
              </p>
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" type="text" className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="instrument" className="sr-only">Position</label>
            <input id="position" name="position" type="text" className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Position of the band" />
          </div>
          <div>
            <label htmlFor="member" className="sr-only">Your age</label>
            <input id="age" name="age" type="number" className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your age" />
          </div>
          <div>
            <label htmlFor="band" className="sr-only">Band</label>
            <input id="band" name="band" type="text" className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Select your band" />
          </div>
          <div>
            <label htmlFor="socmed" className="sr-only">Socmed</label>
            <input id="socmed" name="socmed" type="text" className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Personal social media link" />
          </div>
        </div>

        <div>
          <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create
              </button>
        </div>
      </form>
    </div>
  )
}