import MainNavigation from "../ui/MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <div className="pt-5"></div>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
