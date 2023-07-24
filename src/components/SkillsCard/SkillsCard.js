import React from 'react'
import { Row, Col } from 'react-bootstrap';
import IconCard from '../../pages/Skills/IconCard';
function SkillsCard({name, list}) {
  return(
      <div>
        <h1>{name}</h1>
        <Row>
            {list.map((s, index) => (
                <Col>
                        <IconCard key={index} src={s} />
                </Col>
            ))}
        </Row> 
      </div> 
  )
}

export default SkillsCard
