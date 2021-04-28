
type ModalProps = {
  handleClose: () => void;
  show: boolean;
  children: any;
};
const Modal = (props: ModalProps) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">{props.children}</section>
    </div>
  );
};

export default Modal;
