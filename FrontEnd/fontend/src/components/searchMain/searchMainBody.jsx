import { Input } from 'antd';
import { useState } from 'react';
import DateRange from '../search/dateRange'
import Pickrooms from '../search/pickrooms';
export default function SearchMainBody(params) {
    const [room,setRoom]=useState(1)
    const [person,setPerson]=useState(2)
    const [display,setDisplay]=useState("none")
    const [border,setBorder]=useState("none")
    const handelClick=()=>{
        setBorder("1px solid rgb(0, 166, 255)")
        if (display=="none") {
            setDisplay("block") 
        }else{
            setDisplay("none")
        }
    }
    const handelmouseleave=()=>{
        setDisplay("none")
    }
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
      const handelChange=(current)=>{
        let [checkinDay,checkOutday]=current
        console.log(checkinDay.$D,checkinDay.$M,checkinDay.$y);
        // console.log(pickDate.getMonth());
        // let pickMonth= Number(pickDate.getMonth())+1
       let pickDate=checkinDay.$D+ "-" + (checkinDay.$M+1).toString() + "-"+checkinDay.$y
        // + "/" + pickDate.getFullYear()
        // // pickDate=pickDate.getUTCDate()
        console.log(pickDate);
        pickDate=new Date('24-02-2023')
        console.log(pickDate.getdate());
        // console.log(checkinDay.$d = checkOutday.$d);
      }
      
    return(
        <div className="search-main-body">
        <Input placeholder='search' style={{width:"80%",height:"20%",fontSize:"21px"}} defaultValue={"Da Nang"}/>
        <div className='search-main-pick'>
        <DateRange height={"225%"} width={"150%"} size="21px" weight={500} handelchange={handelChange}/>
        <div className="search-main-pickroom" onClick={handelClick} style={{border:border}}>
            <span>{room} {room>1?"rooms":"room"} | {person} persons</span>
        </div>
        </div>
        <button>Search</button> 
        <Pickrooms
        minusroom={handelminusroom}
        addroom={handeladdroom}
        addperson={handelAddperson}
        minusperson={handelminuperson} 
        room={room}
        person={person}
        width={"300px"}
        top=" 280px"
        left={"600px"}
        display={display}
        mouseLeave={handelmouseleave}
        />
        </div>
    )
}