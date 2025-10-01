import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const emailText = `
New Newsletter Subscription

Email: ${data.email}
Subscribed: ${data.subscribe ? 'Yes' : 'No'}

---
Submitted on: ${new Date().toLocaleString()}
    `.trim();

    const success = await sendEmail(
      'contact@keyerealestate.com',
      'New Newsletter Subscription - Keyes Real Estate',
      emailText
    );

    if (success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}