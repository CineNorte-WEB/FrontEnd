import PassWord from "./Login/PassWord";
import SignUp from "./Login/SignUp";
import SignIn from "./Login/SignIn";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import MyPage from "./MyPage/MyPage";
import KaKaoMap from "./Map/KaKaoMap";
import Community from "./Community/Community";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/password" element={<PassWord />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/map" element={<KaKaoMap />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default App;
