import React from "react";

const ManagePlans = () => {
  const handleAddPlans = () => {};

  return (
    <section>
      <h2 className="text-xl font-bold">Manage Plans</h2>
      <form className="my-10" onClick={handleAddPlans}>
        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">Plan Title</label>
          <input type="email" className="rounded border-gray-400" />
        </div>

        <div className="mb-4 flex flex-col">
          <label className="pb-1 text-sm font-semibold">Plan Description</label>
          <input type="password" className="rounded border-gray-400" />
        </div>

        <input
          type="submit"
          value="Add"
          className="w-full cursor-pointer rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryHover md:w-auto"
        />
      </form>

      <section className="py-6">{/* Table here */}</section>
    </section>
  );
};

export default ManagePlans;
