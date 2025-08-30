import './App.css';
import { useState } from 'react';
import {tvSold} from "./helpers/tvSold.js";
import {inventoryHistory} from "./helpers/inventoryHistory.js";
import {stockLeft} from "./helpers/stockLeft.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {availableSizes} from "./helpers/availableSizes.js";
import {nameFormat} from "./helpers/nameFormat.js";
import {currencyFormat} from "./helpers/currencyFormat.js";
import {soldOut, findTv, sportTv, largeTv, allTvs, ambiLight} from "./helpers/helpers.js";

sportTv(inventory);



function App() {


  let inventoryState = useState([]);

  inventoryState = [...inventory];

  largeTv(inventory);

  allTvs(inventory);

  function mostSold() {
    inventory.sort((a, b) => {
      return b.sold - a.sold;
    });

    console.log(inventory);
  }

  function cheapestFirst() {
    inventory.sort((a,b)=> {
      return a.price - b.price;
    });

    console.log(inventory);
  }

  function sportTv() {

    inventory.sort((a,b)=> {
      return b.refreshRate - a.refreshRate;
    });

    console.log(inventory);
  }

  soldOut(inventory);

  ambiLight(inventory);

  findTv(inventory, 'NH3216SMART');



  return (
      <>
        <div className='container'>
          <div>Aantal verkochte producten: {tvSold()}</div>
          <div>Aantal ingekochte producten: {inventoryHistory()}</div>
          <div>Aantal verkochte producten: {stockLeft()}</div>
          <div className='card'>
            <div>
              <img src={bestSellingTv.sourceImg} />
            </div>
            <div>
              <h1>{nameFormat(bestSellingTv)}</h1>
              <h2>{currencyFormat(bestSellingTv.price)}</h2>
              <p>{availableSizes(bestSellingTv)}</p>
            </div>
          </div>

          <div>
            <button type='button' onClick={mostSold}>Meest verkocht eerst</button>
            <button type='button' onClick={cheapestFirst}>Goedkoopste eerst</button>
            <button type='button' onClick={sportTv}>Meest geschikt voor sport eerst</button>
          </div>
          {/*<div>*/}
          {/*  alle tvs*/}
          {/*  <ul>*/}
          {/*    {inventory.map((tv)=> {*/}
          {/*      return <li key={tv.type}>{tv.type}</li>;*/}
          {/*    })}*/}
          {/*  </ul>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  brand tvs*/}
          {/*  <ul>*/}
          {/*    {inventory.map((tv)=> {*/}
          {/*      return <li key={tv.brand}>{tv.brand}</li>;*/}
          {/*    })}*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>

        <h2>Alle tv's</h2>

        <div>
          {inventoryState.map((tv)=> {
            return [ <div key={tv.type} className='card flexBox'>
              <div>
                <img src={tv.sourceImg} />
              </div>
              <div>
                <h1>{nameFormat(tv)}</h1>
                <h2>{currencyFormat(tv.price)}</h2>
                <p>{availableSizes(tv)}</p>
                <div className='flexBox'>{tv.options.map((option)=> <span className='cardIcon' key={option.name}><img key={option.name} className='icon' src={option.applicable? './src/assets/check.png' : './src/assets/minus.png'}/>{option.name}</span>)}</div>
              </div>
              {tv.originalStock === tv.sold && <img src='./src/assets/out-of-stock.png' />}
            </div>]
            })
          }
        </div>
      </>
  )
}

export default App
