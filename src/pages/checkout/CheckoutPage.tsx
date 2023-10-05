import { selectTotalCartCost, useCart } from "@/services/cart"
import { ChangeEvent, useState } from "react"

export const CheckoutPage = () => {
    const [user, setUser] = useState({ name: '', email: '' })
    const totalCartCost = useCart(selectTotalCartCost)

    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        setUser(state => ({ ...state, [name]: value}))
    }

    const isNameValid = user.name.length
    const isEmailValid = user.email.length
    const isValid = isNameValid && isEmailValid

    return (
        <div className="max-w-sm mx-auto">
            <h1 className='title'>CHECKOUT</h1>

            <div className="text-xl my-3 border-b">
                € {totalCartCost}
            </div>

            <form className="flex flex-col gap-3" action="">
                Tour name: 
                <input 
                    type="text" 
                    placeholder="Your name" 
                    name="name"
                    value={user.name} 
                    onChange={changeHandler} />
                
                Your email:
                <input 
                    type="email" 
                    placeholder="Your mail" 
                    name="email"
                    value={user.email} 
                    onChange={changeHandler} />

                <button className="btn primary" disabled={!isValid}>
                    CONFIRM ORDER
                </button>
            </form>
        </div>
    )
}