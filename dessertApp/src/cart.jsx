function Cart({
    cart,
    deleteFromCart,
    confirmOrder
}) {

    return (
        <div className="Cart">

            <h2>Your Cart ({cart.length})</h2>

            {cart.length === 0 && (
                <div className="emptyCart">

                    <img
                        src="illustration-empty-cart.svg"
                        alt=""
                    />

                    <div className="info">
                        <p>
                            Your added items will appear here
                        </p>
                    </div>

                </div>
            )}

            {cart.length > 0 && (
                <div className="cartItems">

                    {cart.map((item, index) => (
                        <div
                            className="cartItem"
                            key={item.name}
                        >

                            <div>
                                <h4>{item.name}</h4>

                                <p>${item.price}</p>
                            </div>

                            <button
                                onClick={() =>
                                    deleteFromCart(index)
                                }
                            >
                                X
                            </button>

                        </div>
                    ))}

                    <div className="Total">

                        <p>Order Total</p>

                        <strong>
                            $
                            {cart.reduce(
                                (total, item) =>
                                    total + item.price,
                                0
                            )}
                        </strong>

                    </div>

                    <button
                        className="confirm"
                        onClick={confirmOrder}
                    >
                        Confirm Order
                    </button>

                </div>
            )}

        </div>
    );
}

export default Cart;