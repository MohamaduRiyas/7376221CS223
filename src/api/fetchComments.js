import axios from "axios";

const fetchComments = async (postId) => {
    try {
        const response = await axios.get(`http://20.244.56.144/test/posts/${postId}/comments`);
        return response.data.comments; // Returns an array of comments
    } catch (error) {
        console.error("Error fetching comments:", error);
        return [];
    }
};

export default fetchComments;
