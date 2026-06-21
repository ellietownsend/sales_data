import {useActionState} from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Dashboard from '../routes/Dashboard';

const Signin = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const email = formData.get('email');
      const password = formData.get('password');

      const {
        success,
        data,
        error: signInError,
      } = await signInUser(email, password);

      if (signInError) {
        return new Error(signInError);
      }
      if (success && data?.session) {
        navigate('/dashboard');
        return null;
      }
      return null;
    }, null
  );

  return (
    <div className = "page">
      <div className = "auth-card">

        <div className="auth-left">
            <h1 className="auth-title">Sign in</h1>

    

            <form
            className="auth-form"
              action={submitAction}
              aria-label="Sign in form"
              aria-describedby="form-description"
            >
            <div id="form-description" className="sr-only">
            Use this form to sign in to your account. Enter your email and
            password.
            </div>

          <label htmlFor="email">Email</label>
          <input
            className="auth-input"
            type="email"
            name="email"
            id="email"
            placeholder=""
            required
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'signin-error' : undefined}
            disabled={isPending}
          />

          <label htmlFor="password">Password</label>
          <input
            className="auth-input"
            type="password"
            name="password"
            id="password"
            placeholder=""
            required
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'signin-error' : undefined}
            disabled={isPending}
          />

          <button
            type="submit"
            disabled={isPending}
            className="auth-button"
            aria-busy={isPending}
          >
            {isPending ? 'Signing in...' : 'Sign In'}
          </button>

           <p>
              Don't have an account yet?{' '}
              <Link className="auth-link" to="/signup">
                Sign up
              </Link>
            </p>

         {error && (
            <div
              id="signin-error"
              role="alert"
            >
              {error.message}
            </div>
          )}

          </form>
        </div>
        <div className="auth-right">
            <img src = "https://media.istockphoto.com/id/2172317014/photo/happy-hispanic-man-working-on-laptop-at-home.jpg?s=612x612&w=0&k=20&c=9evc002hmjsuha6TiO8OftVTuZIE71Hr3qhmq8vRRH0="
            className = "auth-image"
            />
          
        </div>

    </div>
</div>
  );
};

export default Signin;