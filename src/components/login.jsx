const login = (props) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    loginHandler,
    signupHandler,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <form action="">
      <h2>{hasAccount ? "Login" : "Sign up"}</h2>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <p>{emailError}</p>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <p>{passwordError}</p>
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button onClick={loginHandler}>Sign in</button>
            <p>
              Don't have an account?{" "}
              <span onClick={() => setHasAccount(false)}>Sign up</span>
            </p>
          </>
        ) : (
          <>
            <button onClick={signupHandler}>Sign up</button>
            <p>
              Have an account?{" "}
              <span onClick={() => setHasAccount(true)}>Sign in</span>
            </p>
          </>
        )}
      </div>
    </form>
  );
};

export default login;
