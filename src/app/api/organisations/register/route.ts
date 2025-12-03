import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('🔄 Proxying organization registration request to backend:', body);

    // Transform the data format to match backend expectations
    const transformedBody = {
      ...body,
      phoneNumber: body.phone, // Transform 'phone' to 'phoneNumber'
    };
    
    // Remove the original phone field if it exists
    if (transformedBody.phone) {
      delete transformedBody.phone;
    }

    // Forward the request to the actual backend
    const response = await fetch('https://datacapture-backend.onrender.com/api/organisations/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transformedBody),
    });

    const data = await response.json();

    // Return the response from the backend
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('❌ Proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to register organization', error: String(error) },
      { status: 500 }
    );
  }
}