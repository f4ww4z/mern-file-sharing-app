import React, { FunctionComponent } from "react";
import Image from "next/image";

const DownloadFile: FunctionComponent<{
  downloadPageLink: string;
  format: string;
}> = ({ downloadPageLink, format }) => {
  return (
    <div className="p-1">
      <h1 className="my-2 text-lg font-medium">
        Loreum ipsunmasdf asdf asfask fasfd asdfas
      </h1>
      <div className="flex space-x-3">
        <span className="">{downloadPageLink}</span>
        <Image
          src={`/img/${format}.png`}
          alt="type image"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default DownloadFile;
