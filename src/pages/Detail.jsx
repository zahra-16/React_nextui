import { Button } from "@nextui-org/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [resto, setResto] = useState();
  const ambilResto = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/detail/" + id
    );
    const data = await response.data;
    setResto(data);
  };

  useEffect(() => {
    // ambilData()
    ambilResto();
  }, []);

  return (
    // <div>
    //   <img src={resto?.thumbnail} alt="" />
    //   <h1>{resto?.restaurant.name }</h1>
    // </div>
    <div className="hero bg-base-200 min-h-screen  bg-red-50">
      <div className="hero-content text-center space-y-8 flex-col">
        <img
          src={`https://restaurant-api.dicoding.dev/images/large/${resto?.restaurant.pictureId}`}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{resto?.restaurant?.name}</h1>
          <p className="py-6 max-w-[50rem] text-justify">
            {resto?.restaurant?.description}
          </p>
          <Button className="btn btn-primary">Visit</Button>
        </div>
      </div>
    </div>
  );
}
