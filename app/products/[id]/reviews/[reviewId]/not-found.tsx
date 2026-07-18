'use client'
import { usePathname } from "next/navigation";
import React from "react";

const ReviewNotFound = () => {
  const pathName = usePathname();

  const productsId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <div>
      Review Not found {reviewId} for product {productsId}
    </div>
  );
};

export default ReviewNotFound;
