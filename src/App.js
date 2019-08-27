import React from 'react'
import {
  Input,
  Normalize,
  Box,
  Form,
  FormField,
  FormFieldLabel,
} from '@smooth-ui/core-sc'
import { Signature } from './Signature'

function Field({ state, setState, name, type, label, placeholder }) {
  return (
    <FormField>
      <FormFieldLabel name={name}>{label}</FormFieldLabel>
      <Input
        type={type}
        width={1}
        name={name}
        placeholder={placeholder}
        value={state[name]}
        onChange={({ target: { value } }) =>
          setState(previous => ({ ...previous, [name]: value }))
        }
      />
    </FormField>
  )
}

function useForm(initialState) {
  const [state, setState] = React.useState(initialState)
  return { state, setState }
}

const App = () => {
  const form = useForm({
    firstname: 'Prénom',
    lastname: 'Nom',
    email: 'contact@smooth-code.com',
    position: '',
    phone: '09 82 37 73 08',
    address: '41 rue Réaumur - 75003 Paris',
  })

  return (
    <Box mx="auto" maxWidth={1180} p="20rpx">
      <Normalize />
      <Box display="flex" justifyContent="center" my={45}>
        <h1>Smooth Code - Mail signature</h1>
      </Box>
      <Box row mx="-20rpx">
        <Box col={{ xs: 1, md: 0.5 }} px="-20rpx">
          <Form>
            <Field
              {...form}
              name="firstname"
              label="First name"
              placeholder="Greg"
            />
            <Field
              {...form}
              name="lastname"
              label="Last name"
              placeholder="Bergé"
            />
            <Field
              {...form}
              name="email"
              label="Email"
              placeholder="contact@smooth-code.com"
            />
            <Field
              {...form}
              name="position"
              label="Job title"
              placeholder="Directeur technique"
            />
            <Field
              {...form}
              name="phone"
              label="Phone"
              placeholder="09 82 37 73 08"
            />
            <Field
              {...form}
              name="address"
              label="Address"
              placeholder="41 rue Réaumur - 75003 Paris"
            />
          </Form>
        </Box>
        <Box col={{ xs: 1, md: 0.5 }} mt={{ xs: '20rpx', md: 0 }} px="20rpx">
          <Box border={1} borderColor="#BD4932" borderRadius=".25rem">
            <Signature {...form.state} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App
