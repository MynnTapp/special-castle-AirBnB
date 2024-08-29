import { useModal } from "../../context/Modal";
import "./OpenModal.css";

export default function OpenModal({
   modalComponent,
   itemText,
   buttonText,
   onItemClick,
   onButtonClick,
   onModalClose,
}) {
   const { setModalContent, setOnModalClose } = useModal();

   const handleClick = () => {
      if (onModalClose) setOnModalClose(onModalClose);
      setModalContent(modalComponent);
      if (typeof onButtonClick === "function") onButtonClick();
      if (typeof onItemClick === "function") onItemClick();
   };

   return !itemText ? (
      <button onClick={handleClick}>{buttonText}</button>
   ) : (
      <li onClick={handleClick}>{itemText}</li>
   );
}
