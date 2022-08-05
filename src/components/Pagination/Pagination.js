import React from 'react'
import './style.scss'
import ReactPaginate from 'react-paginate';
const Pagination = () => {
    return (
        <>
            <div className='Pagination'>
                <ReactPaginate />
            </div>
        </>
    )
}
export default Pagination