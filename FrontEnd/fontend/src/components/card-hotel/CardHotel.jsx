import React from 'react';
import { Rate } from 'antd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./cardHotel.css"
import { useState } from 'react';


function CardItem() {
    const [display, setDisplay] = useState("none")
    const [src, setSrc] = useState('')
    const handleOnMouseImg = (e) => {
        setDisplay("block")
        setSrc(e)
    }
    const handelMouseLeave = () => {
        setDisplay("none")
    }
    return (
        <>
            <div className="card-item-container">
                <div className="card-item-content">
                    <div className="card-gallery-wrapper">
                        <div className='zoom-image' style={{ display: display }}>
                            <img src={src} alt="" />
                        </div>
                        <figure class="gallery__item gallery__item--1">
                            <img src="./images/image-main.jpg" class="gallery__img" alt="Image 1" />
                        </figure>
                        <figure class="gallery__item gallery__item--3">
                            <img src="./images/thumnail-1.jpg" class="gallery__img" alt="Image 3" onMouseLeave={handelMouseLeave} onMouseOver={()=>handleOnMouseImg('./images/thumnail-1.jpg')} />
                        </figure>
                        <figure class="gallery__item gallery__item--2">
                            <img src="./images/thumnail-2.jpg" class="gallery__img" alt="Image 2" onMouseLeave={handelMouseLeave} onMouseOver={()=>handleOnMouseImg('./images/thumnail-2.jpg')} />
                        </figure>

                        <figure class="gallery__item gallery__item--4">
                            <img src="./images/thumnail-3.jpg" class="gallery__img" alt="Image 4" onMouseLeave={handelMouseLeave} onMouseOver={()=>handleOnMouseImg('./images/thumnail-3.jpg')} />
                        </figure>
                        <figure class="gallery__item gallery__item--5">
                            <img src="./images/thumnail-4.jpg" class="gallery__img" alt="Image 5" onMouseLeave={handelMouseLeave} onMouseOver={()=>handleOnMouseImg('./images/thumnail-4.jpg')} />
                        </figure>
                        <figure class="gallery__item gallery__item--6">
                            <img src="./images/thumnail-5.jpg" class="gallery__img" alt="Image 6" onMouseLeave={handelMouseLeave} onMouseOver={()=>handleOnMouseImg('./images/thumnail-5.jpg')} />
                        </figure>
                    </div>

                    <div className="card-title">
                        <a href=""> <div className="contentHeader">The Lakeview - Căn hộ Lotus Hồ Tây (The Lakeview - West Lake Lotus Apartments)</div></a>
                        <Rate className='ratting' />
                        <div>
                            <LocationOnIcon /> <span>Quận Tây Hồ,Hà Nội - Xem trên bản đồ</span>
                        </div>
                        <p>"nice"</p>
                    </div>
                    <div className='additional-wrapper'>
                        <div className='poin-review'>
                            <div className='div-point-rate'>
                                <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" fDdlNH" ><path d="M1.199 3.053H21.99a1.5 1.5 0 0 1 1.5 1.5v14.983a1.5 1.5 0 0 1-1.5 1.5H4.53a1.5 1.5 0 0 1-1.5-1.5V8.333a.5.5 0 0 0-.1-.3L.399 4.653a1 1 0 0 1 .8-1.6zm0 1l2.53 3.381c.195.26.3.575.3.9v11.202a.5.5 0 0 0 .5.5H21.99a.5.5 0 0 0 .5-.5V4.553a.5.5 0 0 0-.5-.5H1.2z"></path></svg>
                                <span className='point-rate'>6.8</span>
                            </div>
                            <div className='rattot'>
                                <p>Rất tốt</p>
                                <p>116 nhận xét</p>
                            </div>
                        </div>
                        <div className='additional-price'>
                            <div className='giatrungbinh'>
                                <p>Giá trung bình mỗi đêm</p>
                                <div className='price-card-item'> 406.868 đ</div>
                            </div>
                            <div className='additional-button'>
                                <button ><span>Kiểm tra lượng phòng trống</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default CardItem;