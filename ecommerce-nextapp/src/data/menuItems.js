const menuItems = [
  {
    title: 'GENERAL',
    items: [
      {
        iconClass: 'pi pi-align-justify',
        label: 'Dashboard',
        route: '/',  
      }
    ]
  },
  {
    title: 'USER',
    items: [
      {
        iconClass: 'pi pi-shopping-bag',
        label: 'Show Products',
        route: '/products',  
      },
      {
        iconClass: 'pi pi-user',
        label: 'Sign Up',
        onClick: 'signUpModal',
        route: '/users',
      }
    ]
  }
];

export default menuItems;
