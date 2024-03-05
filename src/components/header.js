import * as React from "react"
import { Link } from "gatsby"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./style/layout.css"
import { CSSTransition } from 'react-transition-group';

const Header = () => {
  const [modal, setModal] = React.useState(false); // Correctly defined modal state with useState

  // Correctly defined toggle function for functional component
  const toggle = () => setModal(!modal); 

  return (
    <header className="NavBar-sec">
      <div className="NavBar-container">
        <div className="NavBar-logo">
          <img src="/Frame 2.svg"/>
        </div>
        <div className="NavBar-Links link-pc">
          <Link to="../../../">home</Link>
          <Link to="/Projects">projects</Link>
          <Link to="/AboutUs">about us</Link>
          <Link to="/ContactUs">contact us</Link>
        </div>
        <div></div>
        <div className='mobile-menu'>
          <Button color="danger" onClick={toggle}> {/* Use toggle without this */}
            <img src='/menu.svg'/>
          </Button>
          <CSSTransition
            in={modal} // Use modal without this
            timeout={300}
            classNames="modal"
            unmountOnExit
          >
            <Modal isOpen={modal} toggle={toggle} fullscreen> {/* Use modal and toggle without this */}
              <ModalHeader toggle={toggle}></ModalHeader> {/* Use toggle without this */}
              <ModalBody>
                <div className="NavBar-Links">
                  <Link to="../../../">home</Link>
                  <Link to="/Projects">projects</Link>
                  <Link to="/AboutUs">about us</Link>
                  <Link to="/ContactUs">contact us</Link>
                </div>
              </ModalBody>
            </Modal>
          </CSSTransition>
        </div>
      </div>
    </header>
  );
}

export default Header;