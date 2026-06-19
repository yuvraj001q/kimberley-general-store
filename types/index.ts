export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  preOrderable: boolean;
}

export interface PreOrderItem {
  product: Product;
  quantity: number;
}

export interface PreOrder {
  id: string;
  userId: string;
  items: PreOrderItem[];
  pickupDate: string;
  pickupTime: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'ready' | 'completed';
}

export interface ArtisanApplication {
  name: string;
  businessName: string;
  category: string;
  description: string;
  website: string;
}
