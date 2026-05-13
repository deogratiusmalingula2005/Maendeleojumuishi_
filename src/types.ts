export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  font: string;
  coverImage?: string;
  createdAt: string;
  date?: string;
  preview?: string;
  image?: string;
  tags?: string[];
  quiz?: QuizQuestion[];
  mediaLinks?: string[];
}

export interface Policy {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Strategy {
  id: string;
  title: string;
  description: string;
  number: string;
  color: string;
}

export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
}

export interface RecordItem {
  id: string;
  title: string;
  description: string;
  count: string;
  type: string;
}
