import React, { useCallback, useEffect, useReducer, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { data } from "autoprefixer";
import { Link, useSearchParams } from "react-router-dom";
import BerandaView from "./BerandaView";

const nilaiDefault ={
  data:[],
  filterData:[],
  loading: true,
};

const reducer = (state, action) =>{
  switch (action.type){
    case "FETCH_BERHASIL":
      return{
        ...state,
        data:action.payload,
        filterData:action.payload,
        loading: false,
      };
    case "SET_FILTER":
      return{
        ...state,
        filterData:action.payload

      };
    default :
      throw new Error("eror di case")
  }
}


const Beranda = () => {

  const [state, dispatch] = useReducer(reducer, nilaiDefault);


  // const [resto, setResto] = useState();
  // const [hasilCari, setHasilCari] = useState();
  const ambilResto = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    // setResto(data);
    dispatch({type: "FETCH_BERHASIL", payload:data})
  };

  const [cari, setCari] = useSearchParams();
  const cariResto = cari.get("cariresto");

  const ubahCari = useCallback(async (input) => {
    setCari({ cariresto: input });
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/search?q=" + cariResto
    );
    const data = await response.data;
    // setHasilCari(data);
    dispatch({type: "SET_FILTER", payload: data});  
  },[cariResto])

  useEffect(() => {
    if (!cariResto) {
      ambilResto();
    } else {
      ubahCari(cariResto);
    }
  }, [cariResto]);

  const hasilFilter = cariResto ? state.filterData : state.data;

  console.log(state)
  return (
    <BerandaView
      cariResto={cariResto}
      hasilCari={state.filterData}
      hasilFilter={hasilFilter}
      ubahCari={ubahCari}
    />
  );
};

export default Beranda;
