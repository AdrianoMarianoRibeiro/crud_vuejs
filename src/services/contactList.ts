import { ref } from 'vue';
import { httpClient } from '@/utils/request/http';

const getAll = () => {
  const posts = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await httpClient.get('https://jsonplaceholder.typicode.com/posts');
      posts.value = response.data;
    } catch (err: any) {
      error.value = err.messahe;
      console.log(err.messahe);
    }

    return {posts, error, load};
  };
};

export default getAll;
