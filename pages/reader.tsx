import { NextPage } from "next";
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import Header from "../components/Header";

const Reader: NextPage = () => {
  const [data, setData] = useState("No result");
  return (
    <>
      <Header />
      <QrReader
        constraints={{
          aspectRatio: 1,
          width: 300,
          height: 300,
          facingMode: "environment",
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <p>{data}</p>
    </>
  );
};

export default Reader;
