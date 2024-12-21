import PassWord from "./Login/PassWord";
import SignUp from "./Login/SignUp";
import SignIn from "./Login/SignIn";
import NotFound from "./components/NotFound";
import Common from "./components/Common";
import { Routes, Route } from "react-router-dom";
import Brand from "./components/Brand";
import MyPage from "./MyPage/MyPage";
const App = () => {
  return (
    <>
      <Common />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/password" element={<PassWord />} />
        <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
