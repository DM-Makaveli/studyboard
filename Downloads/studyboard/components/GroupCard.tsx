import Link from "next/link";
import { Group } from "@/lib/data";

export default function GroupCard({ group }: { group: Group }) {
    const completedCount = group.tasks.filter((t) => t.done).length;

    return (
        <Link
            href={`/groups/${group.id}`}
            className="block rounded-lg border  p-4 hover:shadow-md transition-shadow"
        >
            <h3 className="text-lg font-semibold text-yellow-100">{group.name}</h3>
            <p className="text-sm text-yellow-100">{group.subject}</p>
            <div className="mt-2 flex justify-between text-sm text-yellow-100">
                <span>{group.memberCount} members</span>
                <span>
                    {completedCount}/{group.tasks.length} tasks done
                </span>
            </div>
        </Link>
    );
}