import Link from "next/link";
import React from "react";

const Reviews = () => {
  return (
    <div>
      <h1>All Reviews</h1>

      <div className="flex gap-5">
        <Link href={"/products/1/reviews/1"}>Reviews: 1</Link>
        <Link href={"/products/2/reviews/2"}>Reviews: 2</Link>
        <Link href={"/products/3/reviews/3"}>Reviews: 3</Link>
        <Link href={"/products/4/reviews/4"}>Reviews: 4</Link>
      </div>
    </div>
  );
};

export default Reviews;
