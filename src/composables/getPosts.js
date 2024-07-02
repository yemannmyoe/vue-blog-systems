import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      posts.value = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
