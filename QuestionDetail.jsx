import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(`/questions/${id}`);
      setQuestion(res.data);
    };
    fetchData();
  }, [id]);

  if (!question) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{question.title}</h1>
      <p className="mb-4">{question.description}</p>
      <div className="text-sm text-gray-600">Tags: {question.tags?.join(', ')}</div>
    </div>
  );
}