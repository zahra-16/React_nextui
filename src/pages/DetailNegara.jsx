import { Button } from "@nextui-org/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [negara, setNegara] = useState();
  const ambilNegara = async () => {
    const response = await axios.get(
      "https://freetestapi.com/api/v1/countries/" + id
    );
    const data = await response.data;
    setNegara(data);
  };

  useEffect(() => {
    // ambilData()
    ambilNegara();
  }, []);

  return (
    // <div>
    //   <img src={resto?.thumbnail} alt="" />
    //   <h1>{resto?.restaurant.name }</h1>
    // </div>
    <div className="hero bg-base-200 min-h-screen  bg-white dark:bg-slate-800">
      <div className="hero-content text-center space-y-8 flex-col">
        <div className="flex justify-center p-8 pt-13 pb-6">
          <img src={negara?.flag} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-5xl font-bold dark:text-white">{negara?.name}</h1>
          <div className="flex flex-col items-center justify-center">
            <p className="pt-8 max-w-[50rem] text-center dark:text-white">
              {negara?.currency}
            </p>
            <p className="pb-5 max-w-[50rem] text-center dark:text-white">
              {negara?.population}
            </p>
            <Link to="/negara" className="btn">
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
