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
                                T???ng quan
                            </li><li className="NavBar-menu">
                                Ph??ng ngh???
                            </li><li className="NavBar-menu">
                                Ti???n nghi
                            </li><li className="NavBar-menu">
                                ????nh gi??
                            </li><li className="NavBar-menu">
                                V??? tr??
                            </li>
                        </ul>
                        <div className="hotel-just-price inln-flx">
                            <strong id="hotel-price">{new Intl.NumberFormat('de-DE').format(dataRender.price)}</strong><p>??</p>
                            <button>Xem gi??</button>
                        </div>
                    </div>
                </div>
                <div className="descriptionHotel">
                    <div className="property-main-content">
                        <div className="title-description boderrrr">
                            <h4>{dataRender.Name}</h4>
                            <Rate disabled defaultValue={5} />
                            <h6>{dataRender.district}, {dataRender.city_name}, Vi???t Nam - TR??N B???N ?????</h6>
                            <p>N???m ??? v??? tr?? trung t??m t???i T??n B??nh c???a H??? Ch?? Minh, ch??? ngh??? n??y ?????t qu?? kh??ch ??? g???n c??c ??i???m thu h??t v?? t??y ch???n ??n u???ng th?? v???. ?????ng r???i ??i tr?????c khi gh?? th??m B???o t??ng Ch???ng t??ch chi???n tranh n???i ti???ng. Ch??? ngh??? 5 sao n??y ???????c trang b??? c??c ti???n nghi ngay trong khu??n vi??n ????? n??ng cao ch???t l?????ng v?? ni???m vui cho k??? ngh??? c???a qu?? kh??ch.</p>
                        </div>
                        <div className="diemnoibatnhat boderrrr">
                            <h5>??i???m n???i b???t nh???t</h5>
                            <div className="dnbt-flex">
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/spray.svg" alt="" width="auto" height="32px" />
                                    <p>S???ch b??ng </p>
                                </div>
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/medal.svg" alt="" width="auto" height="32px" />
                                    <p>????ng ti???n nh???t  </p>
                                </div>
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/baggage-pay.svg" alt="" width="auto" height="32px" />
                                    <p>Kh??ch ??i c??ng t??c ????nh gi?? r???t cao </p>
                                </div>
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/door.svg" alt="" width="auto" height="32px" />
                                    <p>Nh???n ph??ng '[24 gi???]' </p>
                                </div>
                                <div className="dnbn-icon">
                                    <img src="https://cdn6.agoda.net/images/property/highlights/bedKing.svg" alt="" width="auto" height="32px" />
                                    <p>Ch???t l?????ng v?? ti???n nghi ph??ng tuy???t v???i </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="northstarContent">
                        <div className="utilities-rating boderrrr">
                            <div className="TCTV">
                                <div className="border-outline">9.1</div>
                                <div><h6>Tr??n c??? tuy???t v???i</h6>
                                    <p>841 b??i ????nh gi??</p></div>
                            </div>
                            <div className="likeeee">
                                <div className="boderrrr maglik"><p>D???n ph??ng</p></div>
                                <div className="boderrrr maglik"><p>Ng???m c???nh</p></div>
                                {dataRender.breakfast!="0"?
                                <div className="boderrrr maglik"><p>B???a s??ng</p></div>:""    
                            }
                            </div>
                        </div>
                        <div className="mapCompact boderrrr">
                            <div><VerifiedRoundedIcon /><p>V??? tr?? hi???m c??</p></div>
                            <div><LocalParkingRoundedIcon /><p>????? xe</p></div>
                            <h6>C??c ?????a danh n???i ti???ng</h6>
                            <p>
                                B???o t??ng Ch???ng t??ch c.tranh
                                4,5 km</p>
                            <p>B??u ??i???n trung t??m S??i G??n
                                4,8 km</p>
                            <p>
                                Dinh ?????c L???p 4,9km</p>
                            <p>
                                Nh?? th??? ?????c B?? S??i G??n 4,9 km
                            </p>
                            <p>Ch??? B???n Th??nh
                            </p>
                        </div>
                    </div>
                </div>
                <div className="option-room">
                    <div className="figure-room">Ch???n ph??ng</div>
                    <TypeRoom/>
                    <TypeRoom/>
                    <TypeRoom/>
                </div>
                <div className="hotel-review">
                    <div className="review-comment">
                        <div className="comement-left">
                            <div className="score-review">10,0 <span>Tr??n c??? tuy???t v???i</span></div>
                            <p><strong>Lan</strong> t??? Singapore</p>
                            <p>Du l???ch m???t m??nh</p>
                            <p>Apartment With 2 Bedrooms</p>
                            <p>???? ??? 1 ????m v??o th??ng hai 2022</p>
                        </div>
                        <div className="comement-right">
                            <h5>"Everything is very good."</h5>
                            <p>Great staff, great location, very clean and comfortable, extremely nice rooms, great value for money.</p>
                            <span>???? nh???n x??t v??o 03 th??ng ba 2022</span>
                        </div>
                    </div>
                    <div className="review-comment">
                        <div className="comement-left">
                            <div className="score-review">10,0 <span>Tr??n c??? tuy???t v???i</span></div>
                            <p><strong>Lan</strong> t??? Singapore</p>
                            <p>Du l???ch m???t m??nh</p>
                            <p>Apartment With 2 Bedrooms</p>
                            <p>???? ??? 1 ????m v??o th??ng hai 2022</p>
                        </div>
                        <div className="comement-right">
                            <h5>"Everything is very good."</h5>
                            <p>Great staff, great location, very clean and comfortable, extremely nice rooms, great value for money.</p>
                            <span>???? nh???n x??t v??o 03 th??ng ba 2022</span>
                        </div>
                    </div> <div className="review-comment">
                        <div className="comement-left">
                            <div className="score-review">10,0 <span>Tr??n c??? tuy???t v???i</span></div>
                            <p><strong>Lan</strong> t??? Singapore</p>
                            <p>Du l???ch m???t m??nh</p>
                            <p>Apartment With 2 Bedrooms</p>
                            <p>???? ??? 1 ????m v??o th??ng hai 2022</p>
                        </div>
                        <div className="comement-right">
                            <h5>"Everything is very good."</h5>
                            <p>Great staff, great location, very clean and comfortable, extremely nice rooms, great value for money.</p>
                            <span>???? nh???n x??t v??o 03 th??ng ba 2022</span>
                        </div>
                    </div> <div className="review-comment">
                        <div className="comement-left">
                            <div className="score-review">10,0 <span>Tr??n c??? tuy???t v???i</span></div>
                            <p><strong>Lan</strong> t??? Singapore</p>
                            <p>Du l???ch m???t m??nh</p>
                            <p>Apartment With 2 Bedrooms</p>
                            <p>???? ??? 1 ????m v??o th??ng hai 2022</p>
                        </div>
                        <div className="comement-right">
                            <h5>"Everything is very good."</h5>
                            <p>Great staff, great location, very clean and comfortable, extremely nice rooms, great value for money.</p>
                            <span>???? nh???n x??t v??o 03 th??ng ba 2022</span>
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