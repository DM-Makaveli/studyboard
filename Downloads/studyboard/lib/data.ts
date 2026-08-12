export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type Member = {
  id: string;
  name: string;
};

export type Group = {
  id: string;
  name: string;
  subject: string;
  memberCount: number;
  members: Member[];
  tasks: Task[];
};

// Static mock data — will be replaced by real database queries in Week 5.
const groups: Group[] = [
  {
    id: "1",
    name: "Data Structures Study Circle",
    subject: "Computer Science",
    memberCount: 5,
    members: [
      { id: "m1", name: "Jam" },
      { id: "m2", name: "Sam" },
      { id: "m3", name: "Paul" },
      { id: "m4", name: "Djanea" },
      { id: "m5", name: "Kenji" },
    ],
    tasks: [
      { id: "t1", title: "Review binary trees", done: false },
      { id: "t2", title: "Practice linked list problems", done: true },
      { id: "t3", title: "Summarize Big-O notation", done: false },
    ],
  },
  {
    id: "2",
    name: "Thermodynamics Crew",
    subject: "Physics",
    memberCount: 3,
    members: [
      { id: "m6", name: "JE" },
      { id: "m7", name: "Jericho" },
      { id: "m8", name: "Jeremy" },
    ],
    tasks: [
      { id: "t4", title: "Solve entropy problem set", done: false },
      { id: "t5", title: "Read Chapter 4", done: false },
    ],
  },
  {
    id: "3",
    name: "Philippine History Readers",
    subject: "History",
    memberCount: 8,
    members: [
      { id: "m9", name: "Joy" },
      { id: "m10", name: "Jack" },
      { id: "m11", name: "Paul" },
      { id: "m12", name: "Nheiji" },
      { id: "m13", name: "Kirt" },
      { id: "m14", name: "Zywin" },
      { id: "m15", name: "Drei" },
      { id: "m16", name: "Aly" },
    ],
    tasks: [
      { id: "t6", title: "Outline Chapter 2 discussion", done: true },
      { id: "t7", title: "Prepare debate points", done: false },
      { id: "t8", title: "Watch assigned documentary", done: true },
    ],
  },
];

export function getGroups(): Group[] {
  return groups;
}

export function getGroupById(id: string): Group | undefined {
  return groups.find((group) => group.id === id);
}

export function getTasksByGroupId(id: string): Task[] {
  return getGroupById(id)?.tasks ?? [];
}

export function getMembersByGroupId(id: string): Member[] {
  return getGroupById(id)?.members ?? [];
}