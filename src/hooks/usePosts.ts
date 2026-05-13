import { useState, useEffect } from 'react';
import { Post } from '../types';
import { POSTS } from '../components/data';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setPosts(POSTS);
    setLoading(false);
  }, []);

  return { posts, loading };
};
