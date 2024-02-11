import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducers/FilterReducer'

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filter:{
      text: "",
    }
};

export const FilterContextProvider = ({ children }) => {

    const {products} = useProductContext();
    // console.log(products)

    const [state, dispatch] = useReducer(reducer, initialState);

    // set Grid view 

    const setGridView = () =>{
      return dispatch({type: "SET_GRIDVIEW"})
    };

    const setListView = () =>{
      return dispatch({type: "SET_LISTVIEW"})
    };

    //sorting function
    const sorting = (event) =>{
      let userValue = event.target.value;
      return dispatch({type: "GETSORT_VALUE", payload: userValue});
    }

    //update the filter values

    const updateFiltervalue = (event) =>{
      let name = event.target.name;
      let value = event.target.value;

      return dispatch({type: "UPDATE_FILTER_VALUE", payload:{name, value}})
    }

    useEffect(()=>{
      dispatch({type: "FILTER_PRODUCTS"})
      dispatch({type: "SORTING_PRODUCTS", payload: products});
    }, [products, state.sorting_value, state.filter]);

    useEffect(()=>{
      dispatch({type: "CARY_FILTER_PRODUCT", payload: products});
    }, [products])

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFiltervalue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () =>{
    return useContext(FilterContext);
}