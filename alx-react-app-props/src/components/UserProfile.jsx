// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';

const UserProfile = (props) => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
      <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: '#fafafa' }}>
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
    </div>
  );
};

export default UserProfile;
