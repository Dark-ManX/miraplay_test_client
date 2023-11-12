import AuthForm from "../../components/AuthForm";
import img from "../../imgs/warrior.d6ee9b86ac432f91a5e2.png";

const AuthPage = () => {
  return (
    <>
      <AuthForm />
      <img
        src={img}
        width={600}
        alt={img}
        className={`absolute top-0 right-0`}
      />
    </>
  );
};

export default AuthPage;
