import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function CardProduct({
  title,
  price,
  category,
  description,
  image,
  id,
}) {
  try {
    return (
      <Card className="py-4 border border-black">
        <CardBody className="overflow-visible py-2">
          <div className="flex justify-center p-4">
            <Image
              alt={title}
              className="object-contain h-[250px] rounded-xl "
              src={image}
              width={270}
            />
          </div>
          <CardHeader className="pb-0 pt-2 px-3 flex-col items-start">
            <h4 className="font-bold text-xl">{title}</h4>
            <p className="text-xs uppercase font-bold mt-2">{category}</p>
            <p className="text-xs uppercase mt-1 truncate">{description}</p>
            <small className="text-sm text-default-500 mt-1 truncate">
              {price}
            </small>
            <div className="card-actions w-full">
              <div className="flex justify-center p-3">
                <Link to={"/produk/" + id}>
                  <Button className="p-2 flex justify-center bg-black text-white">
                    Visit
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
        </CardBody>
      </Card>
    );
  } catch (error) {
    console.log(error);
  }
}
