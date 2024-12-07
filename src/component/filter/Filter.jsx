import { Slider } from "@mui/material";
import React from "react";
import "./filter.css";

export const Filter = ({ dispatch, state }) => {
  return (
    <div className="filter-wrapper">
      <div className="filter-heading">
        <p className="filter">Filter</p>
        <button className="clear" onClick={() => dispatch({ type: "CLEAR_FILTER"})}>Clear</button>
      </div>

      <div className="sortedby-category">
        <p className="filter-subtitle">Sorted By </p>
        <ul>
          <li>
            <input
              type="radio"
              id="input6"
              checked={state.sortBy === "LOW_TO_HIGH"}
              onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
            />
            <label htmlFor="input6"> Low to High Price</label>
          </li>
          <li>
            <input
              type="radio"
              id="input7"
              checked={state.sortBy === "HIGH_TO_LOW"}
              onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
            />
            <label htmlFor="input7">High to Low Price</label>
          </li>
        </ul>
      </div>

      <div className="pricerange-category">
        <p className="filter-subtitle">Price Range </p>
        <ul>
          <li>
            <input type="range" />
          </li>
          <p className="range-input">range 500 to 10,000</p>
        </ul>
      </div>

      <div className="rating-category">
        <p className="filter-subtitle">Rating</p>
        <Slider
          aria-label="ratings"
          defaultValue={3}
          valueLabelDisplay="auto"
          marks
          min={1}
          step={1}
          max={5}
          onChange={(e) =>
            dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
          }
        />
      </div>

      <div className="shoetype-category">
        <p className="filter-subtitle">Shoe Category</p>
        <ul>
          <li>
            <input
              type="checkbox"
              id="input2"
              checked={state.Formal}
              onChange={() => dispatch({ type: "FORMAL_SHOE" })}
            />
            <label htmlFor="input2"> Formal Shoes</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="input1"
              checked={state.Sports}
              onChange={() => dispatch({ type: "SPORT_SHOE" })}
            />
            <label htmlFor="input1"> Sports Shoes</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="input3"
              checked={state.Sneaker}
              onChange={() => dispatch({ type: "SNEAKER_SHOE" })}
            />
            <label htmlFor="input3"> Sneakers Shoes</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="input4"
              checked={state.Casual}
              onChange={() => dispatch({ type: "CASUAL_SHOE" })}
            />
            <label htmlFor="input4"> Casual Shoes</label>
          </li>
        </ul>
      </div>

      <div className="shoetype-category">
        <p className="filter-subtitle">Brand</p>
        <ul>
          <li>
            <input
              type="checkbox"
              id="input-1"
              checked={state.nike}
              onChange={() => dispatch({ type: "NIKE_SHOE" })}
            />
            <label htmlFor="input-1"> NIKE</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="input-2"
              checked={state.puma}
              onChange={() => dispatch({ type: "PUMA_SHOE" })}
            />
            <label htmlFor="input-2"> PUMA</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="input-3"
              checked={state.aadi}
              onChange={() => dispatch({ type: "AADI_SHOE" })}
            />
            <label htmlFor="input-3"> AADI</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="input-4"
              checked={state.asian}
              onChange={() => dispatch({ type: "ASIAN_SHOE" })}
            />
            <label htmlFor="input-4"> ASIAN</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="input-5"
              checked={state.reebok}
              onChange={() => dispatch({ type: "REEBOK_SHOE" })}
            />
            <label htmlFor="input-5"> REEBOK</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="input-6"
              checked={state.braton}
              onChange={() => dispatch({ type: "BRATON_SHOE" })}
            />
            <label htmlFor="input-6"> BRATON</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="input-7"
              checked={state.sparky}
              onChange={() => dispatch({ type: "SPARKY_SHOE" })}
            />
            <label htmlFor="input-7"> SPARKY</label>
          </li>
        </ul>
      </div>
    </div>
  );
};
