
export type Category = 'all' | 'film' | 'prod';

export interface Project {
  id: string;
  title: string;
  genre: string;
  description: string;
  category: Category;
  imageUrl: string;
}

export interface Credit {
  year: number;
  role: string;
  project: string;
}
