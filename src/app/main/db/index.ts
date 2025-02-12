// app/(main)/db/index.ts
import { openDB } from "idb";

const DB_NAME = "ResumeBuilderDB";
const STORE_NAME = "resumeData";

const DbPromise = async () => {
  // if (typeof window === "undefined") return null; // Prevent execution on the server

  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
};

export const saveResumeData = async (data: any) => {
  const db = await DbPromise();
  if (!db) return; // Avoid execution on the server
  await db.put(STORE_NAME, { id: "current", ...data });
};

export const getResumeData = async () => {
  const db = await DbPromise();
  if (!db) return null; // Avoid execution on the server
  return db.get(STORE_NAME, "current");
};
// "use client"; // Ensures this file runs only on the client side

// import { openDB } from "idb";

// const DB_NAME = "ResumeBuilderDB";
// const STORE_NAME = "resumeData";

// const getDB = async () => {
//   if (typeof window === "undefined") return null; // Prevent execution on the server

//   return openDB(DB_NAME, 1, {
//     upgrade(db) {
//       if (!db.objectStoreNames.contains(STORE_NAME)) {
//         db.createObjectStore(STORE_NAME, { keyPath: "id" });
//       }
//     },
//   });
// };

// export const saveResumeData = async (data: any) => {
//   const db = await getDB();
//   if (!db) return; // Prevent errors on the server
//   await db.put(STORE_NAME, { id: "current", ...data });
// };

// export const getResumeData = async () => {
//   const db = await getDB();
//   if (!db) return null;
//   return db.get(STORE_NAME, "current");
// };
