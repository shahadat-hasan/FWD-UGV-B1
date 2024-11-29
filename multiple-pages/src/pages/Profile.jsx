import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-50">
      <h1 className="text-4xl font-bold text-purple-700">Profile Page</h1>
      <p className="mt-4 text-lg text-gray-600">User ID: {id}</p>
    </div>
  );
};

export default Profile;
