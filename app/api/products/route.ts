export const dynamic = 'force-dynamic'

import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get('search') || '';
    const Page = url.searchParams.get('page') || '';
    const limit = url.searchParams.get('limit') || '';
    const filter=url.searchParams.get('available') || '';

    const searchParameters = {
        q: search, 
        query_by:'name',
        page:Page,
        per_page:limit,
        filter_by:'',
        sort_by:'_text_match:asc',
      };
      if(filter==='true'){
        searchParameters.filter_by='stock:[-2000..2000]'
      }

      

      // const typesenseConfig = {
      //   apiKey: 'exceloid-test-new',
      //   baseUrl: 'https://typesense.exceloid.in:8108',
      //   collection:'cw_commerce_product',
      // };
  
      const response = await axios.get(`${process.env.TYPESENSE_BACKEND_URL}/${process.env.PRODUCT_COLLECTION}/documents/search`, {
        headers: {
          'X-TYPESENSE-API-KEY': process.env.TYPESENSE_API_KEY,
          'Content-Type': 'application/json',
        },
        params: searchParameters,
      });
    const documents = response.data.hits.map((hit:any) => hit.document);
    // const products = {
    //   items:documents,
    //   total:response.data.found
    // };
    return NextResponse.json(documents);
} catch (error) {
  return NextResponse.json({message:"Error",error:error});
  }
}