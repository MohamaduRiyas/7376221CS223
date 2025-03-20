import axios from "axios";

const fetchPosts = async (userId) => {
    try {
        const response = await axios.get(`http://20.244.56.144/test/users/${userId}/posts`);
        return response.data.posts; // Returns an array of posts
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};

export default fetchPosts;
