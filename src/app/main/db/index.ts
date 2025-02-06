// app/(main)/db/index.ts
import { openDB } from "idb";

const DB_NAME = "ResumeBuilderDB";
const STORE_NAME = "resumeData";

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    }
  },
});

export const saveResumeData = async (data: any) => {
  const db = await dbPromise;
  await db.put(STORE_NAME, { id: "current", ...data });
};

export const getResumeData = async () => {
  const db = await dbPromise;
  return db.get(STORE_NAME, "current");
};
