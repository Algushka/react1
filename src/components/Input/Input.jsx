import "./styles.css";
function Input({ name, type, placeholder, label }) {
  return (
    <div className="inputcontainer">
      <label className="form_label">{label}</label>
      <input 
      className="form_input"
      placeholder={placeholder}
      name={name}
      type={type}
      
      
      
      />
    </div>
  );
}
export default Input;
