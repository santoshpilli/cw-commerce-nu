// 'use client'
// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// // import useSWR from 'swr';
// import useSWRInfinite from 'swr/infinite'
// import InfiteScroll from 'react-infinite-scroll-component'
// import Filter from "components/products/Filter";
// import ProductList from "components/products/ProductsList";

// interface Filters {
//   inStock: any;  // You can change `boolean` to `any` if you expect other types
// }

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const search = searchParams.get('search');
//   const limitPerPage = 10; 
//   const [filters, setFilters] = useState<Filters>({ inStock: false });

  
//    const fetcher = (url:any) => fetch(url).then((res) => res.json());
// console.log("filters==================>",filters)
//   const getKey = (pageIndex:number, previousPageData:any) =>{
//     pageIndex = pageIndex + 1 ;
//     if(previousPageData && !previousPageData.length ) return null
//     return `/api/products?search=${search}&page=${pageIndex}&limit=${limitPerPage}`
//   }

//  const {data:paginatedData,size,setSize} = useSWRInfinite(getKey,fetcher)
//     const paginatedFlatData = paginatedData?.flat()

//     const isReachedEnd = paginatedData && paginatedData[paginatedData.length - 1]?.length < 10  
//     const loadingMore = paginatedData && typeof paginatedData[size - 1] === "undefined";
//     const Loading = () => {
//       return (
//         <div className="flex items-center justify-center"> 
//           <span className="loading loading-ring loading-xs"></span>
//           <span className="loading loading-ring loading-sm"></span>
//           <span className="loading loading-ring loading-md"></span>
//           <span className="loading loading-ring loading-lg"></span>
//         </div>
//       );
//     }

//     console.log("paginatedFlatData================>",paginatedFlatData)
//   return (
//     <>
//       <div className="md:flex md:mx-8 gap-3">
//         <Filter setFilters={setFilters}/>
//         <div className="md:w-3/4">
//         <InfiteScroll 
//         next={()=>setSize(size + 1)} 
//         hasMore={!isReachedEnd} 
//         loader={<Loading />}
//         endMessage={<p>Reached to end</p>}
//         dataLength={paginatedData?.length ?? 0}
//         >
//         <ProductList data={paginatedFlatData} />
//         {/* <h2>hello</h2> */}
//         </InfiteScroll>
//         </div>
//       </div>
//     </>
//   );

// }




// 'use client';
// import { useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import useSWRInfinite from 'swr/infinite';
// import InfiteScroll from 'react-infinite-scroll-component';
// import Filter from 'components/products/Filter';
// import ProductList from 'components/products/ProductsList';

// interface Filters {
//   inStock: any; 
// }

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const search = searchParams.get('search');
//   const limitPerPage = 10;
//   const [filters, setFilters] = useState<Filters>({ inStock: false });

//   const fetcher = (url: any) => fetch(url).then((res) => res.json());

//   const getKey = (pageIndex: number, previousPageData: any) => {
//     pageIndex = pageIndex + 1;
//     if (previousPageData && !previousPageData.length) return null; 
//     return `/api/products?search=${search}&page=${pageIndex}&limit=${limitPerPage}`;
//   };

//   const { data: paginatedData, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher, {
//     revalidateOnFocus: false, 
//     dedupingInterval: 60000, 
//     revalidateAll: false, 
//     fallbackData: [],
//   });

//   const paginatedFlatData = paginatedData?.flat() || [];

//   const isReachedEnd =
//     paginatedData && paginatedData[paginatedData.length - 1]?.length < limitPerPage;
//   const loadingMore = paginatedData && typeof paginatedData[size - 1] === 'undefined';

//   const Loading = () => {
//     return (
//       <div className="flex items-center justify-center">
//         <span className="loading loading-ring loading-xs"></span>
//         <span className="loading loading-ring loading-sm"></span>
//         <span className="loading loading-ring loading-md"></span>
//         <span className="loading loading-ring loading-lg"></span>
//       </div>
//     );
//   };

