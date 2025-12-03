import { NextRequest, NextResponse } from 'next/server';

// PUT /api/manual-measurements/forms/:formId/sections/:sectionId
export async function PUT(request: NextRequest, { params }: { params: { formId: string; sectionId: string } }) {
  try {
    const { formId, sectionId } = params;
    const body = await request.json();
    
    console.log(`🔄 Proxying PUT request to update section ${sectionId} in form ${formId}:`, body);
    
    // Forward the request to the actual backend
    const response = await fetch(
      `https://datacapture-backend.onrender.com/api/manual-measurements/forms/${formId}/sections/${sectionId}`,
      {
        method: 'PUT',
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
    console.error('❌ Update section PUT proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to update section', error: String(error) },
      { status: 500 }
    );
  }
}

// DELETE /api/manual-measurements/forms/:formId/sections/:sectionId
export async function DELETE(request: NextRequest, { params }: { params: { formId: string; sectionId: string } }) {
  try {
    const { formId, sectionId } = params;
    
    console.log(`🔄 Proxying DELETE request to delete section ${sectionId} from form ${formId}`);
    
    // Forward the request to the actual backend
    const response = await fetch(
      `https://datacapture-backend.onrender.com/api/manual-measurements/forms/${formId}/sections/${sectionId}`,
      {
        method: 'DELETE',
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
    console.error('❌ Delete section DELETE proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to delete section', error: String(error) },
      { status: 500 }
    );
  }
}