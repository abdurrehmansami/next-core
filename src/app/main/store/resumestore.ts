// // app/(main)/store/resumeStore.ts
// import { action, createStore, thunk } from "easy-peasy";
// import { ResumeData } from "../../../types/resume";
// import { saveResumeData, getResumeData } from "../db";

// interface ResumeStoreModel {
//   resumeData: ResumeData;
//   setResumeData: action<ResumeStoreModel, ResumeData>;
//   saveResume: thunk<ResumeStoreModel, ResumeData>;
//   loadResume: thunk<ResumeStoreModel>;
// }

// const resumeStore = createStore<ResumeStoreModel>({
//   resumeData: {
//     personalInfo: { name: "", email: "", phone: "", address: "" },
//     education: [],
//     experience: [],
//     skills: [],
//   },
//   setResumeData: action((state, payload) => {
//     state.resumeData = payload;
//   }),
//   saveResume: thunk(async (actions, payload) => {
//     await saveResumeData(payload);
//     actions.setResumeData(payload);
//   }),
//   loadResume: thunk(async (actions) => {
//     const data = await getResumeData();
//     if (data) {
//       actions.setResumeData(data);
//     }
//   }),
// });

// export default resumeStore;
// app/(main)/store/resumeStore.ts
import { action, createStore, thunk, Action, Thunk } from "easy-peasy";
import { ResumeData } from "../../../types/resume";
import { saveResumeData, getResumeData } from "../db";

// Define the store model
export interface ResumeStoreModel {
  resumeData: ResumeData;
  setResumeData: Action<ResumeStoreModel, ResumeData>;
  saveResume: Thunk<ResumeStoreModel, ResumeData>;
  loadResume: Thunk<ResumeStoreModel>;
}

// Create the store
const resumeStore = createStore<ResumeStoreModel>({
  resumeData: {
    personalInfo: { name: "", email: "", phone: "", address: "" },
    education: [],
    experience: [],
    skills: [],
  },
  setResumeData: action((state, payload) => {
    state.resumeData = payload;
  }),
  saveResume: thunk(async (actions, payload) => {
    await saveResumeData(payload);
    actions.setResumeData(payload);
  }),
  loadResume: thunk(async (actions) => {
    const data = await getResumeData();
    if (data) {
      actions.setResumeData(data);
    }
  }),
});

export default resumeStore;
