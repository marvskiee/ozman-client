import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../config";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState();

  const handleAddNews = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    try {
      await axiosInstance.post("/api/news/add-news", {
        title,
        description,
      });
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditNews = (n) => {
    navigate(`/admin-dashboard/edit-news/${n._id}`, { state: n });
  };

  const handleDeleteNews = async (id) => {
    const res = await axiosInstance.delete("/api/news/delete-news/" + id, {
      id: id,
    });
    navigate(-1, {
      replace: true,
    });
  };

  useEffect(() => {
    setLoading(true);
    getAllNews();
  }, []);

  const getAllNews = async () => {
    await axiosInstance.get("/api/news/all-news").then((res) => {
      let allNews = res.data;
      setNews(allNews);
      setLoading(false);
    });
  };

  return (
    <section>
      <h2 className="text-xl font-bold">Add News</h2>
      <form className="my-10" onSubmit={handleAddNews}>
        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">News Title</label>
          <input type="text" className="rounded border-gray-400" id="title" />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">News Description</label>
          <textarea
            type="password"
            className="rounded border-gray-400"
            rows="5"
            id="description"
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

      <hr />

      <h2 className="pt-10 text-xl font-bold">Manage News</h2>
      <section className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {news &&
          news.map((n) => (
            <div
              className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100"
              key={n._id}
            >
              <header className="mb-3 flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                    Published
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    title="Edit News"
                    type="button"
                    onClick={() => handleEditNews(n)}
                  >
                    <AiFillEdit
                      size={20}
                      className="transition hover:text-primary"
                    />
                  </button>
                  <button
                    title="Delete News"
                    type="button"
                    onClick={() => handleDeleteNews(n._id)}
                  >
                    <AiFillDelete
                      size={20}
                      className="transition hover:text-red-500"
                    />
                  </button>
                </div>
              </header>
              <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
                {n.title}
              </h5>
              <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                {n.description}
              </p>
            </div>
          ))}
      </section>
    </section>
  );
};

export default News;
