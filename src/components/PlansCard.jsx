import React from "react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

const PlansCard = ({ name, speed, locked, benefits }) => {
  return (
    <article className="rounded bg-white px-8 pt-16 pb-10 shadow-lg">
      <p className="text-lg font-semibold">{name}</p>
      <h3 className="text-3xl font-bold text-primary">{speed}</h3>
      <p className="py-6 font-semibold">Locked-in period: {locked}</p>
      <ul className="space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit.id} className="flex items-center">
            <AiFillCheckCircle className="mr-2 text-primary" />
            {benefit.name}
          </li>
        ))}
      </ul>
      <footer className="mt-5 w-full">
        <Link to="/apply" className="subscribe-btn">
          Subscribe
        </Link>
      </footer>
    </article>
  );
};

export default PlansCard;
