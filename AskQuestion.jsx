import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AskQuestion() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/questions', {
        title,
        description,
        tags: tags.split(',').map(t => t.trim()),
      });
      navigate('/');
    } catch (err) {
      alert('Error asking question');
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full h-32"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
}