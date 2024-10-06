import { Link } from "react-router-dom";
import CardProduct from "../../components/CardProduct";

export default function ProductView({ products }) {
  try {
    return (
      <div className="product-view dark:bg-slate-800"> 
      <div className="flex-col py-24">
        <div className="pb-24 title-text">
          <h2 className="text-3xl font-bold mb-4 text-center dark:text-white ">Produk</h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-7 p-6 dark:bg-black">
            {products?.map((product, index) => (
              <Link key={index} to={`/produk/${product.id}`}>
                <CardProduct
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
