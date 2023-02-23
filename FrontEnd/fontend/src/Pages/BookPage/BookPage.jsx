import { Link } from "react-router-dom";
import { Steps, Avatar, Space, Dropdown, Rate } from 'antd';
import "./bookPage.css"
import { UserOutlined, DownOutlined, PhoneOutlined } from '@ant-design/icons'
import { MailOutlined,AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';



const items = [
    {
        label: <a href="https://www.antgroup.com">Thoat</a>,
        key: '0',
    }
];
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
  getItem('Hộp thư', 'sub1', <MailOutlined />),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />),

  { type: 'divider'},
  getItem('Navigation Three', 'sub4', <SettingOutlined />,),
];

function BookPage() {
    const description = 'This is a description.';
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
                        <Dropdown menu={{ items, }} trigger={['click']}>
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
                <div className="book-in4">
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
                                    <span>14:00</span>
                                </div>
                                <div>
                                    <span>1 đêm</span>
                                </div>
                                <div>
                                    <h6>Trả phòng</h6>
                                    <span>23 thg 2 23</span>
                                    <span>14:00</span>
                                </div>
                            </div>
                        </div>
                        <div className="book-card-left">
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default BookPage;