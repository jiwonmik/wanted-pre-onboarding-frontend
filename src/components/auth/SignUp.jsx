import { signUpApi } from "../../api/auth";
import { useNavigate, Link } from "react-router-dom";
import useSignForm from "../../hooks/useSignForm";
import { Container, Input, Btn, AuthErrorWrapper } from "../../styles/styles";


const SignUp = () => {
    const navigate = useNavigate();
    const {
        userInfo,
        handleInput,
        emailIsValid,
        emailWarnList,
        passwordIsValid,
        passwordWarnList,
      } = useSignForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        let body = {
            email: userInfo.email,
            password: userInfo.password
        }
        signUpApi(body)
        .then((res) => {
            console.log("success sign up");
            navigate("/signin");
        }).catch((err)=>{
            throw new Error(err);
        })
    };

    return (
        <Container>
            <form style={{ display: "flex", flexDirection: "column"}}
                onSubmit={handleSubmit}>
                <Input 
                    data-testid="email-input" 
                    name="email" 
                    onChange={handleInput("email")} 
                    placeholder="Email"/>
                <Input 
                    data-testid="password-input" 
                    name="password" 
                    onChange={handleInput("password")} 
                    placeholder="Password"/>
                <Btn 
                    data-testid="signin-button"
                    disabled={!emailIsValid || !passwordIsValid}>회원가입</Btn>   
            </form>
            <AuthErrorWrapper>
                {emailWarnList?.map((item) => (
                    <div key={item}>{item}</div>
                ))}
                {passwordWarnList?.map((item) => (
                    <div key={item}>{item}</div>
                ))}
            </AuthErrorWrapper>
            <Link to="/signin">
                Already have account? Sign In.
            </Link>
        </Container>
    );
};

export default SignUp;