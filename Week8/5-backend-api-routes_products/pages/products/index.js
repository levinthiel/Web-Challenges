import useSWR from "swr";

const URL = "/api/products";

export default function ProductsListing() {

const fetcher = async url => {
    const res = await fetch(url)
  
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json()
  }
  const { data} = useSWR(URL, fetcher, );

  if (!data) return <div>Loading...</div>; // Show a loading state while waiting for the data

  return (
    <>
        <ul>
            {data.map((product)=> (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul> 
    </>
  )
}