//   const isLoading = !paginatedData || (isValidating && paginatedFlatData.length === 0);

//   console.log("paginatedFlatData===============>",paginatedFlatData)

//   return (
//     <>
//       <div className="md:flex md:mx-8 gap-3">
//         <Filter setFilters={setFilters} />
//         <div className="md:w-3/4">
//           <InfiteScroll
//             next={() => setSize(size + 1)}
//             hasMore={!isReachedEnd}
//             loader={null}
//             endMessage={<p>Reached the end</p>}
//             dataLength={paginatedFlatData.length}
//           >
//             <ProductList data={paginatedFlatData} isLoading={isLoading} />
//           </InfiteScroll>
//         </div>
//       </div>
//     </>
//   );
// }



'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useSWRInfinite from 'swr/infinite';
import InfiteScroll from 'react-infinite-scroll-component';
import Filter from 'components/products/Filter';
import ProductList from 'components/products/ProductsList';

interface Filters {
  inStock: any; 
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const limitPerPage = 10;
  const [filters, setFilters] = useState<Filters>({ inStock: false });

  const fetcher = async (url: any) => {
    console.time('API Fetch Time');
    const res = await fetch(url);
    const data = await res.json();
    console.timeEnd('API Fetch Time'); // End and log API fetch time
    return data;
  };

  const getKey = (pageIndex: number, previousPageData: any) => {
    pageIndex = pageIndex + 1;
    if (previousPageData && !previousPageData.length) return null;
    return `/api/products?search=${search}&page=${pageIndex}&limit=${limitPerPage}`;
  };

  const { data: paginatedData, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher, {
    revalidateOnFocus: false, 
    dedupingInterval: 60000, 
    revalidateAll: false, 
    fallbackData: [],
  });

  const paginatedFlatData = paginatedData?.flat() || [];

  const isReachedEnd =
    paginatedData && paginatedData[paginatedData.length - 1]?.length < limitPerPage;
  const loadingMore = paginatedData && typeof paginatedData[size - 1] === 'undefined';

  const Loading = () => {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  };

  const isLoading = !paginatedData || (isValidating && paginatedFlatData.length === 0);

  // Measure rendering time
  useEffect(() => {
    console.timeEnd('Component Render Time');
  }, [paginatedFlatData]);

  console.time('Component Render Time'); // Start measuring the render time

  return (
    <>
      <div className="md:flex md:mx-8 gap-3">
        <Filter setFilters={setFilters} />
        <div className="md:w-3/4">
          <InfiteScroll
            next={() => setSize(size + 1)}
            hasMore={!isReachedEnd}
            loader={null}
            endMessage={<p>Reached the end</p>}
            dataLength={paginatedFlatData.length}
          >
            <ProductList data={paginatedFlatData} isLoading={isLoading} />
          </InfiteScroll>
        </div>
      </div>
    </>
  );
}



// import Filter from 'components/products/Filter';
// import ProductList from 'components/products/ProductsList';
// import InfiniteScroll from 'react-infinite-scroll-component';

// // Server-side fetching function
// async function fetchProducts(search: string, pageIndex: number, limitPerPage: number) {
//   const res = await fetch(`http://localhost:3000/api/products?search=${search}&page=${pageIndex}&limit=${limitPerPage}`,
//     { cache: 'no-store' } 
//   );
//   const data = await res.json();
//   return data;
// }

// interface Filters {
//   inStock: any;
// }

// export default async function ProductsPage({ searchParams }: { searchParams: { search: string } }) {
//   const search = searchParams.search || '';
//   const limitPerPage = 10;

//   // Fetch initial product data for the first page
//   const initialData = await fetchProducts(search, 1, limitPerPage);
//   console.log("initialData================>",initialData)

//   const isReachedEnd = initialData.length < limitPerPage;

