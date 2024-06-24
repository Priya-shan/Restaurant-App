import React from 'react'
import Button from './Buttons'
import { Search } from 'lucide-react'
function SearchBar() {
  return (
    <form className='flex gap-4 flex-grow justify-center' >
            
    <div className='flex flex-grow max-w-[600px]'>
        <input type='search' placeholder='Search..' className='px-4 rounded-l-full w-full p-1 border border-gray-400 outline-0 ' />
        <Button variant="dark" size="square"><Search size='16px'/></Button>
    </div>
    
</form>
  )
}

export default SearchBar