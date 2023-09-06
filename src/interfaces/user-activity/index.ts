import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface UserActivityInterface {
  id?: string;
  activity_type: string;
  activity_result: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface UserActivityGetQueryInterface extends GetQueryInterface {
  id?: string;
  activity_type?: string;
  activity_result?: string;
  user_id?: string;
}
