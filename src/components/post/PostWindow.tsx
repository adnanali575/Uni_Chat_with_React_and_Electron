import FileUploader from "./FileUplader";

const PostWindow = () => {
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl text-text-gray">
          Create post
        </h1>
        <textarea
          placeholder="Write post description here..."
          className="resize-none outline-none p-2 my-4 min-h-[150px] w-full border border-gray-1 rounded-md focus:border-green-1 transition-default "
        ></textarea>
        <FileUploader />
      </div>
    </>
  );
};

export default PostWindow;
