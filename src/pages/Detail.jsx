import { Button } from "@nextui-org/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    <div className="hero bg-base-200 min-h-screen bg-white dark:bg-gray-800">
      <div className="hero-content text-center space-y-8 flex-col">
        <div className="flex justify-center p-7 pt-6 pb-4">
          <img
            src={`https://restaurant-api.dicoding.dev/images/large/${resto?.restaurant.pictureId}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{resto?.restaurant?.name}</h1>
          <div className="flex justify-center">
            <p className="py-6 max-w-[50rem] text-justify mx-auto">
              {resto?.restaurant?.description}
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/" className="btn">
              <Button
                className="p-2 flex justify-center bg-black text-white"
                color="danger"
              >
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
