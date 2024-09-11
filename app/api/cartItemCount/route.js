
// import { getCartItemCount } from '../../lib/cart';

// export async function GET() {
//   try {
//     const itemCount = await getCartItemCount();
//     console.log("called in cartitem count==============>",itemCount)
//     return new Response(JSON.stringify({ itemCount }), { status: 200 });
//   } catch (error) {
//     console.error('Error getting cart item count:', error);
//     return new Response(JSON.stringify({ error: 'Failed to fetch item count' }), { status: 500 });
//   }
// }


import { getCartItemCount } from '../../lib/cart';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = cookies();
    const userId = cookieStore.get('userId')?.value;
    const cartId = cookieStore.get('cartId')?.value;
    const itemCount = await getCartItemCount();
    return new Response(JSON.stringify({ itemCount }), { status: 200 });
  } catch (error) {
    console.error('Error getting cart item count:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch item count' }), { status: 500 });
  }
}

