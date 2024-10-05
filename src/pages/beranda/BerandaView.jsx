import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

const BerandaView = ({ ubahCari, cariResto, hasilCari, hasilFilter }) => {
  return (
    <div className="flex flex-col ">
      <div className="grid justify-items-stretch pt-12 bg-red-50">
        <label className="input input-bordered flex items-center gap-2 justify-self-center w-[500px]">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(input) => ubahCari(input.target.value)}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
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

      <div className="flex justify-center pt-12 bg-red-50">
        <div className="grid grid-cols-3 gap-12 pb-12 ">
          {hasilFilter?.restaurants?.map((data) => (
            <div
              className="card card-compact bg-base-100 w-96 shadow-xl dark:bg-rose-900 dark:text-white"
              key={data?.name}
            >
              <Card className="py-4">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`}
                    width={270}
                  />
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{data.name}</p>
                    <small className="text-default-500">
                      {data.description}
                    </small>
                    <div className="card-actions justify-end">
                      <Link to={"/detail/" + data.id}>
                        <Button className="p-2 flex justify-center" color="danger" >
                          Visit
                        </Button>
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
