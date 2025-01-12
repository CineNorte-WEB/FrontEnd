import axios from "axios";
import { MdOutlinePermIdentity } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 상태

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 비밀번호 표시 토글
  const showPassword = () => {
    setPassword((prev) => !prev);
  };

  // 로그인 요청 함수

  const onSubmit = async (data) => {
    try {
      // API 호출
      const response = await axios.post("/api/login", {
        email: data.email,
        password: data.password,
      });

      // 서버 응답 확인
      console.log("로그인 응답 데이터:", response.data);

      if (response.data.message === "success") {
        // email, nickname, token 저장
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("nickname", response.data.nickname);
        localStorage.setItem("token", response.data.token); // 추가

        console.log("토큰 저장:", response.data.token);
        navigate("/map"); // 성공 시 /map 페이지로 이동
      } else {
        setErrorMessage("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("로그인 요청 실패:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "로그인에 실패했습니다. 다시 시도해주세요."
      );
    }
  };

  return (
    <div className="flex items-center justify-end min-h-screen bg-rose-800">
      <div className="mx-12">
        <p className="text-5xl text-white font-yeonsung">
          신촌과 회기역 주변 대학가의
        </p>
        <p className="text-5xl text-white font-yeonsung">
          숨겨진 맛집을 캠슐랭에서 발견하세요!
        </p>
        <div className="flex mt-12 space-x-4">
          <img src="/images/연대.png" alt="연세대학교" className="w-32 h-32" />
          <img
            src="/images/서강대.png"
            alt="서강대학교"
            className="w-32 h-32"
          />
          <img
            src="/images/이대.png"
            alt="이화여자대학교"
            className="w-32 h-32"
          />
        </div>
        <div className="flex ml-14 space-x-7">
          <img
            src="/images/시립대.png"
            alt="서울시립대학교"
            className="w-32 h-32"
          />
          <img
            src="/images/경희대.png"
            alt="경희대학교"
            className="w-32 h-32"
          />
          <img
            src="/images/외대.png"
            alt="한국외국어대학교"
            className="w-32 h-32"
          />
        </div>
        <div className="flex mt-12 space-x-4 ml-28">
          <img
            src="/images/flower.png"
            alt="스타"
            className="w-[100px] h-[100px]"
          />
          <img
            src="/images/flower.png"
            alt="스타"
            className="w-[100px] h-[100px]"
          />
          <img
            src="/images/flower.png"
            alt="스타"
            className="w-[100px] h-[100px]"
          />
        </div>
        <h1 className="font-normal text-white ml-36 text-8xl font-petemoss">
          CamChelin
        </h1>
      </div>
      <div className="p-6 mr-48 bg-white rounded-lg shadow-lg h-[600px] w-[500px]">
        <h1 className="mt-3 mb-5 font-normal text-center text-8xl font-petemoss">
          CamChelin
        </h1>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <p className="ml-3 font-bold font-yeonsung">아이디</p>
          <div className="relative">
            <MdOutlinePermIdentity className="absolute mx-3 mt-3 text-2xl" />
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "올바른 이메일 주소를 입력하세요.",
                pattern: {
                  value: /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    "올바르지 않은 이메일 주소입니다. 다시 입력해주세요!",
                },
              })}
              placeholder="아이디(이메일 주소)"
              className="block w-full px-10 py-3 mt-1 border border-black rounded-md shadow-md font-yeonsung focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="mt-2 text-red-500 font-yeonsung">
                {errors.email.message}
              </p>
            )}
          </div>
          <p className="mb-3 ml-3 font-bold font-yeonsung">비밀번호</p>
          <div className="relative mb-7">
            <IoIosLock className="absolute mt-3 ml-3 text-2xl" />
            <input
              id="password"
              type={password ? "text" : "password"}
              {...register("password", {
                required: "비밀번호를 입력해주세요!",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자리 이상이어야 합니다.",
                },
              })}
              placeholder="비밀번호"
              className="block w-full px-10 py-3 mt-1 border border-black rounded-md shadow-md font-yeonsung focus:border-indigo-500 focus:ring-indigo-500"
            />
            {password ? (
              <IoMdEyeOff
                onClick={showPassword}
                className="absolute text-2xl cursor-pointer bottom-3 right-4"
              />
            ) : (
              <FaEye
                onClick={showPassword}
                className="absolute text-2xl cursor-pointer bottom-3 right-4"
              />
            )}
            {errors.password && (
              <p className="mt-2 text-red-500 font-yeonsung">
                {errors.password.message}
              </p>
            )}
          </div>
          {errorMessage && (
            <p className="text-red-500 font-yeonsung">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 text-2xl font-bold text-white border border-white rounded-md shadow-lg font-yeonsung bg-rose-700 hover:bg-rose-400"
          >
            로그인
          </button>
        </form>
        <div className="flex mt-4 text-center">
          <hr className="flex-grow border-gray-500" />
          <p className="text-xl font-bold text-gray-600 font-yeonsung">OR</p>
          <hr className="flex-grow border-gray-500" />
        </div>
        <p
          className="block mt-3 font-bold text-center cursor-pointer font-yeonsung hover:underline"
          onClick={() => navigate("/password")}
        >
          비밀번호를 잊으셨나요?
        </p>
        <div className="relative flex mt-5">
          <FaUserGraduate className="ml-3 text-2xl" />
          <p className="absolute block text-xl font-bold text-black left-12 font-yeonsung">
            아직 계정이 없으신가요?
          </p>
          <p
            onClick={() => navigate("/signin")}
            className="absolute font-bold cursor-pointer right-8 text-rose-400 hover:underline hover:text-rose-600 font-yeonsung"
          >
            지금, 바로 가입해보세요!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
