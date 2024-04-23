import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
    return (
        <div>
             <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Saikat'}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, magni. Facere atque est adipisci placeat consectetur ullam perferendis tempore, dolores blanditiis veniam fugit dicta, esse impedit obcaecati sint quibusdam! Perspiciatis.</p>
            </Modal>
        </div>
    );
};

export default AddTaskModal;