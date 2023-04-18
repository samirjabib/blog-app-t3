
export default function Article(){
    
    return(
      <div className="flex w-full flex-col space-y-4 py-10">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="group flex flex-col space-y-8 border-b border-gray-300 pb-8 last:border-none"
                  >
                    <div className="flex flex-row w-full items-center space-x-4">
                      <div className="h-10 w-10  bg-gray-400 rounded-full"/>
                        <div>
                          <p className="font-semibold flex ">
                            Samir jabib &#x2022; 04/18/2023
                          </p>
                          <div>Full-Stack-Developer</div>
                        </div>  
                    </div>
                    <div className="grid w-full grid-cols-12 gap-4">
                      <div className="col-span-8">
                        <p className="text-2xl font-bold text-gray-800 decoration-indigo-600 group-hover:underline">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ut cumque velit illo illum maxime.
                        </p>
                        <p className="text-sm text-gray-500 break-words">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque excepturi harum maiores quisquam voluptate
                          vitae beatae necessitatibus temporibus ducimus. Magni
                          rerum, voluptatibus molestias, totam eveniet voluptatum
                          ad neque exercitationem aperiam in impedit vero fuga!
                        </p>
                      </div>
                      <div className="col-span-4 rounded-xl transition duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="h-full w-full rounded-xl bg-gray-300"></div>
                      </div>
                    </div>
                    <div className="flex w-full place-items-center justify-start space-x-4 ">
                      <div>My topics:</div>
                      <div className="flex items-center space-x-2 ">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <div
                            key={index}
                            className="rounded-3xl bg-gray-300 px-4 py-3"
                          >
                            tag {index}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
    )
}