import React from 'react'
import Hamburger from '../hamburger/Hamburger'
import Sidebar from '../sideBar/Sidebar';
import './admin.css';

function Admin() {
  return (
    <div>
    <header>
        <div className='topBar'>
          <Hamburger title={'HR Administration System'}/>
        </div>
    </header>
    <Sidebar />
    </div>
  )
}

export default Admin