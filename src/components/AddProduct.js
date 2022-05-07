import { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("fruits&vagetables");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("szt");

  const add = (e) => {
    e.preventDefault();
    onAdd({ name, category, quantity, unit });
    setName("");
    setCategory("fruits&vagetables");
    setQuantity(1);
    setUnit("szt");
  };

  return (
    <form className="add-list" onSubmit={add}>
      <div className="input-div">
        <label>Produkt</label>
        <input
          type="text"
          placeholder="Nazwa produktu"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-div">
        <label>Kategoria</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="fruits&vagetables">Owoce i warzywa</option>
          <option value="diary">Nabiał</option>
          <option value="bread">Pieczywo</option>
          <option value="meat">Mięso</option>
        </select>
      </div>
      <div className="input-div">
        <label>Ilość</label>
        <input
          type="number"
          placeholder="0"
          value={quantity}
          min="0"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="input-div">
        <label>Jednostka</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="szt">szt</option>
          <option value="l">l</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
        </select>
      </div>
      <input type="submit" className="btn" value="Dodaj" />
    </form>
  );
};
export default AddProduct;
