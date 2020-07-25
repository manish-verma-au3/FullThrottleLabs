import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Home() {
    let history = useHistory();

    const [view,setView] = useState(false);            
    const [modalData, setModalData]=useState([]);
    const alluser = useSelector(state => state.userReducer);
  
    const handleClose = () => setView(false);
  
    // sending data to calander page
    const fun = () => {
     console.log('fun')
     history.push({
        pathname: '/calander',
        customNameData: modalData
      });
    }
  
    const handleSubmit = (activity_periods) => {
      setView(true);
      setModalData(activity_periods)
    }
    
  console.log('mod', modalData)

    return (
       <Container fluid>
         <Row>
           <Col></Col>
           <Col><h2>FullThrottle-Labs App</h2>
           <hr></hr>
           </Col>
           <Col></Col>
         </Row>

        {/* modal to show recent activity */}
         <Row style={{marginTop:'60px'}}>
           <Col>
           {view ? 
    <div>
         <Modal show={view} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Recent-Activity</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
              Start-time : {modalData.slice(-1).pop().start_time}
              <br/>
              End-time : {modalData.slice(-1).pop().end_time}
            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => fun()}>
                 Activity Calander
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
    :
    <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>UserName</th>
              <th>Location</th>           
            </tr>
          </thead>
          <tbody>
            {
              alluser.map((item, index) => {
                return(
                  <tr onClick={() => handleSubmit(item.activity_periods)}>
                    <td>{index + 1}</td>
                    <td>{item.real_name}</td>
                    <td>{item.tz}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
    </div>
    }
           </Col>
         </Row>
       </Container>
    )
}

export default Home
