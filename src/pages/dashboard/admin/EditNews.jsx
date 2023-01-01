import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance, delay } from "../../../config";
import toast, { Toaster } from "react-hot-toast";

const EditNews = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  const handleEditNews = async (e) => {
    e.preventDefault();
    console.log("should edit");
    const newsTitle = e.target.title.value;
    const newsDescription = e.target.description.value;
    try {
      const res = await axiosInstance.put("/api/news/update-news/" + data._id, {
        title: newsTitle,
        description: newsDescription,
      });
      toast.success("News Successfully Updated");
      await delay(3000);
      navigate(-1);
    } catch (err) {
      toast.error("Failed to Update News");
      console.log(err);
    }
  };

  return (
    <section>
      <h2 className="text-xl font-bold">Edit News</h2>
      <form className="my-10" onSubmit={handleEditNews}>
        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">News Title</label>
          <input
            type="text"
            className="rounded border-gray-400"
            id="title"
            defaultValue={data.title}
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">News Description</label>
          <textarea
            type="text"
            className="rounded border-gray-400"
            rows="5"
            id="description"
            defaultValue={data.description}
          />
        </div>

        {/* <div className="mb-6 flex flex-col">
          <label className="pb-1 text-sm font-semibold">Upload Image</label>
          <input type="file" />
        </div> */}

        <input
          type="submit"
          value="Publish"
          className="w-full cursor-pointer rounded bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primaryHover md:w-auto"
        />
      </form>
    </section>
  );
};

export default EditNews;
