import { ReactNode } from "react";
import { X } from "lucide-react";

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: ReactNode;
    children?: ReactNode;
}

const Modal: React.FC<modalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-1000"
            onClick={onClose}
        >
            <div
                className="bg-white p-5 rounded-lg w-[600px] max-w-[90%] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-center items-center pb-2.5 relative">
                    <button
                        className="absolute left-8 top-3 text-black hover:opacity-70 transition-opacity"
                        onClick={onClose}
                    >
                        <X size={32} strokeWidth={3} />
                    </button>
                    {title}
                </div>

                <div className="py-5 text-gray-600">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
