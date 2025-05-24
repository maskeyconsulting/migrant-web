import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { feedback, pageUrl } = await request.json();

    // In a real application, you would store this feedback in a database
    console.log("Feedback received:", { feedback, pageUrl });

    // You might also want to send this feedback via email or to a logging service

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing feedback:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process feedback" },
      { status: 500 }
    );
  }
}
//
// This is a simple API route that handles feedback submission.
// It expects a POST request with JSON body containing 'feedback' and 'pageUrl'.
// The feedback is logged to the console, and a success response is returned.
// In a real application, you would store this feedback in a database or send it to an email service.
//
// The error handling is basic; in a production app, you would want to handle different types of errors more gracefully.
//  You might also want to validate the input data before processing it.
//
//
