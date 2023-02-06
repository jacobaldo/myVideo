export interface CategoryProps {
  onPressCat: (category: Category) => void;
  category: Category;
}
export interface Category {
  name: string;
  iconUrl: string;
}
