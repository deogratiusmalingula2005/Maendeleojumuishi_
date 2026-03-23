export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  preview: string;
  content: string;
  image?: string;
  tags: string[];
  author?: string;
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
