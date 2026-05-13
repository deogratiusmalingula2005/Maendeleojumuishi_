import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseService';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(isRegistering ? 'Failed to register.' : 'Failed to log in.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleAuth} className="p-6 bg-white rounded-lg shadow space-y-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">{isRegistering ? 'Admin Registration' : 'Admin Login'}</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-tz-green text-white p-2 w-full rounded hover:bg-tz-green/80">
        {isRegistering ? 'Register' : 'Login'}
      </button>
      <button type="button" onClick={() => setIsRegistering(!isRegistering)} className="text-sm text-tz-green hover:underline w-full">
        {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
      </button>
    </form>
  );
};
