import axios from 'axios';
import queryString from 'query-string';
import { CustomerInteractionInterface, CustomerInteractionGetQueryInterface } from 'interfaces/customer-interaction';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCustomerInteractions = async (
  query?: CustomerInteractionGetQueryInterface,
): Promise<PaginatedInterface<CustomerInteractionInterface>> => {
  const response = await axios.get('/api/customer-interactions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCustomerInteraction = async (customerInteraction: CustomerInteractionInterface) => {
  const response = await axios.post('/api/customer-interactions', customerInteraction);
  return response.data;
};

export const updateCustomerInteractionById = async (id: string, customerInteraction: CustomerInteractionInterface) => {
  const response = await axios.put(`/api/customer-interactions/${id}`, customerInteraction);
  return response.data;
};

export const getCustomerInteractionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/customer-interactions/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteCustomerInteractionById = async (id: string) => {
  const response = await axios.delete(`/api/customer-interactions/${id}`);
  return response.data;
};
