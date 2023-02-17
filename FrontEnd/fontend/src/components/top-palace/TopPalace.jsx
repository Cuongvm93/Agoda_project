import React from "react";
import { useState } from "react";
import "./topPalace.css"

function City({src,city}) {
    return (
        <>
            <div className="sun-slide dau">
                <img
                    src={src}
                    alt={city}
                />
                <span>{city}</span>
            </div>
        </>)    
}
function SlideTopPalace() {
    const [runslide, setRunslide] = useState(0);
    let arr = [{
        id: 1,
        city: "Hồ Chí Minh",
    }, {
        id: 2,
        city: "Vũng Tàu",
    }, {
        id: 3,
        city: "Đà Lạt",
    }, {
        id: 4,
        city: "Hà Nội",
    }, {
        id: 5,
        city: "Đà Nẵng",
    }, {
        id: 6,
        city: "Nha Trang",
    }, {
        id: 7,
        city: "Phan Thiết",
    }, {
        id: 8,
        city: "Phú Quốc",
    }, {
        id: 9,
        city: "Huế",
    }, {
        id: 10,
        city: "Cần Thơ",
    }, {
        id: 11,
        city: "Quy Nhơn",
    }, {
        id: 12,
        city: "Hội An",
    },]
    function handleRunslide() {

        setRunslide(0)
    }
    function handleLuislide() {

        setRunslide(1135)
    }

    return (
        <div className="top-palace-slide-show">
            <div onClick={() => { handleRunslide() }} style={runslide === 1135 ? {opacity:1} : {opacity:0}} className="blur1">
                <div className="btn-first">
                    <i className="fa-solid fa-angle-left" />
                </div>
            </div>

            <div onClick={() => { handleLuislide() }} style={runslide === 1135 ? {opacity:0} : {opacity:1}} className="blur2">
                <div className="btn-last">
                    <i className="fa-solid fa-angle-right" />
                </div>
            </div>
            <div id="run-slide" style={{ transform: `translateX(-${runslide}px)` }}>
                {arr.map((e,i)=>{
                    return <City  src={`./images/hot-vn-${e.id}.jpg`} city={e.city}/>
                })}

            </div>
        </div>
    );
}

export default SlideTopPalace;