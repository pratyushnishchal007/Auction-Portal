
import React,{useRef,useState,useContext} from 'react'
import { Modal,ModalTitle,Form,Button,Alert } from 'react-bootstrap'
import { AuthContext } from './context/AuthContext';


const Login = () => {
    const [showForm,setShowForm] = useState(false);
    const [error,setError]=useState("");

    const emailRef=useRef();
    const passwordRef=useRef();

    const {login} = useContext(AuthContext)

    const openForm = () =>setShowForm(true);
    const closeForm = () =>setShowForm(false);

    const submitForm = async (e) =>{
        e.preventDefault();
        setError('')

        try{
            await login(emailRef.current.value,passwordRef.current.value)
            closeForm();
        }catch (error){
            setError('Invalid Login')
        }
    }

    return(
    <>
    <div onClick={openForm} className="btn btn-outline-secondary mx-2">Login</div>
    <Modal centered show={showForm} onHide={closeForm}>
    <form onSubmit={submitForm}>
        <Modal.Header>
            <ModalTitle>Login</ModalTitle>
        </Modal.Header>
        <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required ref={passwordRef}/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>Close</Button>
            <Button variant="primary" type="submit">Submit</Button>
        </Modal.Footer>
        </form>
    </Modal>
    </>
    );
}

export default Login;
