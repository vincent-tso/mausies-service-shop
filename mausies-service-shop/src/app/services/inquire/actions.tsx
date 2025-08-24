"use server"

import { redirect } from "next/navigation"

export async function createInquiry(formData: FormData) {
    // Create inquiry data
    console.log(formData)

    redirect("/services/inquire/thank-you");
}