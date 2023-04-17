import { HiChevronDown } from "react-icons/hi"


export default function ArticlesFilter(){
    return(
        <div className="flex w-full items-center justify-between border-b border-gray-300 pb-10">
              <h3>Articles</h3>
              <div>
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5 font-semibold ">
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="text-xl"/>
                  </div>
                </button>
              </div>
            </div>
    )
}