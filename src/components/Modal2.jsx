import { AiOutlineClose } from "react-icons/ai";

const Modal2 = ({ open, close }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-200 bg-opacity-60">
      <aside
        onClick={(e) => e.stopPropagation()}
        className="m-10 rounded bg-white p-14 shadow-xl"
      >
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Privacy Policy</h2>
          <button onClick={close} className="rounded-full bg-primary p-1">
            <AiOutlineClose color="white" />
          </button>
        </header>
        <p className="h-96 overflow-y-scroll leading-7">
          Privacy Policy for AIO: Wireless Internet Service Provider
          <br />
          Privacy Policy
          <br />
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
          <br />
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
          <br />
          Interpretation and Definitions
          <br />
          Interpretation
          <br />
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
          <br />
          Definitions
          <br />
          For the purposes of this Privacy Policy:
          <br />
          1. Account means a unique account created for You to access our
          Service or parts of our Service.
          <br />
          2. Company (referred to as either "the Company", "We", "Us" or "Our"
          in this Agreement) refers to AIO: Wireless Internet Service Provider,
          Samson Road, Sangandaan, Caloocan.
          <br />
          3. Country refers to: Philippines
          <br />
          4. Device means any device that can access the Service such as a
          computer, a cellphone or a digital tablet.
          <br />
          5. Personal Data is any information that relates to an identified or
          identifiable individual.
          <br />
          6. Service refers to the Website.
          <br />
          7. Service Provider means any natural or legal person who processes
          the data on behalf of the Company. It refers to third-party companies
          or individuals employed by the Company to facilitate the Service, to
          provide the Service on behalf of the Company, to perform services
          related to the Service or to assist the Company in analyzing how the
          Service is used.
          <br />
          8. Usage Data refers to data collected automatically, either generated
          by the use of the Service or from the Service infrastructure itself
          (for example, the duration of a page visit).
          <br />
          9. Website refers to AIO: Wireless Internet Service Provider,
          accessible from https://aiointernet.online/
          <br />
          10. You means the individual accessing or using the Service, or the
          company, or other legal entity on behalf of which such individual is
          accessing or using the Service, as applicable.
          <br />
          Use of Your Personal Data
          <br />
          1. To provide and maintain our Service, including to monitor the usage
          of our Service.
          <br />
          2. To manage Your Account: to manage Your registration as a user of
          the Service. The Personal Data You provide can give You access to
          different functionalities of the Service that are available to You as
          a registered user.
          <br />
          3. For the performance of a contract: the development, compliance and
          undertaking of the purchase contract for the products, items or
          services You have purchased or of any other contract with Us through
          the Service.
          <br />
          4. To contact You: To contact You by email, telephone calls, SMS, or
          other equivalent forms of electronic communication, such as a mobile
          application's push notifications regarding updates or informative
          communications related to the functionalities, products or contracted
          services, including the security updates, when necessary or reasonable
          for their implementation.
          <br />
          5. To provide You with news, special offers and general information
          about other goods, services and events which we offer that are similar
          to those that you have already purchased or enquired about unless You
          have opted not to receive such information.
          <br />
          6. To manage Your requests: To attend and manage Your requests to Us.
          <br />
          7. For business transfers: We may use Your information to evaluate or
          conduct a merger, divestiture, restructuring, reorganization,
          dissolution, or other sale or transfer of some or all of Our assets,
          whether as a going concern or as part of bankruptcy, liquidation, or
          similar proceeding, in which Personal Data held by Us about our
          Service users is among the assets transferred.
          <br />
          8. For other purposes: We may use Your information for other purposes,
          such as data analysis, identifying usage trends, determining the
          effectiveness of our promotional campaigns and to evaluate and improve
          our Service, products, services, marketing and your experience.
          <br />
          Retention of Your Personal Data
          <br />
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.
          <br />
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
          <br />
          Transfer of Your Personal Data
          <br />
          Your information, including Personal Data, is processed at the
          Company's operating offices and in any other places where the parties
          involved in the processing are located. It means that this information
          may be transferred to ??? and maintained on ??? computers located outside
          of Your state, province, country or other governmental jurisdiction
          where the data protection laws may differ than those from Your
          jurisdiction.
          <br />
          Your consent to this Privacy Policy followed by Your submission of
          such information represents Your agreement to that transfer.
          <br />
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of Your data and other personal information.
          <br />
          Security of Your Personal Data
          <br />
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
          <br />
          Links to Other Websites
          <br />
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third party link, You will be directed to
          that third party's site. We strongly advise You to review the Privacy
          Policy of every site You visit.
          <br />
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
          <br />
          Contact Us
          <br />
          If you have any questions about this Privacy Policy, You can contact
          us:
          <br />
          By email: mark@aiowireless.ph
          <br />
          By phone number: 09478451828
          <br />
          By mail: Samson Road, Sangandaan, Caloocan
        </p>
      </aside>
    </div>
  );
};

export default Modal2;
