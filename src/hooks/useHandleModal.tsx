import { useState } from "react";

export const useHandleModal = (openStatus: boolean) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(openStatus);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};
