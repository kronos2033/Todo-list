import "./AddForm.css";

export default function AddForm({ handleAdd}) {
  return (
    <div className="add-form">
      <button
        className="add-form__btn btn-outline-seconadry"
        onClick={handleAdd}
      >
        Добавить
      </button>
    </div>
  );
}
