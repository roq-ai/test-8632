import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ChatGptPromptInterface {
  id?: string;
  prompt_text: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ChatGptPromptGetQueryInterface extends GetQueryInterface {
  id?: string;
  prompt_text?: string;
  user_id?: string;
}
