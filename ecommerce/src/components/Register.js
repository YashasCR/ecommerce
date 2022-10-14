import classes from './Login.module.css';

const Register=()=>{
    function submitHandler(event) {
        event.preventDefault();
      }
    return (
        <form onSubmit={submitHandler}>
        <h2>Register</h2>
          <div className={classes.control}>
            <label htmlFor='Name'>Name</label>
            <input type='text' id='Name' />
          </div>
          <div className={classes.control}>
            <label htmlFor='EmailId'>Email</label>
            <input type='email' id='EmailId' />
          </div>
          <div className={classes.control}>
            <label htmlFor='Password'>Password</label>
            <input type='password' id='Password' />
          </div>
          <button className={classes.button__register}>Register</button>
          <button className={classes.button__register}>Login</button>
        </form>
      );

}

export default Register;