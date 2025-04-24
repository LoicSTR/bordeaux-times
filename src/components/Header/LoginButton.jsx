export default function LoginButton({ user, logout }) {
  return (
    <>
      {!user && (
        <div>
          <a href="/sign-up">Login</a>
        </div>
      )}
      {user && (
        <div>
          {user.firstName} {user.lastName}
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </>
  );
}
