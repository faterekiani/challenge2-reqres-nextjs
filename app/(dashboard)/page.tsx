import TotalUserBox from "./user/_components/TotalUserBox";

export default function Home() {
  return (
    <main className="flex gap-8">
      <TotalUserBox />
      <TotalUserBox />
    </main>
  );
}
