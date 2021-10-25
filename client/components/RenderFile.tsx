import React, { FunctionComponent } from "react";
import { IFile } from "libs/types";
import Image from "next/image";
import { sizeInMb } from "libs/sizeInMb";

const RenderFile: FunctionComponent<{ file: IFile }> = ({
  file: { name, sizeInBytes, format },
}) => {
  return (
    <div className="flex items-center w-full p-4 my-2">
      <Image
        src={`/img/${format}.png`}
        alt="type image"
        width={32}
        height={32}
      />
      <span className="mx-2">{name}</span>
      <span className="ml-auto">{sizeInMb(sizeInBytes)}</span>
    </div>
  );
};

export default RenderFile;
