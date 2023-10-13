interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Course Coordinator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Faculty Member', 'Student', 'Course Coordinator'],
  tenantName: 'University',
  applicationName: 'Online Education Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View university information',
    'Edit personal information',
    'Manage bookings',
    'View user information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage university information',
    'Edit university description',
    'Edit university image',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/3ee70674-a8f3-4c58-80c9-5c024ae87795',
};
