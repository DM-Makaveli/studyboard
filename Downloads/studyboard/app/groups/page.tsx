import GroupCard from "@/components/GroupCard";
import { getGroups } from "@/lib/data";

export default function GroupsPage() {
    const groups = getGroups();
    
    return(
        <div>
            <h1 className="text-4xl font-bold text-yellow-800">All Groups</h1>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {groups.map((group) => (
                    <GroupCard key={group.id} group={group} />
                ))}
            </div>
        </div>
    );
}