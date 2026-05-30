import React from "react";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "₹120/kg",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
  },
  {
    id: 2,
    name: "Bananas",
    price: "₹60/dozen",
    image: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg",
  },
  {
    id: 3,
    name: "Tomatoes",
    price: "₹40/kg",
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg",
  },
  {
    id: 4,
    name: "Milk",
    price: "₹55/litre",
    image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
  },
];

function Products() {
  return (
    <div className="products">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;