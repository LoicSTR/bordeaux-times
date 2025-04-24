export default function SignUpForm({ onSubmit }) {
  const submit = (e) => {
    e.preventDefault();
    onSubmit({
      username: e.target.username.value,
      password: e.target.password.value,
    });
    e.target.reset();
  };
  return (
    <form onSubmit={submit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button type="submit" aria-label="Login">
        Login
      </button>
    </form>
  );
}
