import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
// форма login
function LoginForm() {
  const login =(event)=>{
event.preventDefault();
    console.log("Login successfull");

  };
  // если кнопка тип button
  //const login =()=>{

  //   console.log("Login successfull");

  // };
  return (
    <form onSumbit={login} className="loginwrap">
      <div className="heading_form"> Login Form</div>
      <div className="two_inputs">
        <Input
          id="email-id"
          label="Email"
          placeholder="Enter  email:"
          name="email"
          type="email"
        />
        {/* <div> */}
        <Input
          id="password-id"
          label="Password"
          placeholder="Enter your password"
          name="passwprd"
          type="password"
        />
        {/* </div> */}
      </div>
      {/* <button onClick={login}  type="button">
        Click me
      </button> */}
      <div>
        {/* <Button name="Login" type = "button" onClick={login} /> */}
      {/* submit происходит в форме */}
      <Button name="Login" type = "submit"  /> 
      </div>
    </form>
  );
}
export default LoginForm;
