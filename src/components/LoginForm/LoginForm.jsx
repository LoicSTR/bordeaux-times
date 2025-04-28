import "./LoginForm.css";

export default function LoginForm({ onSubmit, error, loading }) {
  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      username: e.target.username.value,
      password: e.target.password.value,
    });
    e.target.reset();
  };
  return (
    <form onSubmit={submit} className="login-form">
      <div className="input-container">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error : {error}</p>}
      <button type="submit" aria-label="Login">
        Log in
      </button>
    </form>
  );
}
