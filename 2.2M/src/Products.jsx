import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/slices/productSlice"
import { addToCart } from "./redux/slices/cartSlice";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const productData = [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Phone", price: 20000 },
      { id: 3, name: "Headphones", price: 3000 },
    ];

    dispatch(setProducts(productData));
  }, [dispatch]);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;