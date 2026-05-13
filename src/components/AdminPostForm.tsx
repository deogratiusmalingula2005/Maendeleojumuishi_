import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from '../services/firebaseService';
import ReactMarkdown from 'react-markdown';

export const AdminPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Sera na Hoja');
  const [font, setFont] = useState('font-sans');
  const [image, setImage] = useState<File | null>(null);
  const [isPreview, setIsPreview] = useState(false);

  const uploadContentImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const storageRef = ref(storage, `content/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setContent(prev => prev + `\n\n![Picha](${url})\n\n`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return alert('Not logged in. You need to be logged in to post.');
    
    let imageUrl = '';
    if (image) {
      const storageRef = ref(storage, `posts/${Date.now()}_${image.name}`);
      await uploadBytes(storageRef, image);
      imageUrl = await getDownloadURL(storageRef);
    }
    
    try {
      await addDoc(collection(db, 'posts'), {
        title,
        content,
        author: auth.currentUser.email,
        category,
        font,
        coverImage: imageUrl,
        createdAt: new Date().toISOString()
      });
      alert('Post saved successfully!');
      setTitle('');
      setContent('');
      setImage(null);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('Error saving post. Check console for details.');
    }
  };

  const categories = ['Kisiasa', 'Kijamii', 'Sera na Hoja', 'Hotuba', 'Mikakati', 'Videos', 'Miradi ya Jamii', 'Maktaba', 'CCM', 'Mawasiliano', 'Mengineyo'];

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{isPreview ? 'Preview' : 'Edit Post'}</h3>
        <button type="button" onClick={() => setIsPreview(!isPreview)} className="text-sm bg-gray-200 px-3 py-1 rounded">
          {isPreview ? 'Back to Edit' : 'Preview'}
        </button>
      </div>
      
      {isPreview ? (
        <div className={`p-4 border rounded ${font}`}>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="prose">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded" required />
          
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded">
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <select value={font} onChange={(e) => setFont(e.target.value)} className="w-full p-2 border rounded">
            <option value="font-sans">Sans Serif (Inter)</option>
            <option value="font-serif">Serif (Playfair Display)</option>
            <option value="font-mono">Mono (JetBrains Mono)</option>
          </select>

          <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} className="w-full p-2 border rounded" />
          
          <label className="block text-sm font-medium text-gray-700">Ongeza Picha kwenye Makala:</label>
          <input type="file" onChange={uploadContentImage} className="w-full p-2 border rounded" />

          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="w-full p-2 border rounded h-60" required />
          <button type="submit" className="bg-tz-green text-white p-2 w-full rounded hover:bg-tz-green/80">Save Post</button>
        </div>
      )}
    </form>
  );
};
