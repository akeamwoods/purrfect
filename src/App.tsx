import { Header } from "components/Header/Header";
import { Loading } from "components/Loading/Loading";
import { Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const UploadPage = lazy(() =>
  import("./pages/UploadPage/UploadPage").then((module) => ({
    default: module.UploadPage,
  })),
);

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage").then((module) => ({
    default: module.HomePage,
  })),
);

const App = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <Header onLogoClick={handleLogoClick} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
