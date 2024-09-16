import { getData } from "@/actions/todoActions";
import Todos from "@/components/Todos";

export default async function Home() {
  const data = await getData();
  return (
    <main className="felx text-black items-center justify-between">
      <Todos todos={data} />;
    </main>
  );
}
