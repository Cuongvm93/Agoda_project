import { Link } from "react-router-dom";
import { Steps, Avatar, Space, Dropdown, Rate } from 'antd';
import "./bookPage.css"
import { UserOutlined, DownOutlined, PhoneOutlined, StarOutlined, CreditCardOutlined } from '@ant-design/icons'
import { MailOutlined, SendOutlined, CalendarOutlined, BookOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Footer from "../../components/footer/Footer";




function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const item = [
    getItem('Đơn đặt chỗ của tôi', 'sub1', <CreditCardOutlined />),
    getItem('Hộp thư', 'sub2', <MailOutlined />),
    getItem('Nhận xét', 'sub3', <StarOutlined />),
    { type: 'divider' },
    getItem('Hồ sơ', 'sub4', <UserOutlined />,),
];
const items2 = [
    getItem('Lấy xác nhận đặt phòng', 'sub1', <SendOutlined />),
    getItem('Đổi ngày', 'sub2', <CalendarOutlined />),
    getItem('Yêu cầu đặc biệt', 'sub3', <BookOutlined />),

];



function BookPage() {
    const description = 'This is a description.';
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <>
            <header className="book-page-header">
                <div className="book-page-wrapper">
                    <div className='book-page-logo'>
                        <Link to="/">
                            <a href='#'>
                                <img src='./images/logo-1.svg' width={"70"} height="100%" alt='logo' />
                            </a>
                        </Link>
                    </div>
                    <div className="book-page-step">
                        <Steps
                            current={1}
                            items={[
                                {
                                    title: 'Chi tiết thanh toán',
                                    description,
                                },
                                {
                                    title: 'Đã xác nhận đặt phòng!',
                                    description,
                                }
                            ]}
                        />
                    </div>
                    <div >
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        <Dropdown trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    useerrrrrrrrrrrr
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </header>
            <div className="book-room-body">
                <div className="book-menu-left">
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 260,
                        }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        items={item}
                    />
                </div>
                <div className="body-right-wrapper">
                    <div className="book-in4-right">
                        <img src="/images/thumnail-2.jpg" width={700} height={233} />
                        <div className="book-property-card">
                            <div className="book-card-left">
                                <div className="book-in4-hotel">
                                    <h4>Cozrum Homes Rivera Corner</h4>
                                    <Rate defaultValue={5} disabled />
                                    <button><PhoneOutlined />Gọi +84898555889</button>
                                </div>
                                <div className="-in4-bottom">
                                    <div>
                                        <h6>Nhận phòng</h6>
                                        <span>23 thg 2 23</span>
                                        <h6>14:00</h6>
                                    </div>
                                    <div>
                                        <span>1 đêm</span>
                                    </div>
                                    <div>
                                        <h6>Trả phòng</h6>
                                        <span>23 thg 2 23</span>
                                        <h6>14:00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="book-card-right">
                                <Menu
                                    items={items2}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="infor-customer">
                        <div className="infor--left">
                            <div className="customer-header">
                                <p>Thông tin về khách</p>
                            </div>
                            <div className="khachchinh">
                                <h6>Khách chính</h6>
                                <div className="tenkhachhang">"ten khach hang"</div>
                            </div>
                            <div className="succhua">
                                <h6>Sức chứa đã đặt</h6>
                                <div>2 người lớn</div>
                            </div>
                        </div>
                        <div className="infor--right">
                            <div className="emailkhachhang">
                                <h6>email</h6>
                                <div>hihihehehaha@gmail.com</div>
                            </div>
                            <div className="sdtkhachhang">
                                <h6>Số điện thoại</h6>
                                <div>09767676767</div>
                            </div>
                        </div>
                    </div>
                    <div className="thongtin-thanhtoan">
                        <div className="thongtin-header">
                            <p>Thông tin thanh toán</p>
                        </div>
                        <div className="in4-tongtien">
                            <h5>Tổng số tiền</h5>
                            <div className="sophong-sotien">
                                <p>1 phòng x 1 đêm</p>
                                <h5>332.543d</h5>
                            </div>
                        </div>
                        <div className="phuongthuc-thanhtoan">
                            <h6>Phương thức thanh toán</h6>
                            <p>Đặt phòng này không cần thẻ tín dụng</p>
                        </div>
                    </div>
                    <div className="xacnhan-thanhtoan-btn">
                        <div className="thanhtoan-btn">
                            <button>Xác nhận đặt phòng!</button>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>);
}

export default BookPage;