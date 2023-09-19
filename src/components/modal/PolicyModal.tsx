import ModalComponent from "../layout/ModalComponent";

function PolicyModal({openModal, closeModal}: {
    openModal: boolean,
    closeModal: () => void
}) {

    return (<>
        <ModalComponent isOpen={openModal} onClose={closeModal}>
            <h2>Policy</h2>

            <p>SJHBjh JH aklsfnljkasfl kj jk kj Kl</p>
        </ModalComponent>
    </>);
}

export default PolicyModal;