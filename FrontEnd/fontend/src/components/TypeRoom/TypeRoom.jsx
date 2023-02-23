import { WifiOutlined, CheckOutlined, TransactionOutlined, TeamOutlined } from '@ant-design/icons';
import "./typeRoom.css"

function TypeRoom() {
    return (
    <>
    <div className="type-room">
                        <div className="master-room-header">
                            Phòng Studio giường Queen (Queen Bed Studio)
                        </div>
                        <div className="master-room-box">
                            <div className="box-left">
                                <h6>Loại phòng</h6>
                                <div >
                                    <img src="/images/thumnail-3.jpg" width={"100%"} />
                                </div>
                                <div className="room-icon wififree">
                                    <WifiOutlined />
                                    <p>Wifi miễn phí</p>
                                </div>
                                <div className="room-icon">
                                    <CheckOutlined />
                                    <p> 1 giường đôi lớn hoặc 1 giường đôi</p>
                                </div>
                                <div className="room-icon">
                                    <CheckOutlined />
                                    <p>Diện tích phòng: 28 m²</p>
                                </div>
                            </div>
                            <div className="box-right">
                                <div className="box-right-header">
                                    <div className="header--1"><h6>Giá này đã gồm</h6></div>
                                    <div className="header--2"><h6>Sức chứa</h6></div>
                                    <div className="header--3"><h6>Giá phòng/đêm</h6></div>
                                    <div className="header--4"><h6>Đặt nhiều nhất</h6></div>
                                </div>
                                <div className="right-box-content">
                                    <div className="header--1 ">
                                        <h5>Giá thấp nhất!</h5>
                                        <div >
                                            <span style={{ color: 'black' }}>Lợi ích</span>
                                            <div className="loiich">
                                                <CheckOutlined />
                                                <p>Nhận phòng nhanh, WiFi miễn phí</p>
                                            </div>
                                            <div className="loiich">
                                                <CheckOutlined />
                                                <p>Giá cực thấp! (không hoàn tiền)</p>
                                            </div>
                                        </div>
                                        <div >
                                            <span style={{ color: 'black' }}>Tặng thưởng</span>
                                            <div className="loiich"><TransactionOutlined />
                                                <p>Thưởng hoàn tiền mặt: 101.482 ₫</p></div>
                                        </div>
                                    </div>
                                    <div className="header--2">
                                        <TeamOutlined />
                                    </div>
                                    <div className="header--3">
                                        <p>Tùy theo Điều khoản</p>
                                        <p>Hoàn tiền mặt</p>
                                        <div className="price-1-dem">
                                            101.482 ₫
                                        </div>
                                        <p>Giá mỗi đêm rẻ nhất từ</p>
                                    </div>
                                    <div className="header--4">
                                        <button className="header-4-btn-1">
                                            Đặt ngay
                                        </button>
                                        <button className="add-to-cart">
                                            Thêm vào xe đẩy hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
    </> );
}

export default TypeRoom;