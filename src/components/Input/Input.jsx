import "./styles.css";
function Input({ id, name, type, placeholder, label }) {
  return (
    <div className="inputcontainer">
      <label className="form_label" htmlFor={id}>{label}</label>
      <input 
      className="form_input"
      id={id}
      placeholder={placeholder}
      name={name}
      type={type}
      />
    </div>
  );
}
export default Input;
