import { getProductById } from "@/services/productServices";

export default function handler(req, res) {
    const { id } = req.query;

    const productsID = getProductById(id);  


   

    if(!productsID) {
        res.status(404).json({ status: "Not Found!"}); 
    }
   
    res.status(200).json(productsID); 
  }