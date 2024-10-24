import useSWR from "swr";

const URL = "/api/random-characters";

export default function HomePage() {

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
            <li>First name:{data.firstName}</li>
            <li>Last name:{data.lastName}</li>
            <li>age: {data.age}</li>
            <li>job: {data.job}</li>
            <li>Twitter: {data.twitter}</li>
        </ul> 
    </>
  )
}





