export default function Tags(){
    return(
        <div className="flex place-items-center space-x-4 w-full justify-end ">
            <div>My topics:</div>
            <div className="flex items-center space-x-2 ">
                {Array.from({length:4}).map((_, index) => (
                    <div key={index} className="rounded-3xl w-full py-3 px-2">
                        tag {index}
                    </div>
                ))}
            </div>
        </div>
    )
}