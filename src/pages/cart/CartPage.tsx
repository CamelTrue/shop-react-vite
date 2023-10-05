import { selectCartList, selectTotalCartCost, useCart, selectCartIsEmpty } from "@/services/cart"
import { NavLink } from "react-router-dom"

export const CartPage = () => {
    
    const list = useCart(selectCartList)
    const totalCost = useCart(selectTotalCartCost)
    const isEmpty = useCart(selectCartIsEmpty)

    const increaseQty = useCart(state => state.increaseQty)
    const decreaseQty = useCart(state => state.decreaseQty)
    
    return (
        <div>
            <h1 className='title'>CART</h1>

            <ul>
                {
                    list.map(p => {
                        return (
                            <li 
                                key={p.product.id}
                                className="flex flex-col sm:flex-row justify-between items-center gap-3 my-3 border-b border-blue-400 py-3"
                            >
                                <div className="flex items-center gap-3">
                                    <img src={p.product.tmb} alt={p.product.name} className="w-24 rounded-xl" />
                                    <div className="font-bold">{p.product.name}</div>
                                </div>
                            
                                <div className="flex flex-col sm:flex-row gap-4 items-center">
                                    <div className="flex items-center gap-3">
                                        <button className="btn primary" onClick={() => decreaseQty(p.product.id)}>-</button>
                                        <div>qty: </div>
                                        <button className="btn primary" onClick={() => increaseQty(p.product.id)}>+</button>
                                    </div>

                                    <div className="w-16 text-center">
                                        € {p.product.cost * p.qty}
                                    </div>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>

            <div className="text-4xl text-right my-4 mr-4">
                Total: {totalCost}
            </div>

            {
                !isEmpty && (
                    <div className="flex justify-between">
                        <NavLink to="/checkout" className="btn primary lg">Confirm order</NavLink>
                    </div>
                )
            }

        </div>
    )
}