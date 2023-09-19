import ModalComponent from "../layout/ModalComponent";

function TermsModal({openModal, closeModal}: {
    openModal: boolean,
    closeModal: () => void
}) {

    return (<>
        <ModalComponent isOpen={openModal} onClose={closeModal}>
            <h2>Test</h2>

            <p>SJHBjh JH jh kj jk kj Kl</p>
        </ModalComponent>
    </>);
}

export default TermsModal;