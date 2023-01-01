import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config";
import Title from "../components/Title";
import ProjectImg from "../assets/images/project-placeholder-img.jpg";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
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
    <section className="container py-12 px-4">
      <Title title="News" />

      <section className="py-8">
        {news &&
          news.map((n) => (
            <div>
              <h2 className="pb-2 text-xl font-semibold">{n.title}</h2>
              <p className="leading-7">L{n.description}</p>
            </div>
          ))}
      </section>

      <section>
        <Title title="Projects" />

        <section className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
          {/* Loop projects data here */}
          <article>
            <img src={ProjectImg} alt="Project Title" />
            <footer className="py-5">
              <h3 className="text-lg font-semibold">Project Title</h3>
              <p className="pt-1 pb-4">Project short description</p>

              {/* Project link to facebook page post */}
              <Link to="/" className="read-more-btn">
                Read More
              </Link>
            </footer>
          </article>
        </section>
      </section>
    </section>
  );
};

export default News;
