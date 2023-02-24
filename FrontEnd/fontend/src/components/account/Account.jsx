import "./account.css";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';

import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Header from "../header/Header";
import { green } from "@mui/material/colors";


export default function Account() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            
            <Button
                startIcon={<Avatar sx={{ bgcolor: green[500] }} />}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >   <div>User Name</div>
                <ArrowDropDownIcon/>
            </Button>
            <Menu  className="control-menu"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >   <div className="my--account">Tài khoản của tôi</div>
                <MenuItem onClick={handleClose}>Đơn đặt chỗ của tôi</MenuItem>
                <MenuItem onClick={handleClose}>Hộp thư</MenuItem>
                <MenuItem onClick={handleClose}>Thưởng hoàn tiền mặt</MenuItem>
                <MenuItem onClick={handleClose}>Danh sách yêu thích</MenuItem>
                <MenuItem onClick={handleClose}>Nhận xét của tôi</MenuItem>
                <MenuItem onClick={handleClose}>Hồ sơ của tôi</MenuItem>
                <Divider />
                <button className="account--btn"> Thoát</button>
            </Menu>
        </div>
    );
}
