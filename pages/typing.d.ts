export interface Category {
  id: number;
  name: string;
  title: string;
}

export interface Tool {
  id: number;
  name: string;
  title: string;
  desc: string;
  icon: string;
  categoryId: number;
}
