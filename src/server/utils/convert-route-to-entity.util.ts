const mapping: Record<string, string> = {
  'api-keys': 'api_key',
  'chat-gpt-prompts': 'chat_gpt_prompt',
  'customer-interactions': 'customer_interaction',
  organizations: 'organization',
  users: 'user',
  'user-activities': 'user_activity',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
