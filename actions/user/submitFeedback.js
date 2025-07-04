'use server'

import { createClient } from "@/lib/supabase/server"
import { getUser } from "../auth/getUser"

// This function submits user feedback to the database
export async function submitFeedback(content, templateId) {
    const supabase = await createClient()

    // Get userId from cookies
    const userData = await getUser()
    const id = userData?.user.id

    // If user id are not available, insert into the anonymous_feedback table
    if (!id) {
        const { data: anonymousFeedbackData, error: anonymousFeedbackError} = await supabase
            .from('anonymous_feedback')
            .insert([{ content }])

        if (anonymousFeedbackError) {
            console.error("Error publishing anonymous feedback")
            return { success: false, error: anonymousFeedbackError.message }
        }

        return { success: true, message: "Thank you for the feedback, we are working to provide the best experience."}
    }

    const { data, error } = await supabase
        .from('feedbacks')
        .insert([{ content, user_id: id, on_template: templateId }])
        .select()
        .single()

    if (error) {
        console.error("Error submitting feedback:", error)
        return { success: false, error: error.message }
    }

    return { success: true, data, message: "Thank you for the feedback, we are working to provide the best experience" }
}