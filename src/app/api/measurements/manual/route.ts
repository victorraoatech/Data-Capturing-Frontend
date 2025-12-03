import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('🔄 Proxying manual measurement creation request to backend:', {
      formId: body.formId,
      measurementType: body.measurementType,
      subject: body.subject,
      firstName: body.firstName,
      lastName: body.lastName,
      frontImageUrl: body.frontImageUrl,
      sideImageUrl: body.sideImageUrl,
      status: body.status
    });

    // Forward the request to the actual backend with the correct endpoint
    const response = await fetch('https://datacapture-backend.onrender.com/api/manual-measurements/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': request.headers.get('Authorization') || '',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    // Return the response from the backend
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('❌ Manual measurement creation proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to create manual measurement', error: String(error) },
      { status: 500 }
    );
  }
}