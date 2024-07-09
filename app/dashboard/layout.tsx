import Header from "./(components)/header";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main className="main_container flex-1 flex flex-col">
        { children }
      </main>
    </>
  );
}