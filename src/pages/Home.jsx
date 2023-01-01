import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Wave from "../assets/wave.svg";
import MaintenanceImg from "../assets/images/map.jpg";
import PlansCard from "../components/PlansCard";

const Home = () => {
  const plans = [
    {
      id: 1,
      name: "Plan 999",
      speed: "10 Mbps",
      locked: "6 Months",
      benefits: [
        {
          id: 1,
          name: "₱2,500 Installation Fee",
        },
        {
          id: 2,
          name: "No Monthly Cap",
        },
        {
          id: 3,
          name: "Minimum Speed from 3mpbs up to 10mpbs",
        },
        {
          id: 4,
          name: "Free Router & Antenna",
        },
      ],
    },
    {
      id: 2,
      name: "Plan 1499",
      speed: "20 Mbps",
      locked: "6 Months",
      benefits: [
        {
          id: 1,
          name: "₱2,500 Installation Fee",
        },
        {
          id: 2,
          name: "No Monthly Cap",
        },
        {
          id: 3,
          name: "Minimum Speed from 10mpbs up to 20mpbs",
        },
        {
          id: 4,
          name: "Free Router & Antenna",
        },
      ],
    },
    {
      id: 3,
      name: "Plan 1699",
      speed: "30 Mbps",
      locked: "6 Months",
      benefits: [
        {
          id: 1,
          name: "₱2,500 Installation Fee",
        },
        {
          id: 2,
          name: "No Monthly Cap",
        },
        {
          id: 3,
          name: "Minimum Speed from 15mpbs up to 30mpbs",
        },
        {
          id: 4,
          name: "Free Router & Antenna",
        },
      ],
    },
  ];

  const scrollRef = useRef(null);

  const scrollToPlans = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero section */}
      <section className="relative">
        <div className="container min-h-screen px-4 pt-24">
          <h1 className="text-3xl font-bold md:w-2/3 lg:w-1/2 lg:text-4xl">
            Providing <span className="text-primary">High Quality</span> Wi-Fi
            Equipments and Services
          </h1>
          <p className="w-full py-4 md:w-3/5 lg:w-2/4">
            Hire us to provide you best in the industry Fibr Internet, WiFi
            Equipment, Automated Security, Structured Cabling and More.
          </p>
          <div className="flex flex-col space-y-2 text-center sm:flex-row md:space-y-0 md:space-x-2 md:text-left">
            <Link to="/apply" className="hero-cta-apply">
              Apply Now
            </Link>
            <button onClick={scrollToPlans} to="/" className="hero-cta-plans">
              View Plans
            </button>
          </div>
        </div>
        <img
          src={Wave}
          className="absolute bottom-0 hidden w-full lg:block"
          alt="Wave"
        />
      </section>

      {/* Maintenance section */}
      <section className="bg-primary">
        <div className="container flex flex-col items-center gap-x-8 px-4 py-16 lg:flex-row">
          <div className="flex-1">
            <h2 className="pb-3 text-2xl font-semibold text-white">
              Maintenance Announcement
            </h2>
            <p className="pb-5 text-gray-200 lg:pb-0">
              No maintenance as for today. Thank you for your patience.
            </p>
          </div>
          <div className="flex-1">
            <img src={MaintenanceImg} className="rounded" alt="Maintenance" />
          </div>
        </div>
      </section>

      {/* Plans section */}
      <section className="container min-h-screen px-4" ref={scrollRef}>
        <h2 className="pt-12 text-center text-2xl font-bold">
          See Our Unli Fiber Plans
        </h2>
        <p className="mx-auto w-full pt-4 text-center lg:w-2/3">
          We’ve got you covered with the reliable internet that’s right for your
          home. With our direct peering to the main Internet Providers here in
          the Philippines you are sure to enjoy fast internet and seamless
          connectivity.
        </p>
        <section className="my-10 grid grid-cols-1 gap-5 pb-10 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlansCard
              key={plan.id}
              name={plan.name}
              speed={plan.speed}
              locked={plan.locked}
              benefits={plan.benefits}
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default Home;
