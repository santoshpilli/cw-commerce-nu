'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import Filter from "components/products/Filter";
import ProductList from "components/products/ProductsList";

interface Filters {
  inStock: any;  
}

export default async function ProductsPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  //
  const limitPerPage = 10; 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [allData, setAllData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({ inStock: false });


  //
  // const fetcher = (url:any) => fetch(url).then((res) => res.json());

  // const { data, error, isValidating  } = useSWR(
  //   `/api/products?search=${search}&page=${page}&limit=${limitPerPage}`,
  //   fetcher,
  //   { revalidateOnFocus: false }
  // );

  // useEffect(() => {
  //   if (data?.data?.items) {
  //     setAllData((prevData) => [...prevData, ...data.data.items]);
  //   }
  // }, [data]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`/api/products?search=${search}&page=${page}&limit=${limitPerPage}`);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log("response==============>",data)
  //       if (data && data.data && data.data.items) {
  //         setAllData((prevData) => [...prevData, ...data.data.items]);
  //       }
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [search,page]);
   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products?search=${search}&page=${page}&limit=${limitPerPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("response==============>",data)
        if (data && data.data && data.data.items) {
          setAllData((prevData) => [...prevData, ...data.data.items]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [search]); // Combine search and page into a single useEffect dependency
  
  // console.log("data=============> in page",data)

  // useEffect(() => {
  //   if (data?.data?.total) {
  //     const totalCount = parseInt(data.data.total);
  //     const totalPages = Math.ceil(totalCount / limitPerPage);
  //     setTotalPages(totalPages);
  //     setAllData((prevData) => [...prevData, ...data.data.items]);

  //   }
  //   console.log("first useEffect==========>")
  // }, [data,page]);


  // const handleScroll = () => {
  //   const windowHeight = window.innerHeight;
  //   const documentHeight = document.documentElement.scrollHeight;
  //   const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
  //   if (scrollTop + windowHeight >= documentHeight) {
  //     // Fetch more data only if there are more pages to load
  //     if (page < totalPages) {
  //       setPage(page + 1);
  //       setIsLoadingMore(true);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   console.log("second useEffect==========>")
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [page, totalPages]);

    // const prodData = data?.data?.items
    // console.log("prodData==================>",prodData)
    // console.log("allData===================>",allData)
  return (
    <>
    {/* {!allData ?
    <>
       <div className="h-screen flex items-center justify-center"> 
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
        </div>
    </>
    :
     <div className="md:flex md:mx-8 gap-3">
            <Filter/>
            <ProductList data={allData} isLoading={isLoading}/>
        </div>
   } */}


{isLoading ? (
      <div className="h-screen flex items-center justify-center"> 
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    ) : (
      <div className="md:flex md:mx-8 gap-3">
        <Filter  setFilters={setFilters}/>
        <ProductList data={allData} isLoading={false} />
      </div>
    )}
    </>
  );

}