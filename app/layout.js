import Header from './components/Header/Header';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <Header />
        </div>
      </body>
    </html>
  );
}
