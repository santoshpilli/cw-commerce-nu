import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieNames = ['cartId', 'userId']; // Array of cookie names to delete

    // Check if cookies() and delete methods are properly imported and used
    if (cookies) {
      cookieNames.forEach(cookieName => {
        cookies().delete(cookieName); 
      });

      return NextResponse.json({ message: 'Cookies deleted successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'No cookies found to delete' }, { status: 404 });
    }
  } catch (error) {
    console.error(error, 'Error deleting cookies');
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
