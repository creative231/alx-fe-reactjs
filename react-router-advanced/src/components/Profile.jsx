// src/components/Profile.jsx
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details" style={{ marginRight: "1rem" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      <Outlet /> {/* For deeper nested routes */}
    </div>
  );
};

export default Profile;
