import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl font-medium">Got a File? Share it like fake news</h1>
      <div className="flex flex-col items-center justify-center bg-gray-800 shadow-xl w-96 rounded-xl">
        {/* dropzone */}
        {/* render file */}
        {/* upload button */}
      </div>
    </div>
  );
};

export default Home;
