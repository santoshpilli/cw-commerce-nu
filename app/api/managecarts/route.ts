import { mergeCarts } from "app/lib/cart";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export  async function POST(req:any, res:any) {

  const userId=cookies().get('userId')?.value
  console.log('id',userId)

  if (!userId) {
    return NextResponse.json({ message: 'User ID is required' },{status:400});
  }

  try {
    console.log('1')
    const mergedCart = await mergeCarts(userId);
    console.log('2')
    if (mergedCart) {
    return  NextResponse.json({ message: 'Cart merged successfully', cart: mergedCart },{status:200});
    } else {
    return  NextResponse.json({ message: 'No items to merge' },{status:200});
    }
  } catch (error) {
    console.error('Error merging carts:', error);
    return NextResponse.json({ message: 'Internal server error' },{status:500});
  }
}
