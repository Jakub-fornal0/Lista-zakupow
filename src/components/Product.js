import { useState } from "react";
import { FiX } from "react-icons/fi";
import {
  GiMilkCarton,
  GiSlicedBread,
  GiShinyApple,
  GiHamShank,
} from "react-icons/gi";

const Product = ({ product, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="product">
      <div className="product-info">
        <div className="input-name">
          <input
            type="checkbox"
            value={isChecked}
            onChange={(e) => setIsChecked(!isChecked)}
            required
          />
          {product.category === "diary" && (
            <GiMilkCarton className="product-icons"></GiMilkCarton>
          )}
          {product.category === "fruits&vagetables" && (
            <GiShinyApple className="product-icons"></GiShinyApple>
          )}
          {product.category === "bread" && (
            <GiSlicedBread className="product-icons"></GiSlicedBread>
          )}
          {product.category === "meat" && (
            <GiHamShank className="product-icons"></GiHamShank>
          )}
          <p className={isChecked ? "checked" : ""}>{product.name}</p>
        </div>
        <p>
          {product.quantity} {product.unit}
        </p>
      </div>
      <div className="delete-icons">
        <FiX onClick={() => onDelete(product.id)}></FiX>
      </div>
    </div>
  );
};

export default Product;
