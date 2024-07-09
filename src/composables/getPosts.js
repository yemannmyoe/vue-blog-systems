import { ref, onUnmounted } from 'vue';
import { db } from '../firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = () => {
    try {
      let q = query(collection(db, 'posts'), orderBy("created_at", "desc"));

      let unsubscribe = onSnapshot(q, (snapshot) => {
        posts.value = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      }, (err) => {
        error.value = err.message;
      });

      // Clean up the listener when the component is unmounted
      onUnmounted(() => {
        unsubscribe();
      });

    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
