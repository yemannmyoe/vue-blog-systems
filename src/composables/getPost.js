const { ref } = require("vue");
import {db} from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"; // Import necessary Firestore functions

let getPost=(id)=>{
    let post=ref(null);
    let error=ref("");

    let load=async()=>{
        try{
          const docRef = doc(db, "posts", id); // Get reference to the document
          const docSnap = await getDoc(docRef); // Fetch the document snapshot
    
          if (docSnap.exists()) {
            post.value = { id: docSnap.id, ...docSnap.data() }; // Use docSnap to get document data
          } else {
            throw new Error("Document not found");
          }
        }catch(err){
            error.value=err.message;
        }
    }
    return {post,error,load};
}

export default getPost;