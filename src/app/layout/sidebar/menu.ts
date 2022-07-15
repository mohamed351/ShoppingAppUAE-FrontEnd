import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'People',
    isTitle: true
  },
  {
    label: 'Customers',
    icon: 'mail',
    subItems: [
      {
        label: 'Customer-List',
        link: '/customers',
      },
      {
        label: 'Customer-Create',
        link: '/customers/create'
      },
    ]
  },
  {
    label: 'Suppliers',
    icon: 'mail',
    subItems: [
      {
        label: 'Supplier-List',
        link: '/suppliers',
      },
      {
        label: 'Supplier-Create',
        link: '/suppliers/create'
      },
    ]
  },
  {
    label: 'Product',
    isTitle: true
  },
  {
    label: 'Products',
    icon: 'mail',
    subItems: [
      {
        label: 'Product-List',
        link: '/products',
      }
   
    ]
  }


 
 
];
