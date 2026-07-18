import React from "react";
import Link from "next/link";

const ProductsDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div>
      <h1>Products Details: {id}</h1>

      <ul className="flex justify-center items-center gap-5">
        <Link href={"/products/1/reviews"}>
          <li>Product 1</li>
        </Link>
        <Link href={"/products/2/reviews"}>
          <li>Product 2</li>
        </Link>
        <Link href={"/products/3/reviews"}>
          <li>Product 3</li>
        </Link>
        <Link href={"/products/4/reviews"}>
          <li>Product 4</li>
        </Link>
      </ul>
    </div>
  );
};

export default ProductsDetails;
