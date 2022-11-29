import "./App.css";
import { useState } from "react";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
const bakeryData = [
  {
    "name": "Chocolate Chip Cookies",
    "description": "Four classic chocolate chip cookies",
    "price": 7,
    "discount":true,
    "availible":false,
    "image": "images/anika.png"
    
  },
  {
    "name": "Matcha Mille Crepe Cake",
    "description": "Layers of matcha crepe and matcha cream filling, topped with strawberries",
    "price": 4,
    "discount":false,
    "availible":"false",
    "image": "images/aubrey.png"
  },
  {
    "name": "Egg Custard Bun",
    "description": "A fluffy steamed bun with a savory egg filling",
    "price": 2,
    "discount":false,
    "availible":true,
    "image": "images/connie.png"
  },
  {
    "name": "Steamed Taro Buns",
    "description": "Two soft steamed buns filled with gooey purple taro filling",
    "price": 5,
    "discount":true,
    "availible":true,
    "image": "images/dylan.png"
  },
  {
    "name": "Chocolate Fudge Brownie",
    "description": "A rich fudge brownie drizzled with chocolate ganache",
    "price": 3,
    "discount":true,
    "availible":true,
    "image": "images/isaac.png"
  },
  {
    "name": "Macarons",
    "description": "A box of three macarons in assorted flavors",
    "price": 4,
    "discount":true,
    "availible":true,
    "image": "images/jeff.png"
  },
  {
    "name": "Multigrain Bread",
    "description": "A loaf of fresh-baked multigrain bread",
    "price": 4,
    "discount":false,
    "availible":true,
    "image": "images/jenny.png"
  },
  {
    "name": "Croissant",
    "description": "A classic butter croissant with a flaky crust",
    "price": 2,
    "discount":true,
    "availible":false,
    "image": "images/jessie.png"
  },
  {
    "name": "Toast with Butter",
    "description": "A slice of toast with a pat of butter",
    "price": 1,
    "discount":true,
    "availible":false,
    "image": "images/kelly.png"
  },
  {
    "name": "Tiramisu",
    "description": "A classic tiramisu with layers of coffee-soaked ladyfingers and mascarpone cream",
    "price": 3.99,
    "discount":true,
    "availible":false,
    "image": "images/lauren.png"
  },
  {
    "name": "Egg Tart",
    "description": "A flaky pastry shell filled with a sweet egg custard",
    "price": 2,
    "discount":false,
    "availible":false,
    "image": "images/melissa.png"
  },
  {
    "name": "Everything Bagel",
    "description": "A toasted bagel with sesame seeds, poppy seeds, and dried onion",
    "price": 2,
    "discount":true,
    "availible":false,
    "image": "images/miku.png"
  }
]
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(bakeryData);
  function add(item) {
    
    const a = {...cart};
    if(item.name in a){
      a[item.name] = a[item.name]+1
    }
    else{
      a[item.name] = 1
    }

    setCart(a)
    setTotal(total + item.price)
  }
  function remove(item,v) {
    
    const a = {...cart};
    a[item] = a[item]-1
    var price = 0
    for (let i = 0; i < bakeryData.length; i++) {
      if(bakeryData[i].name === item){
        price = bakeryData[i].price
      }
    }
    setTotal(total - price)
    if(a[item] === 0){
      delete a[item]
    }
    setCart(a)
  }
  function sort() {
    
    const a = [...data];
    a.sort(function(a,b)
    {
      return a["price"] - b["price"];
    });
    
    setData(a)
  }
  function availible() {
    
    var a = [...data];
    a = a.filter(item => item.availible===true)
    console.log(a)
    setData(a)
  }
  function discount() {
    
    var a = [...data];
    a = a.filter(item => item.discount===true)
    
    setData(a)
  }
  function reset() {
    
 
    
    setData(bakeryData)
  }
  return (
    <div className="App">
      <div >
        <div className="item1">
      <h1>Zhanning Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <button onClick={() => sort()}>Sort by cheapest</button>
      <button onClick={() => discount()}>Show discount items</button>
      <button onClick={() => availible()}>Show avalible items</button>
      <button onClick={() => reset()}>Reset</button>
      </div>
    
        <div className = "Bakery">
        {data.map((item, index) => ( // TODO: map bakeryData to BakeryItem components

          <BakeryItem className = "BakeryItem" item = {item} add = {add}/> // replace with BakeryItem component
        ))}
        </div>
      </div>
      <div>
        <h2>Cart</h2>
        {Object.entries(cart).map(([k, v]) => {
     return <><p>{k} X{v}</p><button onClick={() => remove(k,v)}>remove</button></>
   })}
    <p>Total: ${total}</p>
      </div>
    </div>
  );
}

export default App;