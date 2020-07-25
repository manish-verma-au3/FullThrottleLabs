import React,{useState, useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'moment';
import { formatDate } from '@fullcalendar/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MyCalander(props) {
    
    const [myEvent, setmyEvent] = useState([])
    console.log('myEvent', props.location.customNameData)
    
    // adding data from Api to calander
    function myFun(){
        props.location.customNameData.map(res => {
        return setmyEvent(prev => [...prev, 
                {title:res.start_time.slice(11)+ " to "+res.end_time.slice(11),
                date: moment(new Date(res.start_time.slice(0,11))).toISOString(), description:"Testing Description"}])
        } )
    }
   

    useEffect(() => {
       myFun();
    }, [])
  
    console.log("m", myEvent)
    return (
        <Container fluid>
            <Row style={{marginTop: "10px"}}>
                
                <Col>
                    <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        events={myEvent}
                        display= 'background'
                        eventTextColor='red'
                        handleWindowResize='true'

                    />
                </Col>
               
            </Row>
        </Container>
    )
}

export default MyCalander
