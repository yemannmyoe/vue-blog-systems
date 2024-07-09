import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

const getPosts = () => {
    const posts = ref([]);
    const error = ref("");

    const load = async () => {
        try {
            const postsCollection = collection(db, "posts");
            const postsQuery = query(postsCollection, orderBy("created_at", "desc"));
            const querySnapshot = await getDocs(postsQuery);

            posts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (err) {
            console.error("Error fetching posts:", err);
            error.value = err.message;
        }
    };

    return { posts, error, load };
};

export default getPosts;
