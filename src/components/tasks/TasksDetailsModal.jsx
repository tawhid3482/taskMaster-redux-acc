import Modal from "../ui/Modal";

const TasksDetailsModal = ({isOpen, setIsOpen,task}) => {
    return <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
        {task?.description}
    </Modal>
};

export default TasksDetailsModal;