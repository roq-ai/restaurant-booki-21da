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
  ownerRoles: ['Restaurant Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menus', 'Make a reservation', 'Place an order'],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage menus',
    'Manage reservations',
    'Manage tables',
    'Manage orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6f376877-58f5-4fb5-bffa-aa9b2619b9e6',
};
