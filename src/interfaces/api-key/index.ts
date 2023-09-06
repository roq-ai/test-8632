import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApiKeyInterface {
  id?: string;
  key_value: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ApiKeyGetQueryInterface extends GetQueryInterface {
  id?: string;
  key_value?: string;
  user_id?: string;
}
