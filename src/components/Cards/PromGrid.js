import * as React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./PromGrid.css";

export function PromGrid (){
    return(
        <div className='pgDiv'>
            <Row xs={1} md={2} lg={4} className="g-4">
            {Array.from({ length: 12 }).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Img src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80" />
                    <Card.Body>
                    <Card.Title>Example</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
}