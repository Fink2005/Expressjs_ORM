import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  content: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ content }) => {
  return (
    <div>
      <Sidebar />

      <div className="ml-32">
        <Header />
        <div className="main-content">
          <div>{content}</div>
          {/* This will render the content passed from other components */}
        </div>

        <footer>
          <p>Footer content</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
