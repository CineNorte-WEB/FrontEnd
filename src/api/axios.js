import axios from "axios";

// 환경 변수에서 API URL 읽기
const apiUrl = import.meta.env.VITE_API_URL;

// Axios 기본 설정
const apiClient = axios.create({
  baseURL: "http://3.38.169.113", // 기본 API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchData(endpoint) {
  try {
    const response = await apiClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // 필요에 따라 에러를 호출한 쪽으로 전달
  }
}

// 디버깅용
console.log("API Client Base URL:", apiUrl);

export default apiClient;
