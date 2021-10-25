import React, { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const DropZoneComponent: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile,
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, [setFile]);

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/jpeg,image/png,audio/mpeg",
  });

  return (
    <div className="w-full p-4">
      <div
        {...getRootProps()}
        className="w-full rounded-md cursor-pointer h-80 focus:outline-none"
      >
        <input {...getInputProps()} />
        <div
          className={
            "flex flex-col items-center justify-center w-full h-full text-center border-2 border-dashed rounded-xl " +
            (isDragReject === true ? "border-red-500" : "") +
            (isDragAccept === true ? "border-green-500" : "")
          }
        >
          <Image
            src="/img/folder.png"
            alt="folder icon"
            width="64"
            height="64"
          />

          <p>
            {isDragActive
              ? isDragReject
                ? "Sorry, this app only supports images and mp3"
                : "Drop a file here..."
              : "Drag & prop a file here, or click to select file"}
          </p>
          <p className="mt-2 text-base text-gray-300">
            Only jpeg, png & mp3 files supported
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;
