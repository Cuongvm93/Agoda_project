
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./signin.css";

function Signin(props) {
  console.log(props);
  props.handel("cuongvm")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div className="form-login">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("email", {
          required: true,
          pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
      />
      {errors?.email?.type === "required" && <p>This field is required</p>}
      {errors?.email?.type === "pattern" && (
        <p>Email không hợp lệ</p>
      )}
      <label>Password</label>
      <input {...register("lastName", { minLength:8, required:true })} type="password" />
      {errors?.lastName?.type === "minLength" && (
        <p>Mật khẩu tối thiểu 8 ký tự</p>
      )}
       {errors?.lastName?.type === "require" && (
        <p>This field is required</p>
      )}
      <input type="submit" value={"Signin"} />
    </form>
    <div className="form-login-footer">
        <Link to="/signup">Create Account</Link>
        <p>Forgot password</p>
    </div>
    </div>
  );
}

const App=()=>{
  const handelSyncData=(e)=>{
    console.log(e);
  }
    return(
        <div className="signin-form-container">
            <Signin handel={handelSyncData}/>
        </div>
    )
}

export default App;