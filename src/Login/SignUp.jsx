function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-customRed">
      <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center">CamChelin</h1>
        <p className="mb-4 text-center text-gray-600">
          신촌과 회기역 주변 대학가의 숨겨진 맛집을 캡슐맵에서 발견하세요!
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              아이디(이메일 주소)
            </label>
            <input
              id="email"
              type="email"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                required
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                👁️
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white rounded-md shadow bg-buttonPink hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            로그인
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">OR</p>
          <a
            href="/register"
            className="text-sm text-indigo-500 hover:underline"
          >
            아직 계정이 없으신가요? 가입해보세요!
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
