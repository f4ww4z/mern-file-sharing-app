import DownloadFile from "@components/DownloadFile";
import DropZoneComponent from "@components/DropZoneComponent";
import RenderFile from "@components/RenderFile";
import axios from "axios";
import { IFile } from "libs/types";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [file, setFile] = useState(null);
  const [id, setId] = useState(null);
  const [downloadPageLink, setDownloadPageLink] = useState("");
  const [uploadState, setUploadState] = useState<
    "Uploading" | "Upload Failed" | "Uploaded" | "Upload"
  >("Upload");
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (uploadState === "Uploading") return;

    setError("");
    setUploadState("Uploading");

    const formData = new FormData();
    formData.append("myFile", file);

    try {
      const { data } = await axios({
        method: "POST",
        data: formData,
        url: "api/files/upload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setId(data.id);
      setDownloadPageLink(data.download_link);

      setUploadState("Uploaded");
    } catch (error) {
      console.log(error.response.data);
      setUploadState("Upload Failed");
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1 className="my-4 text-3xl font-medium">
        Got a File? Share it like fake news
      </h1>
      <div className="flex flex-col items-center justify-center bg-gray-800 shadow-xl w-96 rounded-xl">
        {/* dropzone */}
        {!downloadPageLink && <DropZoneComponent setFile={setFile} />}
        {/* render file */}
        {file && (
          <RenderFile
            file={{
              format: file.type.split("/")[1],
              name: file.name,
              sizeInBytes: file.size,
            }}
          />
        )}
        {/* error message */}
        <p className="text-center text-red-600">{error}</p>
        {/* upload button */}
        <button
          onClick={handleUpload}
          disabled={uploadState === "Uploading"}
          className="p-2 my-5 bg-gray-900 rounded-md w-44 focus:outline-none hover:bg-gray-600"
        >
          {uploadState}
        </button>

        {downloadPageLink && (
          <DownloadFile
            downloadPageLink={downloadPageLink}
            format={file.format}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
