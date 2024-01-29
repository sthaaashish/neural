import ProductCard from "@/components/ProductCard";

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Data not fetched");
  }

  const data = await res.json();

  return data;
};

const Page = async () => {
  const data = await getData();

  return (
    <>
      <div className="grid-column p-4 gap-4 space-y-4">
        {data.map((product: any) => (
          <div>
            <ProductCard key={product.id} products={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
