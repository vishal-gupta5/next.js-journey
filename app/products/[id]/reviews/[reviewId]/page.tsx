
import { notFound } from "next/navigation";
import React from "react";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ id: string; reviewId: string }>;
}) => {
  const { id, reviewId } = await params;

  if (reviewId > '10') {
    notFound();
  }

  return (
    <div>
      <h1>Product: {id}</h1>
      <h2>Review Details: {reviewId}</h2>
    </div>
  );
};

export default ReviewDetails;
