import axios from "axios";

const apiUrl = "/api"; // 프록시를 통해 백엔드와 통신
const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터: Authorization 헤더 추가
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // localStorage에서 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더에 토큰 추가
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 401 에러 처리
apiClient.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("인증 오류 발생: 로그인이 필요합니다.");
      localStorage.removeItem("accessToken"); // 인증 실패 시 토큰 제거
      localStorage.removeItem("refreshToken"); // refreshToken도 제거
      window.location.href = "/login"; // 로그인 페이지로 리다이렉트
    }
    return Promise.reject(error); // 나머지 에러는 그대로 전달
  }
);

// 데이터 가져오기 함수
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
