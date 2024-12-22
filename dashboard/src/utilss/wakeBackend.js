import axios from "axios";

const wakeUpBackend = async () => {
  try {
    await axios.get(
      "https://mern-electronice-ecommerce-dec2024.onrender.com/api/health"
    );
    console.log("Backend is awake");
  } catch (error) {
    console.error("Error waking up the backend:", error.message);
  }
};

export default wakeUpBackend;
