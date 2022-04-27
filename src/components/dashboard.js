import React from 'react';

const Dashboard = () => {
// get the user data from the session storage
const user = sessionStorage.getItem('user');
if (user) return JSON.parse(user);
else return null;

// handle click event of logout button
const handleLogout = () => {
    // remove the token and user from the session storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    props.history.push('/login');
  }

  return (
    <div>
      Welcome {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}


export default Dashboard;