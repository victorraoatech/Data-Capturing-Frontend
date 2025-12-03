// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(
//   request: NextRequest,
//   { params }: { params: Promise<Record<string, string | string[]>> } // Generic type for flexibility
// ) {
//   try {
//     // You can optionally get params but don't have to use them
//     const routeParams = await params;
//     console.log('Route params:', routeParams);
    
//     const token = request.headers.get('authorization')?.replace('Bearer ', '');
    
//     if (!token) {
//       return NextResponse.json(
//         { success: false, message: 'Unauthorized' },
//         { status: 401 }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       data: {
//         sections: [
//           "Head Section",
//           "Chest Section",
//           "Abdomen Section",
//           "Waist Section",
//           "Thigh Section"
//         ],
//         message: "Section options retrieved successfully"
//       }
//     });
//   } catch (error) {
//     console.error('Error fetching section options:', error);
//     return NextResponse.json(
//       { success: false, message: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }