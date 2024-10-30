import Header from './components/Header/Header';
import OuterSidebar from './components/Sidebar/OuterSidebar';
import InnerSidebar from './components/Sidebar/InnerSidebar';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Layout({ children }) {
    return (
        <html lang="en">
        <body>
        <div className="app-layout">
            <Header/>
            <div className="main-content">
                <OuterSidebar/>
                <div className="content-area">
                    <InnerSidebar/>

                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
