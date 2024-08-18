import React from "react";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 w-full h-screen flex justify-center items-center  bg-black/50 z-50 overflow-y-auto px-4 md:px-8 transition-all ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className="bg-white p-8 w-full max-w-[500px] rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end cursor-pointer" onClick={onClose}>
          <X />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
