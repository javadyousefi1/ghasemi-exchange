import Header from "../components/Header";
const Layout = ({ children }) => {
  return (
    <div dir="rtl" className="container px-4 mx-auto">
      {children}
    </div>
  );
};

export default Layout;
