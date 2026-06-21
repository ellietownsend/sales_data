import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useActionState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { signUpNewUser } = useAuth();
  const navigate = useNavigate();

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
       email = formData.get('email');
       password = formData.get('password');
       name = formData.get('name'),
       accountType = formData.get('account-type')

      const {
        success,
        data,
        error: signUpError,
      } = await signUpNewUser(email, password, name, accountType);

      if (signUpError) {
        return new Error(signUpError);
      }
      if (success && data?.session) {
        navigate('/dashboard');
        return null;
      }
      return null;
    },
    null
  );

  return (
    <div className="page">
      <div className="auth-card">
         <div className="auth-left">
          <h1 className="auth-title">Create your account</h1>
          

          <div id="form-description" className="sr-only">
            Start tracking sales activity and managing your team in one place.
            </div>
          <form 
            className="auth-form" 
            action={submitAction} 
            aria-label="Sign up form" 
            aria-describedby="form-description" 
            >
              <div 
                id="form-description" 
                className="sr-only"> 
                Use this form to create a new account. Enter your email and password.
              </div>
            
            <label htmlFor="name">
              Name
            </label>


          <input 
            className="auth-input" 
            type="text" 
            name="name" 
            id="name" 
            placeholder=""
            required 
            disabled={isPending} 
            aria-required="true" 
            aria-invalid={error ? 'true' : 'false'} 
            aria-describedby={error ? 'signup-error' : undefined} 
          />

          <label 
            htmlFor="email">
                Email
          </label> 
          <input 
            className="auth-input" 
            type="email" 
            name="email" 
            id="email" 
            required 
            disabled={isPending} aria-required="true" 
            aria-invalid={error ? 'true' : 'false'} 
            aria-describedby={error ? 'signup-error' : undefined} 
          />

          <label 
            htmlFor="password">
              Password
          </label> 
          <input 
            className="auth-input" 
            type="password" 
            name="password" 
            id="password" 
            required disabled={isPending} 
            aria-required="true" 
            aria-invalid={error ? 'true' : 'false'} 
            aria-describedby={error ? 'signup-error' : undefined} 
          />

         <fieldset className="account-type-section">
  <legend>Account Type</legend>

  <div className="radio-group">
    <label className="role-option">
      <input
        type="radio"
        name="account-type"
        value="admin"
        required
      />
      <span>Admin</span>
    </label>

    <label className="role-option">
      <input
        type="radio"
        name="account-type"
        value="rep"
        required
      />
      <span>Sales Rep</span>
    </label>
  </div>
</fieldset>

          <button
            type="submit"
            className="auth-button"
            disabled={isPending}
            aria-busy={isPending}
          >
            {isPending ? 'Signing up...' : 'Sign Up'}
          </button>

           <p>
            Already have an account?{' '}
            <Link className="form-link" to="/">
              Sign in
            </Link>
          </p>

          {error && (
            <div id="signup-error" role="alert" className="sign-form-error-message">
              {error.message}
            </div>
          )}
            </form>
        </div>

        <div className="auth-right"> 
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
          alt="Team collaborating" 
          className="auth-image" 
        />
        </div>

      </div>
    </div>
  );
};

export default Signup;
