import { CiSearch} from "react-icons/ci"


export default function SearchBar(){
    return(
        <label
                htmlFor="search"
                className="relative w-full rounded-lg border border-gray-800"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch/>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="py-1 px-4 pl-7 text-sm outline-none placeholder:text-xs placeholder:text-gray-300 w-full rounded-lg"
                  placeholder="Search"
                />
        </label>
    )
}