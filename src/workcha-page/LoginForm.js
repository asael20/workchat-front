import '../styles/main.css';


function LoginForm() {
    
    return <>
    <form>
        <div className="container-input">
            <label>
                <input  type="email"/>
            </label>
        </div>

        <div className="container-input">
            <label>
                <input type="password" />
            </label>
        </div>

        <div>
            <input className="btn btn-login" type="submit"  value="Sign in"/>
        </div>
    </form>
    </>
}


export default LoginForm;