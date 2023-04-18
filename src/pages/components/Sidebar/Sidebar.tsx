import FollowSugested from "./FollowSugested";

export default function Sidebar() {
  return (
    <aside className="col-span-4 flex h-full w-full flex-col space-y-4 p-6 sticky top-36">
        <FollowSugested/>
        <div>
            <h3 className="my-6 text-lg font-semibold">Your reading list</h3>
            {
                Array.from({length:4}).map( (__, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <div className="h-full w-2/5 aspect-square bg-gray-300"></div>
                        <div className="w-3/5 flex-col space-y-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laboriosam autem excepturi id 
                                dignissimos quo animi nam, et laudantium doloremque.
                            </p>
                            <div>
                                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                                <div>Samir Jabib &#x2022;</div>
                                <div>Abril 18, 2023</div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    </aside>
  );
}

