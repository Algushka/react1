import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
function LoginForm() {
  return (
    <div className="loginwrap">
      <div className="heading_form"> Login Form</div>
      <div className="two_inputs"> 
      <Input
        label="Email"
        placeholder="Enter  email:"
        name="email"
        type="email"
      />
      {/* <div> */}
        <Input
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
