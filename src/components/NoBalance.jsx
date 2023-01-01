import NoBalanceIllustration from "../assets/no_balance.svg";

const NoBalance = () => {
  return (
    <section className="mt-20 text-center md:mt-12">
      <img src={NoBalanceIllustration} className="mx-auto w-52 md:w-64" alt="Pending" />
      <p className="mx-auto py-8 text-lg md:w-8/12 lg:w-1/2">You have no balance</p>
    </section>
  );
};

export default NoBalance;
