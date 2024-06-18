import { Html, Heading, Text } from "@react-email/components"
const EmailTemplate = ({
  email,
  
}: {

  email: string

}) => {
  return (
    <Html lang="ca">
      <Heading as="h1">New Form Submission</Heading>
      <Text>You just submitted a form. Here are the details:</Text>
     
      <Text>Email: {email}</Text>
      
    </Html>
  )
}
export default EmailTemplate