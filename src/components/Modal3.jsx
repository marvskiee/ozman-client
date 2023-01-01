import { AiOutlineClose } from "react-icons/ai";
import NoBalanceIllustration from "../assets/qr.jpg";
const Modal3 = ({ open, close }) => {
 if (!open) return null;

 return (
  <div className="fixed inset-0  z-50 grid place-content-center bg-slate-200 bg-opacity-60">
   <aside onClick={(e) => e.stopPropagation()} className="m-10 w-[500px] rounded bg-white p-14 shadow-xl">
    <header className="mb-4 flex items-center justify-between">
     <h2 className="text-lg font-bold">AIO Gcash QR Code</h2>
     <button onClick={close} className="rounded-full bg-primary p-1">
      <AiOutlineClose color="white" />
     </button>
    </header>
    <div className="z-100 grid place-content-center p-10">
     <img src={NoBalanceIllustration} width="300" alt="" />
    </div>
   </aside>
  </div>
 );
};

export default Modal3;
