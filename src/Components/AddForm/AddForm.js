import "./AddForm.css";
import { useState } from "react";

export default function AddForm({ handleAdd }) {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleAdd(value);
  };
  return (
    <form className="add-form item-add-form d-flex" onSubmit={onSubmit}>
      <input className="form-control" type="text" onChange={handleChange} />
      <button className="add-form__btn btn-outline-seconadry">Добавить</button>
    </form>
  );
}
