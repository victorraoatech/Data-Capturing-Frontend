import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('🔄 Proxying body scan analysis request to backend:', {
      imageData: body.imageData ? `${body.imageData.substring(0, 50)}...` : null,
      userHeight: body.userHeight,
      scanTimestamp: body.scanTimestamp,
      deviceInfo: body.deviceInfo
    });

    // Forward the request to the actual backend
    const response = await fetch('https://datacapture-backend.onrender.com/api/measurements/scan', {
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
    console.error('❌ Body scan analysis proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to process body scan analysis', error: String(error) },
      { status: 500 }
    );
  }
}