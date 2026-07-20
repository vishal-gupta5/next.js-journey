import Link from "next/link";

import React from "react";


const Products = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div>
        <h1>Products</h1>
      </div>

      <ul className="flex justify-center items-center gap-5">
        <Link href={"/products/1"}>
          <li>Product 1</li>
        </Link>
        <Link href={"/products/2"}>
          <li>Product 2</li>
        </Link>
        <Link href={"/products/3"}>
          <li>Product 3</li>
        </Link>
        <Link href={"/products/4"}>
          <li>Product 4</li>
        </Link>
      </ul>
    </div>
  );
};

export default Products;
