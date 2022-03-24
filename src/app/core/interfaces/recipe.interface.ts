import { CookingDirection } from './cooking-directions.interface';
import { CookingTime } from './cooking-time.interface';
import { Ingredient } from './ingredient.interface';

export interface Recipe {
  title: string;
  description: string;
  cookingTime: CookingTime;
  directions: CookingDirection[];
  ingredients: Ingredient[];
  tags: string[];
}
