import { NextRequest, NextResponse } from 'next/server';

// GET /api/manual-measurements/forms/:formId/sections
export async function GET(request: NextRequest, { params }: { params: { formId: string } }) {
  try {
    const { formId } = params;
    
    console.log(`🔄 Proxying GET request to fetch all sections for form ${formId}`);
    
    // Forward the request to the actual backend
    const response = await fetch(
      `https://datacapture-backend.onrender.com/api/manual-measurements/forms/${formId}/sections`,
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
    console.error('❌ Get sections GET proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch sections', error: String(error) },
      { status: 500 }
    );
  }
}