import Header from "../../components/header/Header";
import "./CartPage.css"
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
import { Rate } from "antd";
import PlaceIcon from '@mui/icons-material/Place';
import { useState } from "react";

function CartItem() {
    const desc = ["Rất tệ", 'Tệ', 'Bình thường', 'Tốt', 'Tuyệt vời'];
    const [value, setValue] = useState(5);
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <div className="cart-boderr cart-item">
            <div className="dplfl" >
                <div className="cart-hotel-in4" style={{ display: "flex" }}>
                    <img src="/images/thumnail-5.jpg" width={70} height={104} />
                    <div className="hotel-in4-box">
                        <p>Sen Boutique House</p>
                        <Rate allowHalf disabled defaultValue={4.5} />
                        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                        <div style={{ display: "flex ", margin: "0 0 10px  0" }}><PlaceIcon fontSize={"small"} /><p>Hồ Chí Minh</p></div>
                        <div style={{ fontSize: '13px', margin: "10px 10px" }}> <span className="point--rate">8.8</span> 204 review</div>
                    </div>
                </div>
                <Button type="primary" shape="round" icon={<DeleteOutlined />} />
            </div>
            <div className="checkbox-title">
                <div>
                    <Checkbox onChange={onChange}>1 x Căn hộ Deluxe </Checkbox>
                    <p>26 tháng 2 năm 2023 — 27 tháng 2 năm 2023</p>
                </div>
                <div>
                    <span>843.866 ₫</span>
                    <p>Bao gồm thuế và phí</p>
                </div>
            </div>
        </div>
    )
}


function CartPage() {

    return (
        <div className="cart-page">
            <Header />
            <div className="cart-page-body">
                <div className="cart--container">
                    <div className="cart-left">
                        <div className="cart-boderr xdhcqk">Xe đẩy hàng của quý khách (4)</div>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        
                    </div>
                    <div className="cart-right">
                        <div className="cart-boderr">
                            <div className="tonggia">
                                <h5>Tổng giá</h5>
                                <div className="price-amount"><p>012131 ₫</p></div>
                            </div>
                            <button>Next..</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}



export default CartPage;