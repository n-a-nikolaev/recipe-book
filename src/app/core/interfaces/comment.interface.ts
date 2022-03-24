import { User } from './user.interface';

export interface Comment {
  createdAt: string;
  updatedAt: string;
  body: string;
  author: User;
}
