import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
}

const ContactsAdmin: React.FC = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await axios.get<ContactSubmission[]>('http://localhost:8080/api/contact');
      setSubmissions(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching contact submissions:', err);
      setError('Failed to load contact submissions. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: number) => {
    try {
      await axios.put(`http://localhost:8080/api/contact/${id}/read`);
      fetchSubmissions();
    } catch (err) {
      console.error('Error marking submission as read:', err);
      setError('Failed to update submission status.');
    }
  };

  const deleteSubmission = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      try {
        await axios.delete(`http://localhost:8080/api/contact/${id}`);
        fetchSubmissions();
      } catch (err) {
        console.error('Error deleting submission:', err);
        setError('Failed to delete submission.');
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Submissions Admin</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <button 
        onClick={fetchSubmissions}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Refresh Submissions
      </button>
      
      {loading ? (
        <p>Loading submissions...</p>
      ) : submissions.length === 0 ? (
        <p>No contact submissions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Message</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.id} className={submission.read ? '' : 'bg-blue-50'}>
                  <td className="py-2 px-4 border-b">{submission.id}</td>
                  <td className="py-2 px-4 border-b">{submission.name}</td>
                  <td className="py-2 px-4 border-b">
                    <a href={`mailto:${submission.email}`} className="text-blue-500 hover:underline">
                      {submission.email}
                    </a>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="max-w-xs truncate">{submission.message}</div>
                  </td>
                  <td className="py-2 px-4 border-b">{formatDate(submission.createdAt)}</td>
                  <td className="py-2 px-4 border-b">
                    {submission.read ? 'Read' : 'Unread'}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {!submission.read && (
                      <button
                        onClick={() => markAsRead(submission.id)}
                        className="mr-2 bg-green-500 text-white py-1 px-2 rounded text-sm"
                      >
                        Mark as Read
                      </button>
                    )}
                    <button
                      onClick={() => deleteSubmission(submission.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactsAdmin; 