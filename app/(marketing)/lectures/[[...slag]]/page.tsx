import React from "react";

const LecturesList = async ({
  params,
}: {
  params: Promise<{ slag: string[] }>;
}) => {
  const { slag } = await params;

  if (slag?.length === 2) {
    return <div>Lecture 2</div>;
  }

  if (slag?.length === 3) {
    return <div>Lecture 3</div>;
  }

  console.log(slag);
  return <div>LecturesList</div>;
};

export default LecturesList;
