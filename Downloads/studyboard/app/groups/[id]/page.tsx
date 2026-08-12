import { notFound } from "next/navigation";
import TaskItem from "@/components/TaskItem";
import { getGroupById, getMembersByGroupId, getTasksByGroupId } from "@/lib/data";

export default async function GroupDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const group = getGroupById(id);

    if (!group) {
        notFound();
    }

    const tasks = getTasksByGroupId(group.id);
    const members = getMembersByGroupId(group.id);

    return(
        <div>
            <h1 className="text-4xl font-bold text-yellow-600">{group.name}</h1>
            <p className="mt-2 text-sm text-yellow-600">{group.subject}</p>

            <div className="mt-8">
                <h2 className="mb-4 text-xl font-semibold text-yellow-700">Members</h2>
                {members.length === 0 ? (
                    <p className="text-sm text-yellow-300">No members yet.</p>
                ) : (
                    <ul className="flex flex-wrap gap-2">
                        {members.map((member) => (
                            <li key={member.id} className="rounded-md px-3 py-2 text-sm text-yellow-800">
                                {member.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="mt-8">
                <h2 className="mb-4 text-xl font-semibold text-yellow-700">Tasks</h2>
                {tasks.length === 0 ? (
                    <p className="text-sm text-yellow-300">No tasks yet.</p>
                ) : (
                    <ul className="space-y-2 text-yellow-200">
                        {tasks.map((task) => (
                            <TaskItem key={task.id} task={task} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}