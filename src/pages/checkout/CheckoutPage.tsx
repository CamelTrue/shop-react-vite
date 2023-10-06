import { useCheckout } from "./hooks/useCheckout"
import clsx from "clsx"

export const CheckoutPage = () => {

    const { validators, actions, user, dirty, totalCartCost } = useCheckout()

    return (
        <div className="max-w-sm mx-auto">
            <h1 className='title'>CHECKOUT</h1>

            <div className="text-xl my-3 border-b">
                € {totalCartCost}
            </div>

            <form className="flex flex-col gap-3" onSubmit={actions.sendOrder}>
                Tour name: 
                <input 
                    type="text" 
                    placeholder="Your name" 
                    name="name"
                    value={user.name} 
                    onChange={actions.changeHandler} 
                    className={clsx({ 'error': !validators.isEmailValid && dirty })}
                />
                
                Your email:
                <input 
                    type="email" 
                    placeholder="Your mail" 
                    name="email"
                    value={user.email} 
                    onChange={actions.changeHandler}
                    className={clsx({ 'error': !validators.isEmailValid && dirty })} 
                />

                <button 
                    type="submit" 
                    className={clsx('btn', { primary: !validators.isValid, success: validators.isValid })} 
                    disabled={!validators.isValid}
                >    
                    CONFIRM ORDER
                </button>
            </form>
        </div>
    )
}