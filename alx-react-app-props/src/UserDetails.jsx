import { useContext } from 'react';
import UserContext from './UserContext'; // ✅ Import the context

function UserDetails() {
  // ✅ Consume the context using useContext
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;