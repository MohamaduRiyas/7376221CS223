import axios from "axios";

const fetchUsers = async () => {
    try {
        const response = await axios.get("http://20.244.56.144/test/users");
        return response.data.users; // Users returned as a key-value object
    } catch (error) {
        console.error("Error fetching users:", error);
        return {};
    }
};

export default fetchUsers;