//   return (
//     <>
//       <div className="md:flex md:mx-8 gap-3">
//         {/* Filters component might need to stay client-side if it involves user interaction */}
//         {/* <Filter /> */}
//         <div className="md:w-3/4">
//           {/* Infinite Scroll */}
//           {/* <InfiniteScroll
//             next={async () => {
//               const nextPage = await fetchProducts(search, 2, limitPerPage);
//               return nextPage; 
//             }}
//             hasMore={!isReachedEnd}
//             loader={<Loading />}
//             endMessage={<p>Reached the end</p>}
//             dataLength={initialData.length}
//           >
//             <ProductList data={initialData} isLoading={false} />
//           </InfiniteScroll> */}
//                       {/* <ProductList data={initialData} isLoading={false} /> */}
//                       <div>
//                       {initialData.map((item:any,index:any)=>(
//                         <>
//                         <div className="md:w-5/6 w-4/5 grid justify-items-stretch">
//                           <img src={item.image_url} alt={item.name} width={100} height={100} className="w-[7.5rem] h-[10rem] mb-4 justify-self-center ml-10" />
//                         </div>
//                         <h2>{item.name}</h2>
//                         </>
//                       ))}
//                       </div>

//         </div>
//       </div>
//     </>
//   );
// }

// // Loading component
// const Loading = () => (
//   <div className="flex items-center justify-center">
//     <span className="loading loading-ring loading-xs"></span>
//     <span className="loading loading-ring loading-sm"></span>
//     <span className="loading loading-ring loading-md"></span>
//     <span className="loading loading-ring loading-lg"></span>
//   </div>
// );



// import Image from 'next/image';

// async function fetchProducts(search: string, pageIndex: number, limitPerPage: number) {
//   const res = await fetch(
//     `http://localhost:3000/api/products?search=${search}&page=${pageIndex}&limit=${limitPerPage}`,
//     { cache: 'no-store' } 
//   );
//   const data = await res.json();
//   return data;
// }

// interface Filters {
//   inStock: any;
// }

// export default async function ProductsPage({ searchParams }: { searchParams: { search: string } }) {
//   const search = searchParams.search || '';
//   const limitPerPage = 10;

//   // Fetch initial product data for the first page
//   const initialData = await fetchProducts(search, 1, limitPerPage);
//   console.log("initialData================>", initialData);

//   const isReachedEnd = initialData.length < limitPerPage;

//   return (
//     <>
//       <div className="md:flex md:mx-8 gap-3">
//         {/* Filters component might need to stay client-side if it involves user interaction */}
//         {/* <Filter /> */}
        
//         <div className="md:w-3/4">
//           {/* Infinite Scroll commented out for now */}
//           {/* <InfiniteScroll
//             next={async () => {
//               const nextPage = await fetchProducts(search, 2, limitPerPage);
//               return nextPage; 
//             }}
//             hasMore={!isReachedEnd}
//             loader={<Loading />}
//             endMessage={<p>Reached the end</p>}
//             dataLength={initialData.length}
//           > */}
          
//           {/* Render product list */}
//           {/* <ProductList data={initialData} /> */}
          
//           {/* Example of rendering images */}
//           <div>
//             {initialData.map((item: any, index: any) => (
//               <div key={index}>
//                 {/* Use Next.js Image component for better performance */}
//                 <div className="md:w-5/6 w-4/5 grid justify-items-stretch">
//                   <Image
//                     src={item.image_url}
//                     alt={item.name}
//                     width={100}
//                     height={100}
//                     className="w-[7.5rem] h-[10rem] mb-4 justify-self-center ml-10"
//                   />
//                 </div>
//                 <h2>{item.name}</h2>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // Loading component (still client-side)
// const Loading = () => (
//   <div className="flex items-center justify-center">
//     <span className="loading loading-ring loading-xs"></span>
//     <span className="loading loading-ring loading-sm"></span>
//     <span className="loading loading-ring loading-md"></span>
//     <span className="loading loading-ring loading-lg"></span>
//   </div>
// );
