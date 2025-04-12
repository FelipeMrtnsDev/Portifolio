import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24"> 
        {children}
      </main>
    </>
  );
}
