import Header from "../../components/header/Header";
import Search from "../../components/search/search";
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { Checkbox, Input, Rate } from 'antd';
import CardItem from "../../components/card-hotel/CardHotel";
import "./SearchPage.css"
import { ButtonGroup, Button } from "@mui/material";
import { useState } from "react";
import Footer from "../../components/footer/Footer";




function SearchPage() {
    const [value, setValue] = useState([0,23000000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    return (
        <div className="searchPage">
            <div>
                <Header />
                <Search />
            </div>
            <div className="search-page-container">
                <div className="leftColumn">
                    <div className="searchPage-bar">
                        <TextField id="outlined-search" label="Tim kiem" size="small" fullWidth type="search" />
                        <h6>Giá mỗi đêm</h6>
                    </div>
                    <div className="search-fillter-column">
                        <div className="type-fillter">
                            <Slider
                                value={value}
                                onChange={handleChange}
                                disableSwap
                                min={0} max={23000000}
                            />
                            <div className="fillter-range">
                                <div className="price-fillter">
                                    <label htmlFor="Input">Tối thiểu</label>
                                    <Input prefix="đ"
                                        size="small" 
                                        onChange={handleInputChange}
                                        value={(new Intl.NumberFormat('de-DE').format(value[0]))} />
                                </div>
                                <div className="price-fillter">
                                    <label htmlFor="Input">Tối đa</label>
                                    <Input size="small"
                                         prefix='đ'
                                        onChange={handleInputChange}
                                        value={(new Intl.NumberFormat('de-DE').format(value[1]))}/>
                                </div>
                            </div>
                        </div>
                        <div className="type-fillter">
                            <h6>Xếp hạng sao</h6>
                            <Checkbox ><Rate disabled defaultValue={5} /></Checkbox>
                            <Checkbox ><Rate disabled defaultValue={4} /></Checkbox>
                            <Checkbox ><Rate disabled defaultValue={3} /></Checkbox>
                            <Checkbox ><Rate disabled defaultValue={2} /></Checkbox>
                        </div>
                        <div className="type-fillter">
                            <h6>Loại hình nơi ở</h6>
                            <Checkbox >Hotel</Checkbox>
                            <Checkbox >Apartment</Checkbox>
                            <Checkbox >Resort</Checkbox>
                            <Checkbox >Bulgaro</Checkbox>
                        </div>
                        <div className="type-fillter">
                            <h6>Tiện ích</h6>
                            <Checkbox >Bể bơi</Checkbox>
                            <Checkbox >Nhà hàng</Checkbox>
                            <Checkbox >Hút thuốc</Checkbox>
                            <Checkbox >Ăn sáng</Checkbox>
                        </div>

                        <div className="type-fillter">
                            <h6>Loại Hình Giường</h6>
                            <Checkbox >Single</Checkbox>
                            <Checkbox >Queen</Checkbox>
                            <Checkbox >King</Checkbox>
                            <Checkbox >Double</Checkbox>
                        </div>
                        <div className="type-fillter">
                            <h6>Các nơi lân cận</h6>
                            <Checkbox >Bên trong trung tâm thành phố (482)</Checkbox>
                            <Checkbox >cách trung tâm 2 km (561)</Checkbox>
                            <Checkbox >cách trung tâm 2-5 km (80)</Checkbox>
                        </div>

                        <div className="type-fillter">
                            <h6>Đánh giá của khách</h6>
                            <Checkbox >9+Trên cả tuyệt vời(482)</Checkbox>
                            <Checkbox >8+Xuất sắc (813)</Checkbox>
                            <Checkbox >7+Rất tốt (1007)</Checkbox>
                            <Checkbox >6+Hài lòng (1080)</Checkbox>
                        </div>
                        <div className="type-fillter">
                            <h6>Khoảng cách đến trung tâm</h6>
                            <Checkbox >Bên trong trung tâm thành phố (770)</Checkbox>
                            <Checkbox >cách trung tâm 2 km (969)</Checkbox>
                            <Checkbox >cách trung tâm 2-5 km (122)</Checkbox>
                        </div>
                    </div>
                </div>
                <div className="rightColumn">
                    <div>
                        <ButtonGroup className="button-mui" variant="text" size="large" aria-label="outlined primary button group">
                            <Button disabled>Sắp xếp</Button>
                            <Button className="btn-2">Phù hợp nhất</Button>
                            <Button> Giá thấp nhất </Button>
                            <Button> Khoảng cách </Button>
                            <Button> Được đánh giá nhiều nhất </Button>
                            <Button> Ưu đãi nóng hổi </Button>
                        </ButtonGroup>
                    </div>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
            </div>
            <Footer />
        </div>);
}

export default SearchPage;