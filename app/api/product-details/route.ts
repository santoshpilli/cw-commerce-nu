import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
    console.log('started1')
  try {
    const url = new URL(req.url);
    const name = url.searchParams.get('name') || '';

    const searchParameters = {
        q: name, 
        query_by:'name',
      };
        const response = await axios.get(`${process.env.TYPESENSE_BACKEND_URL}/${process.env.PRODUCT_COLLECTION}/documents/search`, {
            headers: {
              'X-TYPESENSE-API-KEY': process.env.TYPESENSE_API_KEY,
              'Content-Type': 'application/json',
            },
            params: searchParameters,
          });
    const documents = response.data.hits.map((hit:any) => hit.document);
    return NextResponse.json(documents);
} catch (error) {
  return NextResponse.json({message:"Error",error:error});
  }
}