import { NextRequest, NextResponse } from 'next/server';

// GET /api/manual-measurements/forms/:id
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    console.log(`🔄 Proxying GET request for manual measurement form with ID: ${id}`);
    
    // Forward the request to the actual backend
    const response = await fetch(`https://datacapture-backend.onrender.com/api/manual-measurements/forms/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': request.headers.get('Authorization') || '',
      },
    });

    const data = await response.json();

    // Return the response from the backend
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('❌ Manual measurement form GET proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch manual measurement form', error: String(error) },
      { status: 500 }
    );
  }
}

// PUT /api/manual-measurements/forms/:id
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();
    
    console.log(`🔄 Proxying PUT request for manual measurement form with ID: ${id}`, body);
    
    // Forward the request to the actual backend
    const response = await fetch(`https://datacapture-backend.onrender.com/api/manual-measurements/forms/${id}`, {
      method: 'PUT',
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
    console.error('❌ Manual measurement form PUT proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to update manual measurement form', error: String(error) },
      { status: 500 }
    );
  }
}

// DELETE /api/manual-measurements/forms/:id
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    console.log(`🔄 Proxying DELETE request for manual measurement form with ID: ${id}`);
    
    // Forward the request to the actual backend
    const response = await fetch(`https://datacapture-backend.onrender.com/api/manual-measurements/forms/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': request.headers.get('Authorization') || '',
      },
    });

    const data = await response.json();

    // Return the response from the backend
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('❌ Manual measurement form DELETE proxy error:', error);
    return NextResponse.json(
      { message: 'Failed to delete manual measurement form', error: String(error) },
      { status: 500 }
    );
  }
}