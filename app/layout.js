import Header from './components/Header/Header';
import OuterSidebar from './components/Sidebar/OuterSidebar';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Layout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/public/favicon.ico" />
            <title>Legislate</title>
        </head>
        <body>
        <div className="app-layout">
            <Header/>
            <div className="container">
                <OuterSidebar/>

            </div>
        </div>
        </body>
        </html>
    );
}
