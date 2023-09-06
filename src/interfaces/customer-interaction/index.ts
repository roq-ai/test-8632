import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInteractionInterface {
  id?: string;
  interaction_type: string;
  interaction_result: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerInteractionGetQueryInterface extends GetQueryInterface {
  id?: string;
  interaction_type?: string;
  interaction_result?: string;
  user_id?: string;
}
