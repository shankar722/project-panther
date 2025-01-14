import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import LogoUrl from '../assets/Logo.png'
import PantherLogo from '../assets/panther-logo.jpeg'
// sidebar imports
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';


const Home = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0)

    const menuList = [
        {
            "route": '/dashboard',
            "iconRender": <HomeOutlinedIcon className='sidebar-icon' />
        },
        {
            "route": '/tcb-product-details',
            "iconRender": <div style={{ border: '0.15rem solid #fff', borderRadius: 25, height: 20, width: 20 }} className='d-flex align-items-center justify-content-center'>
                <PercentOutlinedIcon className='sidebar-icon' />
            </div>
        },
        {
            "route": '/chat',
            "iconRender": <AutoAwesomeOutlinedIcon className='sidebar-icon' />
        },
        // {
        //     "route": '/graph',
        //     "iconRender": <StoreOutlinedIcon className='sidebar-icon' />
        // },
        {
            "route": '/tcbTca',
            "iconRender": <AssessmentOutlinedIcon className='sidebar-icon' />
        },
        // {
        //     "route": '/',
        //     "iconRender": <TuneOutlinedIcon className='sidebar-icon' />
        // }
    ]

    const sidebarOnClick = (index, route) => {
        setCount(index);
        navigate(route);
    }

    return (
        <>
            <div className='navbar d-flex align-items-center justify-content-between p-3'>
                <div className='d-flex align-items-center'>
                    {/* <img src={LogoUrl} alt="Vite Logo" width={128} /> */}
                    <p id='logo-text' className='m-0 p-0'>PANTHER</p>
                </div>
            </div>
            <div className='d-flex w-100'>
                <div className="sidebar d-flex flex-column align-items-center justify-content-start">
                    {menuList && menuList.map((menu, index) =>
                        <div className={`sidebar-icon-wrap ${count === index ? 'active' : ''}`} onClick={() => sidebarOnClick(index, menu?.route)}>
                            {menu?.iconRender}
                        </div>)}
                    <div className="sidebar-icon-wrap mt-auto mb-5">
                        <img src={PantherLogo} height={45} alt="mindsprint logo" />
                    </div>
                </div>
                <div className='d-flex flex-column scroll-y-auto flex-balloon main-layout p-4' id='layout'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Home
