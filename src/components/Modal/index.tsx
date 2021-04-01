import { useEffect, useState } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: () => void;
  isOpen: boolean;
}

export function Modal({ children, setIsOpen, isOpen }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(false);

  useEffect(() => {
    if (modalStatus !== isOpen) {
      setModalStatus(isOpen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
