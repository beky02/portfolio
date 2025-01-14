import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image, { StaticImageData } from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: React.ReactNode;
  images?: StaticImageData[];
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  images = [],
}: ModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalRoot = document.createElement("div");
    document.body.appendChild(modalRoot);
    setPortalRoot(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !portalRoot) return null;
  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "modal") {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div
      onClick={handleOutsideClick}
      id="modal"
      style={{
        position: "fixed",
        zIndex: "99999",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <div className="bg-background-100 flex items-center justify-center h-fit  width-fit"> */}
      <div id="innermodal" className="modal-container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <h2 className="text-xl font-semibold mb-4 text-[#ccd6f6]">{title}</h2>

          <button
            style={{
              top: "0.5rem",
              right: "0.5rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "#8892b0",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8892b0")}
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <p className="text-[#ccd6f6]">{description}</p>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {images.map((image, i) => (
            <div
              key={i}
              style={{ width: "520px", height: "500px", margin: "0.5rem" }}
            >
              <img
                src={image.src}
                style={{
                  cursor: "pointer",
                  borderRadius: "8px",
                  objectFit: "fill",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>,
    portalRoot
  );
}
