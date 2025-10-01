import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Create email text content
    const emailText = `
New Job Application Received

Applicant Full Legal Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Multi-line Address: ${data.multiAddress || 'N/A'}
Country/Region: ${data.country}
Address: ${data.address}
City: ${data.city}
Zip/Postal Code: ${data.zipCode}
Bank Name: ${data.bankName || 'N/A'}
Can Drive: ${data.canDrive}

---
Submitted on: ${new Date().toLocaleString()}
    `.trim();

    const success = await sendEmail(
      'contact@keyerealestate.com',
      'New Job Application - Keyes Real Estate',
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
    console.error('Application submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}