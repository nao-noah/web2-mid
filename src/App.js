import "./App.css";
import { useState } from "react";

function App() {
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);

  const addToCart = (itemNum) => {
    alert("Hey, you added the item to the cart");
    if (itemNum === 1) setItem1(item1 + 1);
    else if (itemNum === 2) setItem2(item2 + 1);
  };

  const checkout = () => {
    if (item1 + item2 === 0) {
      alert("Hey, You should select at least one");
      return;
    }

    const answer = window.confirm(
      `The total is $${item1 * 150 + item2 * 80}. You wanna really buy them?`
    );
    if (!answer) return;

    alert(`Thanks! See you next time at Amazon 3.`);
    setItem1(0);
    setItem2(0);
  };

  const removeItem = (itemNum) => {
    if (itemNum === 1) {
      if (item1 - 1 < 0) return;
      setItem1(item1 - 1);
    }
    if (itemNum === 2) {
      if (item2 - 1 < 0) return;
      setItem2(item2 - 1);
    }
  };

  return (
    <div className="App">
      <div class="title">AMAZON 2</div>

      <div class="cart">
        <div class="cart-title"></div>
        {
          <div>
            Brown Coat: {item1} - ${item1 * 150}
            {"   "}
            <button class="removebtn" onClick={() => removeItem(1)}>
              x
            </button>
          </div>
        }
        {
          <div>
            Blue Coat: {item2} - ${item2 * 80}
            {"   "}
            <button class="removebtn" onClick={() => removeItem(2)}>
              x
            </button>
          </div>
        }
        <button onClick={checkout}>Check Out</button>
      </div>

      <div class="item-list">
        <div class="item">
          <h1>Brown Coat</h1>
          <img class="item-image" src="/coatmain.png" alt="ZADORIN 2021 Coat" />
          <p class="S1">
            <b>
              ZADORIN 2021 Winter Warm Down Jacket Women Luxury Faux Fur <br />
              Collar White Duck Down Jacket Winter Down Coat With Hooded and
              Belt
            </b>
            <br />
            <div>$150</div>
            <button class="addtocart" id="add1" onClick={() => addToCart(1)}>
              Add to Cart
            </button>
            <br />
            <br />
            Style: Down coat + Faux Fur Collar Material: <br />
            White Duck Down Pocket: Two Pockets Belt: Have Belt Detachable: Hood
            & Sleeve parts
          </p>
        </div>

        <div class="item">
          <h1>Blue Coat</h1>
          <img
            class="item-image"
            src="/mainMenCoat.png"
            alt="casual winter Menswear"
          />
          <p class="S1">
            <b>
              ZADORIN 2021 Winter Warm Down Jacket Women Luxury Faux Fur <br />
              Collar White Duck Down Jacket Winter Down Coat With Hooded and
              Belt
            </b>
            <br />
            <div>$80</div>
            <button class="addtocart" id="add2" onClick={() => addToCart(2)}>
              Add to Cart
            </button>
            <br />
            <br />
            Style: Down coat + Faux Fur Collar Material: <br />
            White Duck Down Pocket: Two Pockets Belt: Have Belt Detachable: Hood
            & Sleeve parts
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
