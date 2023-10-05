import { 
    BrowserRouter, 
    NavLink, 
    Navigate, 
    Route, 
    Routes 
} from 'react-router-dom';
 
import {
    CartPage,
    CheckoutPage,
    CMSOrdersPage,
    CMSPage,
    CMSProductsPage,
    LoginPage,
    ShopPage,
    ThanksPage
} from './pages'

import { NavBar } from '@/shared/index';

function App() {

    return (
        <BrowserRouter>
            
            <NavBar />
            <hr />

            <div className="page">
                <Routes>
                    <Route path='shop' element={<ShopPage />} />
                    <Route path='cart' element={<CartPage />} />
                    <Route path='checkout' element={<CheckoutPage />} />
                    <Route path='thankyou' element={<ThanksPage />} />
                    <Route path='login' element={<LoginPage />} />

                    <Route path='cms' element={<CMSPage />} >
                        <Route path='products' element={<CMSProductsPage />} />
                        <Route path='orders' element={<CMSOrdersPage />} />
                        <Route index element={<Navigate to='products' />} />
                    </Route>

                    <Route path='*' element={<Navigate to='shop' />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App