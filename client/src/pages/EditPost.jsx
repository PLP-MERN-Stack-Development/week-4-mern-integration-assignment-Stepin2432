import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get('/api/posts/' + id).then(res => setPost(res.data));
  }, [id]);

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put('/api/posts/' + id, post, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    });
    alert('Post updated');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={post.title} onChange={handleChange} />
      <textarea name="content" value={post.content} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}
