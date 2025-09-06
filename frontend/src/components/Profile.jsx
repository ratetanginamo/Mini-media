import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile({ user }) {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/${id}`);
        setProfile(res.data);
      } catch (err) {
        setError('Failed to load profile');
      }
    }
    fetchProfile();
  }, [id]);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!profile) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <img
        src={profile.profilePicture || 'https://via.placeholder.com/100'}
        alt={profile.username}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl text-center mb-2">{profile.username}</h2>
      <p className="text-center mb-4">{profile.bio || 'No bio available.'}</p>
      <div className="flex justify-around text-center">
        <div>
          <strong>{profile.followers.length}</strong>
          <p>Followers</p>
        </div>
        <div>
          <strong>{profile.following.length}</strong>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
}
