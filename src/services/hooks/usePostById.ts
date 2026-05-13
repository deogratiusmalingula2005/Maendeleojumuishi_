import { useState, useEffect } from 'react';
import { Post } from '../types';
import { POSTS } from '../data';

export const usePostById = (id?: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    
    // Find post from static data
    const foundPost = POSTS.find(p => p.id === id) || null;
    setPost(foundPost);
    setLoading(false);
  }, [id]);

  return { post, loading };
};
