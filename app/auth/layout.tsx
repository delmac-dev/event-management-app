
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 flex_center">

      </header>
      <main className="w-full min-h-screen flex_center">
        { children }
      </main>
      <footer className="fixed bottom-0 left-0 w-full h-16 flex_center">
        <p className="text-sm font-medium">CampusEvents &copy; 2024</p>
      </footer>
    </>
  );
}