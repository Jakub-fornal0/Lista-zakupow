import { useState } from "react";
import { FiX } from "react-icons/fi";

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
          <p className={isChecked ? "checked" : ""}>{product.name}</p>
        </div>
        <p>{product.quantity}</p>
      </div>
      <div className="product-icons">
        <FiX onClick={() => onDelete(product.id)}></FiX>
      </div>
    </div>
  );
};

export default Product;
