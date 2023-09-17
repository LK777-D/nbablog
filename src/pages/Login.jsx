import Auth from "../components/Auth";
/* eslint-disable react/prop-types */

const Login = (props) => {
  return (
    <section className="w-full min-h-[80vh] p-7 flex flex-col justify-center items-center ">
      <Auth
        setLogInEmail={props.setLogInEmail}
        setLogInPassword={props.setLogInPassword}
        setRegisterEmail={props.setRegisterEmail}
        setRegisterPassword={props.setRegisterPassword}
        register={props.register}
        logout={props.logout}
        login={props.login}
        user={props.user}
        registerEmail={props.registerEmail}
        logInEmail={props.logInEmail}
        logInPassword={props.logInPassword}
        registerPassword={props.registerPassword}
      />
    </section>
  );
};

export default Login;
