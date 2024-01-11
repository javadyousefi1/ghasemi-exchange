import Header from "../components/Header";
const Layout = ({ children }) => {
  return (
    <div dir="rtl" className="">
      {children}
    </div>
  );
};

export default Layout;
