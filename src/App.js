import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
