import React, { useState } from 'react'
import './style.scss'
import { RiDashboardFill, RiDatabase2Line, RiUser3Line, RiShoppingCartLine, RiSettings5Line, RiArrowDownSLine } from 'react-icons/ri'

const Navigation = () => {
    const [mainTabActive, setMaintabActive] = useState({ 0: false, 1: false })
    const [subTabActive, setSubTabActive] = useState(1)
    return (
        <>
            <div className='Navigation'>
                <div className='Navigation__header'>
                    <div>SHOP APP</div>
                    <div>ADMIN</div>
                </div>
                <div className='Navigation__application'><a>APPLICATION</a></div>
                <ul className='Navigation__category'>
                    <li className={`Navigation__category--main ${subTabActive === 1 && 'active'}`}
                        onClick={() => setSubTabActive(1)}
                    >
                        <span><RiDashboardFill /></span>
                        <a>DASHBOARD</a>
                        <span></span>
                    </li>
                    <li className={`Navigation__category--main ${mainTabActive[0] && 'active-main'} `}
                        onClick={() => setMaintabActive({ ...mainTabActive, 0: !mainTabActive[0] })}
                    >
                        <span><RiDatabase2Line /></span>
                        <h5>Product</h5>
                        <span><RiArrowDownSLine /></span>

                    </li>
                    <li className={`Navigation__category--sub ${mainTabActive[0] && 'active-sub'}`}>
                        <ul >
                            <li className={subTabActive === 2 && 'active'}
                                onClick={() => setSubTabActive(2)}
                            ><a>Product List</a></li>
                            <li className={subTabActive === 3 && 'active'}
                                onClick={() => setSubTabActive(3)}
                            ><a>Add Product</a></li>
                        </ul>
                    </li>
                    <li className={`Navigation__category--main ${mainTabActive[1] && 'active-main'} `}
                        onClick={() => setMaintabActive({ ...mainTabActive, 1: !mainTabActive[1] })}>
                        <span><RiUser3Line /></span>
                        <h5>User</h5>
                        <span><RiArrowDownSLine /></span>


                    </li>
                    <li className={`Navigation__category--sub ${mainTabActive[1] && 'active-sub'}`}
                    >
                        <ul>
                            <li className={subTabActive === 4 && 'active'}
                                onClick={() => setSubTabActive(4)}
                            ><a>User List</a></li>
                            <li className={subTabActive === 5 && 'active'}
                                onClick={() => setSubTabActive(5)}
                            ><a>Add User</a></li>
                        </ul>
                    </li>
                    <li className={`Navigation__category--main ${subTabActive === 6 && 'active'}`}
                        onClick={() => setSubTabActive(6)}
                    >
                        <span><RiShoppingCartLine /></span>
                        <h5 >Orders</h5>
                    </li>
                    <li className='Navigation__category--main'>
                        <span><RiSettings5Line /></span>
                        <h5>Settings</h5>
                        <span><RiArrowDownSLine /></span>

                    </li>

                </ul>

            </div>
        </>
    )
}

export default Navigation