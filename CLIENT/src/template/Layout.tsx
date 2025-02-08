import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  content: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ content }) => {
  return (
    <div>
      <Sidebar />

      <div className="ml-24">
        <Header />
        <div className="main-content">
          <div className="h-auto">{content}</div>
          {/* This will render the content passed from other components */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
