import ModalComponent from "../layout/ModalComponent";

function CookieModal({openModal, closeModal}: {
    openModal: boolean,
    closeModal: () => void
}) {

    return (<>
        <ModalComponent isOpen={openModal} onClose={closeModal}>
            <h2>Cookie</h2>

            <p>SJHBjh JH aklsfnljkasfl kj jk kj Kl</p>
        </ModalComponent>
    </>);
}

export default CookieModal;