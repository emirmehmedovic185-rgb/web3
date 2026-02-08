
export interface Car {
  id: string;
  name: string;
  model: string;
  year: number;
  engine: string;
  power: string;
  topSpeed: string;
  acceleration: string;
  description: string;
  imageUrl: string;
  glbUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Page {
  Home = 'home',
  About = 'about',
  Contact = 'contact'
}
