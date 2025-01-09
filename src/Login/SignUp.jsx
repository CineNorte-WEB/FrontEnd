import { MdAttachEmail } from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { MdLock } from "react-icons/md";
import { MdLockPerson } from "react-icons/md";
import { TbUser } from "react-icons/tb";
import { MdOutlineRestaurant } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { authApi } from "../api/authApi";
import { MdOutlinePermIdentity } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await authApi.login({
        email: data.name,
        password: data.password,
      });
      console.log("로그인 성공:", response);
      navigate("/map");
    } catch (error) {
      console.error("로그인 실패:", error);

      // HTTP 상태 코드 에러 처리
      if (error.response) {
        switch (error.response.status) {
          case 400:
            alert("이메일 또는 비밀번호 형식이 올바르지 않습니다.");
            return;
          case 401:
            alert("이메일 또는 비밀번호가 일치하지 않습니다.");
            return;
          case 403:
            alert("접근 권한이 없습니다.");
            return;
          case 404:
            alert("등록되지 않은 계정입니다.");
            return;
          case 429:
            alert(
              "너무 많은 로그인 시도가 있었습니다. 잠시 후 다시 시도해주세요."
            );
            return;
          case 500:
            alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
            return;
        }
      }

      // 계정 관련 에러 처리
      if (error.code) {
        switch (error.code) {
          case "ACCOUNT_LOCKED":
            alert("계정이 잠겼습니다. 관리자에게 문의하세요.");
            return;
          case "ACCOUNT_DISABLED":
            alert("비활성화된 계정입니다. 관리자에게 문의하세요.");
            return;
          case "EMAIL_NOT_VERIFIED":
            alert("이메일 인증이 필요합니다. 이메일을 확인해주세요.");
            return;
          case "INVALID_CREDENTIALS":
            alert("잘못된 로그인 정보입니다. 다시 확인해주세요.");
            return;
        }
      }

      // 토큰 에러 처리
      if (error.name === "TokenError") {
        switch (error.message) {
          case "TOKEN_EXPIRED":
            alert("인증이 만료되었습니다. 다시 로그인해주세요.");
            return;
          case "INVALID_TOKEN":
            alert("유효하지 않은 인증입니다. 다시 로그인해주세요.");
            return;
          case "MISSING_TOKEN":
            alert("인증 정보가 없습니다. 다시 로그인해주세요.");
            return;
        }
      }

      // 네트워크 에러 처리
      if (error.message) {
        switch (error.message) {
          case "TIMEOUT_ERROR":
            alert("요청 시간이 초과되었습니다. 다시 시도해주세요.");
            return;
          case "NETWORK_ERROR":
            alert("네트워크 연결을 확인해주세요.");
            return;
          case "CONNECTION_REFUSED":
            alert("서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.");
            return;
          default:
            alert("로그인에 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
      }
    }
  };

  const showPassword = () => {
    setPassword((prev) => !prev);
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
        <div className="flex pl-16 mt-10 space-x-6">
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
        <div className="flex mt-5 ml-16 space-x-7">
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
        <div className="flex mt-12 ml-24 space-x-8">
          <img
            src="/images/flower.png"
            alt="아이콘"
            className="w-[100px] h-[100px] mt-3"
          />
          <img
            src="/images/flower.png"
            alt="아이콘"
            className="w-[100px] h-[100px] mt-3"
          />
          <img
            src="/images/flower.png"
            alt="아이콘"
            className="w-[100px] h-[100px] mt-3"
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
            <MdOutlinePermIdentity className="absolute mx-3 mt-3 text-2xl font-yeonsung" />
            <input
              id="email"
              type="email"
              {...register("name", {
                required: "올바른 이메일 주소를 입력하세요.",
                pattern: {
                  value: /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    "올바르지 않은 이메일 주소입니다. 다시 입력해주세요!",
                },
              })}
              placeholder="아이디(이메일 주소)"
              className="block w-full px-10 py-3 mt-1 border border-black rounded-md shadow-md font-yeonsung mpt focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <div className="relative mb-7">
              <p className="mb-3 ml-2 font-bold font-yeonsung">비밀번호</p>
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
                  validate: {
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "영어 대문자는 반드시 1개 이상의 문자로 포함되어야 합니다!",
                    hasNumber: (value) =>
                      /[0-9]/.test(value) ||
                      "숫자는 반드시 1개 이상 포함되어야 합니다!",
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*]/.test(value) ||
                      "특수기호는 반드시 1개 이상의 문자로 포함되어야 합니다!",
                  },
                })}
                placeholder="비밀번호"
                className="block w-full px-10 py-3 mt-1 border border-black rounded-md shadow-md m font-yeonsung focus:border-indigo-500 focus:ring-indigo-500"
              />
              {errors.password && (
                <p className="mt-2 font-bold text-red-500 font-yeonsung">
                  {errors.password.message}
                </p>
              )}

              {password ? (
                <IoMdEyeOff
                  onClick={showPassword}
                  className="absolute text-2xl text-black transform cursor-pointer top-12 right-4"
                />
              ) : (
                <FaEye
                  onClick={showPassword}
                  className="absolute text-2xl text-black transform cursor-pointer top-12 right-4"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-2xl font-bold text-white border border-white rounded-md shadow-lg font-yeonsung bg-rose-700 hover:bg-rose-400 focus:outline focus:ring focus:ring-offset-2 focus:ring-white"
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
            className="absolute font-bold right-8 text-rose-400 hover:underline hover:text-rose-600 font-yeonsung"
          >
            지금, 바로 가입해보세요!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
