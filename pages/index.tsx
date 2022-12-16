import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Camera, FACING_MODES } from "react-html5-camera-photo";

const Home: NextPage = () => {
  const [dataUri, setDataUri] = useState("");

  const handleTakePhoto = (dataUri: string) => {
    setDataUri(dataUri);
  };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Camera</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="text-[24px] font-mono font-extrabold">
          Lets take a photo!
        </div>
        {dataUri ? (
          <img src={dataUri} alt="Captured photo" />
        ) : (
          <Camera
            isFullscreen={true}
            idealFacingMode={FACING_MODES.ENVIRONMENT}
          />
        )}

<button onClick={handleTakePhoto} className="w-[4rem] h-[4rem] rounded-full object-cover bg-slate-400 absolute border bottom-60 border-5"></button>
      </div>
    </>
  );
};

export default Home;
