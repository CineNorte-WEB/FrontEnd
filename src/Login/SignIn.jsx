import axios from "axios";
import { MdAttachEmail, MdLock, MdLockPerson, MdOutlineRestaurant } from "react-icons/md";
import { TbUser } from "react-icons/tb";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const [keyVisible, setKeyVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();

  // 비밀번호 보기 토글
  const toggleKeyVisibility = () => setKeyVisible((prev) => !prev);
  const toggleConfirmVisibility = () => setConfirmVisible((prev) => !prev);

  // 회원가입 요청 함수
  const onSubmit = async (data) => {
    const requestData = {
      email: data.email,
      password: data.password,
      nickname: data.nickname,
    };

    try {
      const response = await axios.post("/api/users/register", requestData);
      console.log("회원가입 성공:", response.data);
      alert("🎉 회원가입이 성공적으로 완료되었습니다!");
      navigate("/"); // 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert("❌ 회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-800">
      {/* 뒤로가기 버튼 */}
      <FaArrowLeft
        onClick={() => navigate("/")}
        className="absolute text-4xl text-white cursor-pointer left-8 top-8 hover:text-gray-300"
      />

      {/* 왼쪽 설명 섹션 */}
      <div className="flex flex-col items-start w-1/2 px-8">
        <h1 className="ml-32 text-white text-9xl font-petemoss">CamChelin</h1>
        <div className="mt-8 ml-12 space-y-12">
          <div>
            <div className="flex space-x-3">
              <img src="/images/flower.png" alt="스타" className="w-[75px] h-[75px]" />
              <p className="mt-4 text-5xl font-bold text-white font-yeonsung">
                캠슐랭 1스타
              </p>
            </div>
            <p className="mt-3 text-4xl text-white ml-16 font-yeonsung">
              가성비와 맛을 모두 잡은 실속 맛집
            </p>
          </div>
          {/* 추가 설명 */}
        </div>
      </div>

      {/* 회원가입 폼 */}
      <div className="w-[550px] h-[650px] px-12 py-8 mr-32 bg-white rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold text-center font-yeonsung">회원가입</h2>
        <form className="mt-5 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* 이메일 입력 */}
          <div>
            <p className="mb-2 text-lg font-bold text-gray-700 font-yeonsung">
              아이디(이메일 주소)
            </p>
            <div className="relative">
              <MdAttachEmail className="absolute text-2xl text-gray-500 left-3 bottom-3" />
              <input
                type="email"
                placeholder="이메일 주소를 입력해주세요."
                className="w-full px-12 py-3 border border-black rounded-lg font-yeonsung"
                {...register("email", {
                  required: "이메일은 필수 입력입니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "올바른 이메일 형식을 입력해주세요.",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm font-bold text-red-500 font-yeonsung">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div className="relative">
            <p className="mb-2 text-lg font-bold text-gray-700 font-yeonsung">비밀번호</p>
            <MdLock className="absolute text-2xl text-gray-500 left-3 bottom-3" />
            <input
              type={keyVisible ? "text" : "password"}
              placeholder="숫자 및 특수문자를 포함하여 8자 이상 작성해주세요."
              className="w-full px-12 py-3 border border-black rounded-lg font-yeonsung"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자 이상이어야 합니다.",
                },
              })}
            />
            {keyVisible ? (
              <FaEyeSlash
                onClick={toggleKeyVisibility}
                className="absolute text-2xl text-black top-3 right-4 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={toggleKeyVisibility}
                className="absolute text-2xl text-black top-3 right-4 cursor-pointer"
              />
            )}
          </div>
          {errors.password && (
            <p className="text-sm font-bold text-red-500 font-yeonsung">
              {errors.password.message}
            </p>
          )}

          {/* 비밀번호 확인 */}
          <div className="relative">
            <p className="mb-2 text-lg font-bold text-gray-700 font-yeonsung">
              비밀번호 확인
            </p>
            <MdLockPerson className="absolute text-2xl text-gray-500 left-3 bottom-3" />
            <input
              type={confirmVisible ? "text" : "password"}
              placeholder="입력한 비밀번호를 다시 한 번 입력해주세요."
              className="w-full px-12 py-3 border border-black rounded-lg font-yeonsung"
              {...register("passwordConfirm", {
                required: "비밀번호 확인은 필수입니다.",
                validate: (value) => value === password || "비밀번호가 일치하지 않습니다.",
              })}
            />
            {confirmVisible ? (
              <FaEyeSlash
                onClick={toggleConfirmVisibility}
                className="absolute text-2xl text-black top-3 right-4 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={toggleConfirmVisibility}
                className="absolute text-2xl text-black top-3 right-4 cursor-pointer"
              />
            )}
          </div>
          {errors.passwordConfirm && (
            <p className="text-sm font-bold text-red-500 font-yeonsung">
              {errors.passwordConfirm.message}
            </p>
          )}

          {/* 닉네임 입력 */}
          <div className="relative">
            <p className="mb-2 text-lg font-bold text-gray-700 font-yeonsung">닉네임</p>
            <TbUser className="absolute text-2xl text-gray-500 left-3 bottom-3" />
            <input
              type="text"
              placeholder="닉네임을 입력해주세요."
              className="w-full px-12 py-3 border border-black rounded-lg font-yeonsung"
              {...register("nickname", {
                required: "닉네임은 필수 입력입니다.",
                minLength: {
                  value: 2,
                  message: "닉네임은 최소 2자 이상이어야 합니다.",
                },
              })}
            />
            {errors.nickname && (
              <p className="text-sm font-bold text-red-500 font-yeonsung">
                {errors.nickname.message}
              </p>
            )}
          </div>

          {/* 가입 버튼 */}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-xl font-bold text-white bg-red-700 rounded-lg font-yeonsung hover:bg-red-600"
          >
            가입하여 나만의 맛집 찾기
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
