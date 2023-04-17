import { IoMdReorder } from 'react-icons/io'
import { BsBell } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'


export default function Header(){
    return(
        <header className="h-20 flex w-full flex-row items-center justify-around border-b-[1px] border-gray-200 bg-white">
        <div>
          <IoMdReorder className='text-2xl text-gray-600'/>
        </div>
        <h1 className='text-xl font-thin'>Ultimate blog app</h1>
        <div className='flex items-center space-x-4'>
          <div className='cursor-pointer'>
            <BsBell className='text2xl text-gray-600'/>
          </div>
          <div className='cursor-pointer'>
            <div className='h-5 w-5 rounded-full bg-gray-600'/>
          </div>
          <div>
            <button className='flex transition hover:border-gray-900 hover:text-gray-900 items-center space-x-3 rounded border border-gray-200 px-4 py-2'>
              <div>Write</div>
              <FiEdit/>
            </button>
          </div>
        </div>
      </header>
    )
}