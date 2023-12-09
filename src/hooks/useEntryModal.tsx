import React from 'react';

const useEntryModal = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return {
    modalVisible,
    openModal,
    closeModal,
  };
};

export default useEntryModal;
