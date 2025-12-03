import { NextRequest, NextResponse } from 'next/server';

// PUT /api/manual-measurements/forms/:formId/sections/:sectionId/fields/:fieldId
export async function PUT(request: NextRequest, { params }: { params: { formId: string; sectionId: string; fieldId: string } }) {
  try {
    const { formId, sectionId, fieldId } = params;
    const body = await request.json();
    
    console.log(`🔄 Proxying PUT request to update field ${fieldId} in section ${sectionId} of form ${formId}:`, body);
    
    // Forward the request to the actual backend
    const response = await fetch(
      `https://datacapture-backend.onrender.com/api/manual-measurements/forms/${formId}/sections/${sectionId}/fields/${fieldId}`,
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
    console.error('❌ Update field PUT proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to update field', error: String(error) },
      { status: 500 }
    );
  }
}

// DELETE /api/manual-measurements/forms/:formId/sections/:sectionId/fields/:fieldId
export async function DELETE(request: NextRequest, { params }: { params: { formId: string; sectionId: string; fieldId: string } }) {
  try {
    const { formId, sectionId, fieldId } = params;
    
    console.log(`🔄 Proxying DELETE request to delete field ${fieldId} from section ${sectionId} of form ${formId}`);
    
    // Forward the request to the actual backend
    const response = await fetch(
      `https://datacapture-backend.onrender.com/api/manual-measurements/forms/${formId}/sections/${sectionId}/fields/${fieldId}`,
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
    console.error('❌ Delete field DELETE proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to delete field', error: String(error) },
      { status: 500 }
    );
  }
}