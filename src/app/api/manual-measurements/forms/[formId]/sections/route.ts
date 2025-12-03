import { NextRequest, NextResponse } from 'next/server';

// POST /api/manual-measurements/forms/:formId/sections
export async function POST(request: NextRequest, { params }: { params: { formId: string } }) {
  try {
    const { formId } = params;
    const body = await request.json();
    
    console.log(`🔄 Proxying POST request to add section to form ${formId}:`, body);
    
    // Forward the request to the actual backend
    const response = await fetch(
      `https://datacapture-backend.onrender.com/api/manual-measurements/forms/${formId}/sections`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': request.headers.get('Authorization') || '',
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    // Return the response from the backend
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('❌ Add section to form POST proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to add section to form', error: String(error) },
      { status: 500 }
    );
  }
}