import PendingIllustration from "../assets/pending_illustration.svg";

const Pending = () => {
  return (
    <section className="mt-20 text-center md:mt-12">
      <img src={PendingIllustration} className="mx-auto w-52 md:w-64" alt="Pending" />
      <p className="mx-auto py-8 text-lg md:w-8/12 lg:w-1/2">
        Your application is still undergoing review. You will receive a text message once your application has been approved.
      </p>
    </section>
  );
};

export default Pending;
