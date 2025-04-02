import { type ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="absolute flex items-center justify-center h-screen">
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
