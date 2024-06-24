import React from 'react'
import { JsxElement } from 'typescript'
import Button from './Buttons'
import SearchBar from './SearchBar';
import { Search, LogIn } from 'lucide-react';
import logo from '../images/logo.png';

function PageHeader():JSX.Element {
    function samplefunction(){
        console.log("btn clicked");
    }
  return (
    <div className='flex gap-10 justify-between m-3'>
        <div className='w-[180px] h-[40px]'>
        <img src={logo} className='w-[180px] h-[40px]'/>
        </div>

      <SearchBar/>

      <div>
      <Button variant="dark" size="rectangle" className=''>
        <LogIn className='w-4 h-4' />
        <span>Sign In</span>
      </Button>
    </div>
    </div>
  )
}

export default PageHeader