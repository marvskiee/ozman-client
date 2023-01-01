import React, { useEffect } from "react";
import Title from "../components/Title";
import { AiOutlineCloudServer } from "react-icons/ai";
import { RiDeviceRecoverLine, RiComputerLine } from "react-icons/ri";
import { BiSupport, BiNetworkChart, BiCctv } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { MdCable } from "react-icons/md";

const About = () => {
  const services = [
    {
      id: 1,
      icon: <AiOutlineCloudServer className="text-primary" size={45} />,
      title: "Cloud Solutions",
    },
    {
      id: 2,
      icon: <RiDeviceRecoverLine className="text-primary" size={45} />,
      title: "Data Recovery/Protection",
    },
    {
      id: 3,
      icon: <BiSupport className="text-primary" size={45} />,
      title: "On-site/Remote Support",
    },
    {
      id: 4,
      icon: <BiNetworkChart className="text-primary" size={45} />,
      title: "Networking Consultation",
    },
    {
      id: 5,
      icon: <FaRegBuilding className="text-primary" size={45} />,
      title: "Warehouse/Offices",
    },
    {
      id: 6,
      icon: <RiComputerLine className="text-primary" size={45} />,
      title: "Managed IT Services",
    },
    {
      id: 7,
      icon: <MdCable className="text-primary" size={45} />,
      title: "Structured Cabling Solutions",
    },
    {
      id: 8,
      icon: <BiCctv className="text-primary" size={45} />,
      title: "CCTV Installation",
    },
  ];

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="container py-12 px-4">
        <Title title="About Us" />
        <p className="py-5">
          Our target customers are those areas that internet providers like Converge and PLDT cannot reach. We also target
          the squatter’s area due to it’s overpopulation that we can turn into customers.
        </p>
      </section>

      <section className="bg-primary py-16 px-4 text-center">
        <section className="container">
          <h3 className="pb-3 text-2xl font-semibold text-white">Mission</h3>
          <p className="pb-5 text-gray-200">Provide quality internet connections to their customers</p>
        </section>

        <section className="container">
          <h3 className="pb-3 text-2xl font-semibold text-white">Company History</h3>
          <p className="mx-auto w-full text-gray-200 lg:w-2/3">
            Our company is located at the Samson road highway in Sangandaan, Caloocan City. It was built in 2018. Ever since
            the pandemic happened, we aim to improve our business to have a better transaction with our customers
          </p>
        </section>
      </section>

      <section className="container py-24 px-4">
        <h3 className="text-center text-2xl font-bold">Our Services</h3>

        <section className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.id} className="py-5">
              <figure className="flex justify-center sm:block">{service.icon}</figure>
              <h4 className="pt-3 text-center sm:text-left">{service.title}</h4>
            </article>
          ))}
        </section>
      </section>
    </>
  );
};

export default About;
