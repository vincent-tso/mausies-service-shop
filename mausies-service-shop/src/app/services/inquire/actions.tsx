"use server"

import { redirect } from "next/navigation"
import { EmailTemplate } from "../../../components/EmailTemplate"
import { Resend } from "resend"
import { z } from "zod"

const EmailSchema = z.string();

export async function createInquiry(formData: FormData) {
    // Create inquiry data
    console.log(formData);

    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not set");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const firstName = EmailSchema.parse(formData.get("firstName"));
    const email = EmailSchema.parse(formData.get("email"));

    const emailPayload = {
        from: "service@mausie.shop",
        to: [email],
        subject: "Thanks for using Mausies' Services!",
        react: EmailTemplate({ firstName: firstName })
    };

    const { data, error } = await resend.emails.send(emailPayload);
  
    console.log(data);

    redirect("/services/inquire/thank-you");
}
