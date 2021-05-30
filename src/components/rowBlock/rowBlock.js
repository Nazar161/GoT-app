import React from 'react';
import {Col, Row} from 'reactstrap';
import './rowBlock.css'

const RowBlock = ({left, right, header, prompt}) => {
    return(
        <div className="rowBlock">
            <h1>{header}</h1>
            <div><h2>{prompt}</h2></div>
            <Row>
                <Col md='6'>
                    {left}
                </Col>
                <Col md='6'>
                    {right}
                </Col>
            </Row>
        </div>
    )
}

export default RowBlock;