import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

const BerandaView = ({ ubahCari, cariResto, hasilCari, hasilFilter }) => {
  return (
    <div className="flex flex-col">
      <div className="grid justify-items-stretch pt-12 bg-white">
        <label className="input flex items-center gap-2 w-[500px] h-[40px]  justify-self-center rounded-lg border-2 border-gray-300 bg-white px-3 shadow-md focus-within:border-slate-950 focus-within:ring-2 focus-within:ring-offset-slate-900 transition-all duration-300 ease-in-out">
          <input
            type="text"
            className="grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
            placeholder="Search"
            onChange={(input) => ubahCari(input.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 text-gray-500 hover:text-gray-700 transition-colors duration-300 ease-in-out"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        {/* <div className="">
          <p>
            Hasil dari: {cariResto}, ditemukan: {hasilCari?.founded}
          </p>
        </div> */}
      </div>

      <div className="flex justify-center pt-12 bg-white">
        <div className="grid grid-cols-3 gap-12 pb-12 ">
          {hasilFilter?.restaurants?.map((data) => (
            <div
              className="card card-compact bg-base-100 w-96"
              key={data?.name}
            >
              <Card className="py-4 border border-black">
                <CardBody className="overflow-visible py-2">
                  <div className="flex justify-center p-4">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl "
                      src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
                      width={270}
                    />
                  </div>
                  <CardHeader className="pb-0 pt-2 px-3 flex-col items-start">
                    <p className="text-tiny uppercase font-bold p-3">
                      {data.name}
                    </p>
                    <small className="text-default-500 truncate p-3">
                      {data.description}
                    </small>
                    <div className="card-actions w-full">
                      <Link to={"/detail/" + data.id}>
                        <div className="flex justify-center p-3">
                          <Button
                            className="p-2 flex justify-center  bg-black text-white"
                            color="danger"
                          >
                            Visit
                          </Button>
                        </div>
                      </Link>
                    </div>
                  </CardHeader>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BerandaView;
