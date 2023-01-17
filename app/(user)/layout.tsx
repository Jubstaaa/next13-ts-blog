import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400 flex flex-col min-h-screen">
          <div className="grow">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
