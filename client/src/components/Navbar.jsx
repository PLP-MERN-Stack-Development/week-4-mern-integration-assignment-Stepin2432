import { Link } from 'react-router-dom';

export default function Navbar() {
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <>
          <Link to="/create">New Post</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
