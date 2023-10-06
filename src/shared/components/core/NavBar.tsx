import { selectCartIsEmpty, selectTotalCartItems, useCart, useCartPanel } from '@/services/cart';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/services/auth/useAuth';
import logo from '../../../assets/laptop.png';
import { IfLogged } from './auth/IfLogged';
import { CartPanel } from './CartPanel';

const isActive = (obj: { isActive: boolean }) => {
    return obj.isActive ? 'text-xl text-sky-400 font-bold' : 'text-xl text-white'
}

export const NavBar = () => {

    const navigate = useNavigate()
    const logout = useAuth(state => state.logout)

    const isCartPanelOpened = useCartPanel(state => state.open)
    const toggleCartPanel = useCartPanel(state => state.toggle)
    const totalCartItems = useCart(selectTotalCartItems)
    const isEmpty = useCart(selectCartIsEmpty)

    function logoutHandler() {
        logout()
        navigate('/login')
    }

    return (
        <div className='fixed top-0 left-0 right-0 shadow-2xl z-10'>
            <div className='bg-slate-900 flex justify-between items-center h-20 text-white p-3'>

                {/* LOGO */}
                <div className='flex items-center gap-3'>
                    <img src={logo} alt='my logo' className='w-16' />
                    <NavLink to='shop' className={isActive}>SHOP</NavLink>
                </div>
                
                {/* Card Button Badge */}
                <div>
                    <button 
                        disabled={isEmpty}
                        className='btn accent lg' 
                        onClick={toggleCartPanel}>
                        
                        Cart: { totalCartItems }
                    </button>
                </div>

                {/* Cart Panel */}
                { isCartPanelOpened && <CartPanel /> }

                <div className='fixed bottom-2 right-2 p-5'>
                    <NavLink to='cms' className='btn accent lg'>cms</NavLink>
                    
                    <IfLogged else={
                        <NavLink to='login' className='btn accent lg'>login</NavLink>
                    }>
                        <button onClick={logoutHandler} className='btn primary lg'>logout</button>
                    </IfLogged>
                    
                </div>
            
            </div>
        </div>
    )
}