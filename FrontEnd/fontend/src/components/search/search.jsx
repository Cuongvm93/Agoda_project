import './search.css'

import { useState } from 'react';
import DateRange from './dateRange';
import { Dropdown } from 'antd';
import Pickrooms from './pickrooms';
import Dropdownbt from './drdownboostrap';
import DropdownItemTagsExample from './drdownboostrap';
export default function Search(){
    const [room,setRoom]=useState(1)
    const [person,setPerson]=useState(2)  
    const [display,setDidplay]=useState("none")
    const handeladdroom=()=>{
      setRoom(room+1)
    }
    const handelminusroom=()=>{
      if (room >1) {
        setRoom(room-1)
      }
    }
    const handelAddperson=()=>{
      setPerson(person+1)
    }
    const handelminuperson=()=>{{
      if (person >1) {
        setPerson(person -1 )
      }
    }}
    const handelpickromm=()=>{
      if (display==="none") {
        setDidplay("block")
      }else{
        setDidplay("none")
      }
    }
    const handelMouseleave=()=>{
      setDidplay("none")
    }
    const handelchange=(current)=>{
      console.log(current);
    }
    return (
      <div className='searchBar-sticky'>
        <div className="search-bar-container">
          <input type="text" placeholder='Search' className='search-Input'/>
           {/* <input type="date" placeholder='Check in' className='search-date'/>
           <input type="date" placeholder='Check out' className='search-date'/>     */}
           <DateRange height={"5.4vh"} handelchange={handelchange}/>
          <div className="search-pickroom" onClick={handelpickromm}>
            <span>{room} {room>1?"rooms":"room"} | {person} persons</span>
          </div>
          <button>Search</button>
        </div>
        <Pickrooms mouseLeave={handelMouseleave} display={display} minusperson={handelminuperson} addperson={handelAddperson} addroom={handeladdroom} minusroom={handelminusroom} room={room} person={person}/>
      </div>
    );
}