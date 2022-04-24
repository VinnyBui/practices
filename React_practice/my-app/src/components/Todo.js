import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props) {

  //modalIsOpen is the current state's snapshot ; modalIsOpen = false
  //setModalIsOpen is the function that allows you to change that value
  //Whenever you call this state changing function, React will re execute and re evaluate and update what is render on the screen
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler(){
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false)
  }

  //You can render by doing {modalIsOpen ? <Modal /> : null}
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalIsOpen && <Backdrop onClick={closeModal}/>}
    </div>
  );
}


export default Todo;
