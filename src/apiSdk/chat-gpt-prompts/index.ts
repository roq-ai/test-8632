import axios from 'axios';
import queryString from 'query-string';
import { ChatGptPromptInterface, ChatGptPromptGetQueryInterface } from 'interfaces/chat-gpt-prompt';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChatGptPrompts = async (
  query?: ChatGptPromptGetQueryInterface,
): Promise<PaginatedInterface<ChatGptPromptInterface>> => {
  const response = await axios.get('/api/chat-gpt-prompts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createChatGptPrompt = async (chatGptPrompt: ChatGptPromptInterface) => {
  const response = await axios.post('/api/chat-gpt-prompts', chatGptPrompt);
  return response.data;
};

export const updateChatGptPromptById = async (id: string, chatGptPrompt: ChatGptPromptInterface) => {
  const response = await axios.put(`/api/chat-gpt-prompts/${id}`, chatGptPrompt);
  return response.data;
};

export const getChatGptPromptById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/chat-gpt-prompts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChatGptPromptById = async (id: string) => {
  const response = await axios.delete(`/api/chat-gpt-prompts/${id}`);
  return response.data;
};
