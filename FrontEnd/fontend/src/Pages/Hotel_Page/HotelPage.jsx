import { Rate } from "antd";
import Header from "../../components/header/Header";
import Search from "../../components/search/search";
import "./hotelPage.css"
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded';
import Footer from "../../components/footer/Footer";
import TypeRoom from "../../components/TypeRoom/TypeRoom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function HotelPage() {
    let {idHotel}=useParams()
    console.log(idHotel);
    const [dataRender,setDataRender]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/hotel/${idHotel}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data[0]);
            setDataRender(data[0])
        })
    },[])
    return (
        <>
            <Header />
            <Search />
            {dataRender.price&&
            <>
            <div className="hotelPage-wrapper">
                <div class='hotel-page-gallery'>
                    <figure className="gallery-hotel gallery-hotel--1">
                        <img src={dataRender.image[0]} className="gallery-img" alt="Image 1" />
                    </figure>
                    <figure className="gallery-hotel gallery-hotel--2">
                        <img src={dataRender.image[1]} className="gallery-img" alt="Image 2" />
                    </figure>
                    <figure className="gallery-hotel gallery-hotel--3">
                        <img src={dataRender.image[2]} className="gallery-img" alt="Image 3" />
                    </figure>
                    <figure className="gallery-hotel gallery-hotel--4">
                        <img src={dataRender.image[3]} className="gallery-img" alt="Image 4" />
                    </figure>
                    <figure className="gallery-hotel gallery-hotel--5">
                        <img src={dataRender.image[4]} className="gallery-img" alt="Image 5" />
                    </figure>
                    <figure className="gallery-hotel gallery-hotel--6">
                        <img src={dataRender.image[5]} className="gallery-img" alt="Image 6" />
                    </figure>
                    <figure className="gallery-hotel gallery-hotel--7">
                        <img src={dataRender.image[6]} className="gallery-img" alt="Image 7" />
                    </figure>
                </div>
                <div id="HotelNavbar">
                    <div className="hotelNavBar inln-flx">
                        <ul className="inln-flx">
                            <li className="NavBar-menu">
                                Tổng quan
                            </li><li className="NavBar-menu">
                                Phòng nghỉ
                            </li><li className="NavBar-menu">
                                Tiện nghi
                            </li><li className="NavBar-menu">
                                Đánh giá
                            </li><li className="NavBar-menu">
                                Vị trí
                            </li>
                        </ul>
                        <div className="hotel-just-price inln-flx">
                            <strong id="hotel-price">{new Intl.NumberFormat('de-DE').format(dataRender.price)}</strong><p>đ</p>
                            <button>Xem giá</button>
                        </div>
                    </div>
                </div>
                <div className="descriptionHotel">
                    <div className="property-main-content">
                        <div className="title-description boderrrr">
                            <h4>{dataRender.Name}</h4>
                            <Rate disabled defaultValue={5} />
                            <h6>{dataRender.district}, {dataRender.city_name}, Việt Nam - TRÊN BẢN ĐỒ</h6>
                            <p>Nằm ở vị trí trung tâm tại Tân Bình của Hồ Chí Minh, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm Bảo tàng Chứng tích chiến tranh nổi tiếng. Chỗ nghỉ 5 sao này được trang bị các tiện nghi ngay trong khuôn viên để nâng cao chất lượng và niềm vui cho kỳ nghỉ của quý khách.</p>
                        </div>
                        <div className="diemnoibatnhat boderrrr">
                            <h5>Điểm nổi bật nhất</h5>
                            <div className="dnbt-flex">
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/spray.svg" alt="" width="auto" height="32px" />
                                    <p>Sạch bóng </p>
                                </div>
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/medal.svg" alt="" width="auto" height="32px" />
                                    <p>Đáng tiền nhất  </p>
                                </div>
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/baggage-pay.svg" alt="" width="auto" height="32px" />
                                    <p>Khách đi công tác đánh giá rất cao </p>
                                </div>
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/door.svg" alt="" width="auto" height="32px" />
                                    <p>Nhận phòng '[24 giờ]' </p>
                                </div>
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/bedKing.svg" alt="" width="auto" height="32px" />
                                    <p>Chất lượng và tiện nghi phòng tuyệt vời </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="northstarContent">
                        <div className="utilities-rating boderrrr">
                            <div className="TCTV">
                                <div className="border-outline">9.1</div>
                                <div><h6>Trên cả tuyệt vời</h6>
                                    <p>841 bài đánh giá</p></div>
                            </div>
                            <div className="likeeee">
                                <div className="boderrrr maglik"><p>Dọn phòng</p></div>
                                <div className="boderrrr maglik"><p>Ngắm cảnh</p></div>
                                {dataRender.breakfast!="0"?
                                <div className="boderrrr maglik"><p>Bữa sáng</p></div>:""    
                            }
                            </div>
                        </div>
                        <div className="mapCompact boderrrr">
                            <div><VerifiedRoundedIcon /><p>Vị trí hiếm có</p></div>
                            <div><LocalParkingRoundedIcon /><p>Đỗ xe</p></div>
                            <h6>Các địa danh nổi tiếng</h6>
                            <p>
                                Bảo tàng Chứng tích c.tranh
                                4,5 km</p>
                            <p>Bưu điện trung tâm Sài Gòn
                                4,8 km</p>
                            <p>
                                Dinh Độc Lập 4,9km</p>
                            <p>
                                Nhà thờ Đức Bà Sài Gòn 4,9 km
                            </p>
                            <p>Chợ Bến Thành
                            </p>
                        </div>
                    </div>
                </div>
                <div className="option-room">
                    <div className="figure-room">Chọn phòng</div>
                    <TypeRoom/>
                    <TypeRoom/>
                    <TypeRoom/>
                </div>
                <div className="hotel-review">
                    <div className="review-comment">
                        <div className="comement-left">
                            <div className="score-review">10,0 <span>Trên cả tuyệt vời</span></div>
                            <p><strong>Lan</strong> từ Singapore</p>
                            <p>Du lịch một mình</p>
                            <p>Apartment With 2 Bedrooms</p>
                            <p>Đã ở 1 đêm vào tháng hai 2022</p>
                        </div>
                        <div className="comement-right">
                            <h5>"Everything is very good."</h5>
                            <p>Great staff, great location, very clean and comfortable, extremely nice rooms, great value for money.</p>
                            <span>Đã nhận xét vào 03 tháng ba 2022</span>
                        </div>
                    </div>
                    <div className="review-comment">
                        <div className="comement-left">
                            <div className="score-review">10,0 <span>Trên cả tuyệt vời</span></div>
                            <p><strong>Lan</strong> từ Singapore</p>
                            <p>Du lịch một mình</p>
                            <p>Apartment With 2 Bedrooms</p>
                            <p>Đã ở 1 đêm vào tháng hai 2022</p>
                        </div>
                        <div className="comement-right">
                            <h5>"Everything is very good."</h5>
                            <p>Great staff, great location, very clean and comfortable, extremely nice rooms, great value for money.</p>
                            <span>Đã nhận xét vào 03 tháng ba 2022</span>
                        </div>
                    </div> <div className="review-comment">
                        <div className="comement-left">
                            <div className="score-review">10,0 <span>Trên cả tuyệt vời</span></div>
                            <p><strong>Lan</strong> từ Singapore</p>
                            <p>Du lịch một mình</p>
                            <p>Apartment With 2 Bedrooms</p>
                            <p>Đã ở 1 đêm vào tháng hai 2022</p>
                        </div>
                        <div className="comement-right">
                            <h5>"Everything is very good."</h5>
                            <p>Great staff, great location, very clean and comfortable, extremely nice rooms, great value for money.</p>
                            <span>Đã nhận xét vào 03 tháng ba 2022</span>
                        </div>
                    </div> <div className="review-comment">
                        <div className="comement-left">
                            <div className="score-review">10,0 <span>Trên cả tuyệt vời</span></div>
                            <p><strong>Lan</strong> từ Singapore</p>
                            <p>Du lịch một mình</p>
                            <p>Apartment With 2 Bedrooms</p>
                            <p>Đã ở 1 đêm vào tháng hai 2022</p>
                        </div>
                        <div className="comement-right">
                            <h5>"Everything is very good."</h5>
                            <p>Great staff, great location, very clean and comfortable, extremely nice rooms, great value for money.</p>
                            <span>Đã nhận xét vào 03 tháng ba 2022</span>
                        </div>
                    </div>
                </div>
            </div>
            </>
            }
            <Footer />

        </>

    );
}

export default HotelPage;