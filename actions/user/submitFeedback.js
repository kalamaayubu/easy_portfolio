'use server'

import { createClient } from "@/lib/supabase/server"
import { getUser } from "../auth/getUser"

// This function submits user feedback to the database
export async function submitFeedback(content, templateId) {
    const supabase = await createClient()

    // Get userId from cookies
    const userData = await getUser()
    const userId = userData?.user.id

    // If user id are not available, insert into the anonymous_feedback table
    if (!userId) {
        const { data: anonymousFeedbackData, error: anonymousFeedbackError} = await supabase
            .from('anonymous_feedback')
            .insert([{ content, on_template: templateId }])
            .select()

            console.log("Feedback submitted anonymously:", anonymousFeedbackData)

        if (anonymousFeedbackError) {
            console.error("Error publishing anonymous feedback", anonymousFeedbackError)
            return { success: false, error: anonymousFeedbackError.message }
        }

        return { success: true, message: "Thank you for the feedback, we are working to provide the best experience."}
    }

    const { data, error } = await supabase
        .from('feedbacks')
        .insert([{ content, user_id: userId, on_template: templateId }])
        .select()
        .single()

    if (error) {
        console.error("Error submitting feedback:", error)
        return { success: false, error: error.message }
    }

    return { success: true, data, message: "Thank you for the feedback, we are working to provide the best experience" }
}