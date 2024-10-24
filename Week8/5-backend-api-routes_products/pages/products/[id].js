import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function Ids(){

    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`/api/products/${id}`);
            const data = await res.json();
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;


    return (
        <>
            <h1>{product.name}</h1>
        </>
    )
}