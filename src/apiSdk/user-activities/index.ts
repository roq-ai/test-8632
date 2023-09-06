import axios from 'axios';
import queryString from 'query-string';
import { UserActivityInterface, UserActivityGetQueryInterface } from 'interfaces/user-activity';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserActivities = async (
  query?: UserActivityGetQueryInterface,
): Promise<PaginatedInterface<UserActivityInterface>> => {
  const response = await axios.get('/api/user-activities', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createUserActivity = async (userActivity: UserActivityInterface) => {
  const response = await axios.post('/api/user-activities', userActivity);
  return response.data;
};

export const updateUserActivityById = async (id: string, userActivity: UserActivityInterface) => {
  const response = await axios.put(`/api/user-activities/${id}`, userActivity);
  return response.data;
};

export const getUserActivityById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-activities/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteUserActivityById = async (id: string) => {
  const response = await axios.delete(`/api/user-activities/${id}`);
  return response.data;
};
