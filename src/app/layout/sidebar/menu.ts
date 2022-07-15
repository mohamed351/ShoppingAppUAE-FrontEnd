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
  },
  {
    label: 'Invoices',
    isTitle: true
  },
  {
    label: 'Offline-Invoice',
    icon: 'mail',
    subItems: [
      {
        label: 'Invoice-List',
        link: '/offline-invoices',
      },
      {
        label: 'Create Invoice',
        link: '/offline-invoices/create',
      }

    ]
  }




];
