import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error('Failed to fetch posts', err);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl mb-6">Posts</h1>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map(post => (
        <div key={post._id} className="bg-white p-4 mb-4 rounded shadow">
          <div className="flex items-center mb-2">
            <img
              src={post.user.profilePicture || 'https://via.placeholder.com/40'}
              alt={post.user.username}
              className="w-10 h-10 rounded-full mr-3"
            />
            <Link to={`/profile/${post.user._id}`} className="font-semibold hover:underline">
              {post.user.username}
            </Link>
          </div>
          <p className="mb-2">{post.content}</p>
          {post.image && (
            <img src={`http://localhost:5000/uploads/${post.image}`} alt="Post" className="max-w-full rounded" />
          )}
          <div className="mt-2 text-sm text-gray-600">
            Likes: {post.likes.length} | Comments: {post.comments.length}
          </div>
        </div>
      ))}
    </div>
  );
              }
