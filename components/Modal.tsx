import { ReactNode } from "react";
import { X } from "lucide-react";

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    children?: ReactNode;
}

const Modal: React.FC<modalProps> = ({ isOpen, onClose, title, children }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-1000 transition-all duration-300 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />

            <div
                className={`bg-white p-5 rounded-lg w-[500px] max-w-[90%] shadow-2xl z-10 
                transition-all duration-300 ease-out transform hover:scale-105
                ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-center items-center pb-2.5 relative">
                    <button
                        className="absolute left-0 top-0 text-black hover:opacity-70 transition-opacity"
                        onClick={onClose}
                    >
                        <X size={32} strokeWidth={3} />
                    </button>
                    <h2 className="text-xl font-bold">{title}</h2>
                </div>

                <div className="py-5 text-gray-600">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
