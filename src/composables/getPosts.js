import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let q = query(collection(db, 'posts'), orderBy("created_at", "desc"));
      let res = await getDocs(q);
      posts.value = res.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
