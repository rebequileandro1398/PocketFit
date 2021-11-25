import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/home")
    }

    return (
        <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
            <h1>¡Bienvenido a PocketFit!</h1>
            <h3>¡La app donde podrás gestionar la administración de tu gimnasio de una forma sencilla, rápida y eficiente! </h3>

            <form style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
                <input name="email" type="email" placeholder="Email"/>
                <input name="pass" type="password" placeholder="Contraseña"/>
                <Link to="/home"><button>Entrar</button></Link> 
                               
            </form>
          <Link to="/passreco"><h6>Recuperar contraseña</h6></Link> 
        </div>
    )
};

export default Login;