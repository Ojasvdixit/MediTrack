import { FaSearch } from "react-icons/fa";

const Search= ()=>{
  return(
    
    <div className="flex justify-center items-center max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search doctors, services, or health tips..."
          className="w-full px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-500 text-white px-5 py-3 rounded-r-full hover:bg-blue-600">
          <FaSearch />
          </button>
      </div>
  )

};

export default Search;