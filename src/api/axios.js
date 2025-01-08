import axios from "axios";
import { useNavigate } from "react-router-dom"; // 리다이렉트를 위해 필요

// 환경 변수에서 API URL 읽기
const apiUrl = import.meta.env.VITE_API_URL || "http://3.38.169.113";

// Axios 기본 설정
const apiClient = axios.create({
  baseURL: apiUrl, // 환경 변수에 정의된 API URL 사용
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터: Authorization 헤더 추가
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // localStorage에서 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더에 토큰 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("인증 오류 발생: 로그인이 필요합니다.");
      localStorage.removeItem("token"); // 인증 실패 시 토큰 제거
      window.location.href = "/login"; // 로그인 페이지로 리다이렉트
    }
    return Promise.reject(error); // 나머지 에러는 그대로 전달
  }
);


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
