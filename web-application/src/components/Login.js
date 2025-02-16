import { signInWithGoogle } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/courses');
    } catch (error) {
      console.error('Error logging in with Google: ', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to Course Management</h2>
      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
}