import React, { useState } from 'react'
import { Grid, Row, Col, Typography, Input } from '@smooth-ui/core-sc'
import Signature from './components/Signature'

const App = () => {
  const [firstName, setFirstName] = useState('Prénom')
  const [lastName, setLastName] = useState('Nom')
  const [phone, setPhone] = useState('09 82 37 73 08')
  const [address, setAddress] = useState('41 rue Réaumur - 75003 Paris')
  const [position, setPosition] = useState('')

  return (
    <Grid>
      <Row display="flex" justifyContent="center" mb={90} mt={45}>
        <Typography variant="h1">signature smooth-code</Typography>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col mx={2} mb={2}>
              <Input
                width={1}
                label="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Col>
            <Col mx={2} mb={2}>
              <Input
                width={1}
                label="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col mx={2} mb={2}>
              <Input
                width={1}
                label="post"
                placeholder="Job title"
                value={position}
                onChange={e => setPosition(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col mx={2} mb={2}>
              <Input
                width={1}
                label="address"
                placeholder="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col mx={2}>
              <Input
                width={1}
                label="phone"
                placeholder="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </Col>
          </Row>
        </Col>
        <Col mx={2} border="1px solid #BD4932" borderRadius=".25rem">
          <Signature
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            address={address}
            position={position}
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default App
