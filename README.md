# Development

### Link to Deployed Website
If you used the stencil code, this is `https://zhanninglu.github.io/react-stencil`

### Goal and Value of the Application
My goal it to create a simple interface for bakery customers enabling them to add/remove and browse items.
### Usability Principles Considered
I keep everything in the same page and making cart always visible on the side so it maximize the efficency of the page.
### Organization of Components
Two component: main component and Bakeryitem component. Main component describes layout and cart where Bakeryitem will be reference by main component each represents a item.
### How Data is Passed Down Through Components
main component will pass item data, add function to Bakeryitem component enabling each item to show data and execute "add to cart"
### How the User Triggers State Changes
I managed item data by "data" state. When users click on filter/sort/reset buttons, I will change the state accordingly. I managed cart data by "cart" state and total price by "total" state, when users click remove/add I will change the state accordingly. 

