"use client";
import { addCart } from "@/app/lib/userSlice";
import { ProductProps } from "@/types";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

interface ProductCardProps {
  products: ProductProps;
}

const ProductCard = ({ products }: ProductCardProps) => {
  const { title, price, image } = products;
 const router=useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addCart({
        id:products.id,
        productTitle: products.title,
        productImage: products.image,
        productPrice: products.price,
        quantity:1,
      })
    );
  };

  return (
    <div className="bg-slate-300 w-[300px] border-slate-400 shadow-sm rounded-md">
      <div onClick={()=>router.push(`/productdetail/${products.id}`)}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 h-14 overflow-hidden">{title}</h2>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-blue-500">{price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Add to Cartd
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
