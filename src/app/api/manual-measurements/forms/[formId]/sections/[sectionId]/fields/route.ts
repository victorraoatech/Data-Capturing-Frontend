import { NextRequest, NextResponse } from 'next/server';

// POST /api/manual-measurements/forms/:formId/sections/:sectionId/fields
export async function POST(request: NextRequest, { params }: { params: { formId: string; sectionId: string } }) {
  try {
    const { formId, sectionId } = params;
    const body = await request.json();
    
    console.log(`🔄 Proxying POST request to add field to section ${sectionId} in form ${formId}:`, body);
    
    // Forward the request to the actual backend
    const response = await fetch(
      `https://datacapture-backend.onrender.com/api/manual-measurements/forms/${formId}/sections/${sectionId}/fields`,
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
    console.error('❌ Add field to section POST proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to add field to section', error: String(error) },
      { status: 500 }
    );
  }
}