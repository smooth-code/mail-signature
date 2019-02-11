import React, { useState } from 'react'
import { Grid, Row, Col, Typography, Input } from '@smooth-ui/core-sc'
import Signature from './components/Signature'

const App = () => {
  const [firstName, setFirstName] = useState('Jeremy')
  const [lastName, setLastName] = useState('Sfez')
  const [email, setEmail] = useState('jeremy@smooth-code.com')
  const [phone, setPhone] = useState('09 82 37 73 08')
  const [address, setAddress] = useState('41 rue Réaumur - 75003 Paris')
  const [post, setPost] = useState('DG')

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
                label="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col mx={2} mb={2}>
              <Input
                width={1}
                label="post"
                placeholder="Post"
                value={post}
                onChange={e => setPost(e.target.value)}
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
            email={email}
            phone={phone}
            address={address}
            post={post}
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default App
