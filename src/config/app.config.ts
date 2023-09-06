interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin User'],
  customerRoles: ['Customer'],
  tenantRoles: ['Admin User', 'Backend Developer', 'Frontend Developer'],
  tenantName: 'Organization',
  applicationName: 'test',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Interact with the chat gpt prompts.'],
  ownerAbilities: [
    'Manage Organization registration',
    "Manage Organization's details and settings",
    'Store and manage API key',
    'Invite and remove team members',
  ],
};
