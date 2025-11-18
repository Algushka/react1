import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
// форма login
function LoginForm() {
  return (
    <div className="loginwrap">
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
      <div>
        <Button name="Login" />
      </div>
    </div>
  );
}
export default LoginForm;
