import dessertCard from "./data.json";

function Cards({ addToCart }) {

    return (
        <div className="products">

            <h2>Desserts</h2>

            {dessertCard.map((card) => (
                <div key={card.name} className="Card">

                    <div className="imageBox">

                        <img
                            src={card.image.desktop}
                            alt={card.name}
                        />

                        <button onClick={() => addToCart(card)}>
                            Add to Cart
                        </button>

                    </div>

                    <div className="info">

                        <p>{card.category}</p>

                        <h3>{card.name}</h3>

                        <p>${card.price}</p>

                    </div>

                </div>
            ))}

        </div>
    );
}

export default Cards;