import React from 'react'
import './style.scss'
import { FaSort } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import ProductItem from '../ProductItem/ProductItem'
import UserItem from '../UserItem/UserItem'
import Pagination from '../Pagination/Pagination'
const Table = () => {
    const displayOptions = ['ID', 'User', 'Contact', 'Status', 'Verify Email', 'Verify Contact']
    return (<>
        <div className='Table'>
            <div className='Table__searchSection'>
                <div className='Table__searchSection--searchBox'>
                    <span><FiSearch /></span>
                    <input type='text' placeholder='Search products'></input>
                </div>
            </div>
            <div className='Table__displayOptions'>
                {
                    displayOptions.map((item) => (
                        <div key={item}>
                            {item}
                            <span><FaSort /></span>

                        </div>
                    ))
                }

            </div>
            <div className='Table__content'>
                <ProductItem />
                <UserItem />
            </div>
            <div className='Table__paginate'>
                <Pagination />
            </div>
        </div>
    </>)
}
export default Table