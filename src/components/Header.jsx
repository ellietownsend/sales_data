import { useAuth } from '../context/AuthContext';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
  const { signOut, session, users } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const currentUser = users.find((user) => user.id === session?.user?.id);
  console.log(currentUser);

  const handleSignOut = async (e) => {
    e.preventDefault();

    const { success, error } = await signOut();
    if (success) {
      navigate("/signin");
    } else {
      setError(error.message);
    }
  };

  const accountTypeMap = {
    rep: 'Sales Rep',
    admin: 'Admin',
  };

  const displayAccountType = currentUser?.account_type
    ? accountTypeMap[currentUser.account_type]
    : '';

  return (
   <header className="dashboard-header" role="banner" aria-label="Dashboard header">
  <div className="dashboard-brand">
    <div className="dashboard-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" > <path d="M12 2v8M12 14v8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M2 12h8M14 12h8M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /> </svg>
      </div>

    <div>
      <h1>Sales Team Dashboard</h1>
      <p>Manage sales reps, customers, and performance</p>
    </div>
  </div>

  <div className="header-right">
    <div className="dashboard-user">
      <div className="avatar">
        {currentUser?.name
          ?.split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)}
      </div>

      <div className="user-details">
        <span className="user-name">
          {currentUser?.name.toUpperCase()}
        </span>
        <span className="user-role">{displayAccountType}</span>
      </div>
    </div>

    <button
      className="signout-btn"
      onClick={handleSignOut}
      aria-label="Sign out of your account"
    >
      Sign Out
    </button>
  </div>
</header>

  );
};

export default Header;