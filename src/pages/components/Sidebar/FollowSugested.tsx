
export default function FollowSugested(){
    return(
        <div>
        <h3>People you might be interested</h3>
        <div className="flex flex-col space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex-ow flex items-center space-x-5">
              <div className="h-10 w-10 flex-none rounded-full bg-gray-300" />
              <div>
                <div>John Doe</div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam tempora saepe unde illo alias modi architecto non velit
                  quia.
                </div>
              </div>
              <div>
                <button className="flex items-center space-x-3 rounded border border-gray-400/50 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}