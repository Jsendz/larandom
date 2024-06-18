"use server"
import { Resend } from "resend"
import EmailTemplate from "./app/components/EmailTemplate"
interface State {
  error: string | null
  success: boolean
}
export const sendEmail = async (prevState: State, formData: FormData) => {
  
  const email = formData.get("email") as string
  
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "joshuasendzul@gmail.com",
      to: "joshuasendzul@gmail.com",
      subject: "Form Submission",
      react: EmailTemplate({  email })
    })
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false
    }
  }
}