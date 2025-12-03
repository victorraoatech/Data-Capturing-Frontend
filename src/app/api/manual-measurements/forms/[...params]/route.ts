import { NextRequest, NextResponse } from 'next/server';

// GET /api/manual-measurements/forms
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';
    const status = searchParams.get('status') || '';
    const subject = searchParams.get('subject') || '';

    console.log('🔄 Proxying GET request for all manual measurement forms with params:', {
      page,
      limit,
      status,
      subject
    });

    // Build query string
    const queryParams = new URLSearchParams();
    queryParams.set('page', page);
    queryParams.set('limit', limit);
    
    if (status) queryParams.set('status', status);
    if (subject) queryParams.set('subject', subject);

    // Forward the request to the actual backend
    const response = await fetch(
      `https://datacapture-backend.onrender.com/api/manual-measurements/forms?${queryParams.toString()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': request.headers.get('Authorization') || '',
        },
      }
    );

    const data = await response.json();

    // Return the response from the backend
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('❌ Manual measurement forms GET proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch manual measurement forms', error: String(error) },
      { status: 500 }
    );
  }
}