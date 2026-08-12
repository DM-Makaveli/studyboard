import GroupCard from "@/components/GroupCard";
import { getGroups } from "@/lib/data";

export default function Home() {
  const groups = getGroups();
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-yellow-500">Welcome to StudyBoard.</h1>
      <p className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </main>
  );
}
