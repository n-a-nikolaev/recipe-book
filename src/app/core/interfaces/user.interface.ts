import { Theme } from '../enums/theme.enum';
import { Recipe } from './recipe.interface';

export interface User {
  uid: string;
  email: string;
  username: string;
  image: string;
  theme: Theme;
  favorites: Recipe[];
}
