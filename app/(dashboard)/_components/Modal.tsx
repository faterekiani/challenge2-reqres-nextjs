import React from "react";
import { useClickOutside } from "../user/hooks/useClickOutside";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  const ref = useClickOutside(onClose);

  return (
    <div
      className={`fixed inset-0 w-full h-screen  bg-black/50 z-50 overflow-y-auto px-4 md:px-8 transition-all ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex items-center justify-center w-full h-full ">
        <div className="absolute max-w-[500px]" ref={ref}>
          <span
            className="absolute top-3 right-3 text-2xl cursor-pointer"
            onClick={onClose}
          >
            <X />
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
