import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PassWord = () => {
  const louting = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setServerError("");

    try {
      const response = await axios.post(
        "http://43.203.118.59:8080/users/findpw",
        {
          email: data.Email,
        }
      );

      alert("😎 이메일 전송 완료!");
    } catch (error) {
      // Handle different types of errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setServerError(
          error.response.data.message || "이메일 전송에 실패했습니다."
        );
      } else if (error.request) {
        // The request was made but no response was received
        setServerError(
          "서버와 연결할 수 없습니다. 네트워크 연결을 확인해주세요."
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        setServerError("오류가 발생했습니다. 다시 시도해주세요.");
      }
      console.error("Password recovery error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-rose-800">
      {/* 뒤로가기 버튼 */}
      <div className="p-8 bg-white rounded-lg shadow-md h-[550px] w-[500px]">
        {/* 비밀번호 찾기 헤더 */}
        <h1 className="mt-6 mb-6 text-5xl font-bold text-center font-nanum">
          비밀번호 찾기
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              type="email"
              className="block mt-12 text-xl font-bold text-gray-700 font-nanum"
            >
              이메일
            </label>
            <div className="relative flex mt-4">
              <MdEmail className="absolute text-2xl left-3 top-3 " />
              <input
                type="email"
                id="email"
                placeholder="이메일 주소를 입력해주세요."
                className="w-full px-10 py-3 border border-black rounded-lg shadow-md font-nanum focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                {...register("Email", {
                  required: "이메일을 입력해주세요!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "유효한 이메일 주소를 입력해주세요.",
                  },
                })}
              />
            </div>
          </div>
          <div className="mt-3 font-bold text-red-500 font-nanum">
            {errors.Email && errors.Email.message}
            {serverError && serverError}
          </div>
          <div className="relative flex">
            <FaPaperPlane className="absolute text-2xl text-white left-24 top-7" />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 mt-4 text-xl font-bold text-white duration-300 rounded-lg shadow-lg bg-rose-700 font-nanum hover:bg-red-500 disabled:opacity-50"
            >
              {isLoading ? "전송 중..." : "로그인 링크 보내기"}
            </button>
          </div>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 font-bold text-gray-600 font-nanum">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <p
          className="text-2xl font-bold text-center text-black underline transition cursor-pointer underline-offset-4 hover:text-gray-500 font-nanum"
          onClick={() => louting("/signin")}
        >
          새로운 계정 만들기
        </p>
        <div className="relative flex">
          <ImExit className="absolute text-2xl font-bold text-white top-10 left-20" />
          <button
            type="button"
            className="w-full pl-8 text-center py-3.5 mt-6 text-xl font-bold text-white transition duration-300 rounded-lg shadow bg-rose-800 font-nanum hover:bg-rose-600"
            onClick={() => louting("/")}
          >
            로그인 화면으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassWord;
