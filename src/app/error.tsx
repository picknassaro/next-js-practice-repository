"use client";

interface ErrorProps {
  error: Error;
}

const errorPage = ({error}: ErrorProps) => {
  console.log("Error", error);
  return <div>error</div>;
};

export default errorPage;
