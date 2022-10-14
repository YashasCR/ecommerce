import classes from './Login.module.css';

const Login=()=>{
    function submitHandler(event) {
        event.preventDefault();
      }
    return (
        <form onSubmit={submitHandler}>
        <h2>Login</h2>
          <div className={classes.control}>
            <label htmlFor='EmailId'>Email</label>
            <input type='email' id='EmailId' />
          </div>
          <div className={classes.control}>
            <label htmlFor='Password'>Password</label>
            <input type='password' id='Password' />
          </div>
          <button>Login</button>
        </form>
      );

}

export default Login;