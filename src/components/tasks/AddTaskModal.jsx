import {  useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/task/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit,reset } = useForm();
  const dispatch = useDispatch()
  const onCancel = ()=>{
    reset()
    setIsOpen(false)
  }
  const onSubmit = (data) => {
    console.log(data)
    dispatch(addTask(data))
    onCancel()
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Your Tasks"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <label htmlFor="title">Title</label>
            <input
              className="w-full rounded-md"
              type="text"
              id="title"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <label htmlFor="description">Description</label>
            <input
              className="w-full rounded-md"
              type="text"
              id="description"
              {...register("description")}
            />
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <label htmlFor="date">Dateline</label>
            <input
              className="w-full rounded-md"
              type="date"
              id="date"
              {...register("date")}
            />
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <label htmlFor="assignTo">Assign to</label>
            <select
              className="w-full rounded-md"
              id="assignTo"
              {...register("assignTo")}
            >
              <option value="Saikat">Saikat</option>
              <option value="tawhid">tawhid</option>
              <option value="islam">islam</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <label htmlFor="priority">Priority </label>
            <select
              className="w-full rounded-md"
              id="priority"
              {...register("priority")}
            >
              <option value="High">High</option>
              <option value="medium">medium</option>
              <option value="low">low</option>
            </select>
          </div>
          <div className="flex justify-end gap-4 my-5">
            <button onClick={()=>onCancel()} type="submit" className="btn btn-danger">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
