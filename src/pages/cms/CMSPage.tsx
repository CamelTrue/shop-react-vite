import { NavLink, Outlet } from 'react-router-dom'
import React from 'react'

const isActive = (obj: { isActive: boolean }) => {
    return obj.isActive ? 'btn primary' : 'btn'
}

export const CMSPage = () => {
    return (
        <div>

            <NavLink to='/cms/products' className={isActive}>Products</NavLink>
            <NavLink to='/cms/orders' className={isActive}>Orders</NavLink>

            <Outlet />
        </div>
    )
}