import Header from "@/components/Header";
import List from "./List";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="max-w-[72rem] w-[100%] min-h-[100dvh] mx-[auto] border-r border-l border-solid border-[#eee]">
      <Header />
      <main className="">
        <section></section>
        <section></section>
        <List></List>
      </main>
      <Footer />
    </div>
  );
}
