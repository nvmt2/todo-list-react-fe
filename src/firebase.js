import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Web app firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBlJ9TInNrnT5KGtYtyJkFeBLVNqOccWiU',
  authDomain: 'todo-list-firebase-271ad.firebaseapp.com',
  databaseURL: 'https://todo-list-firebase-271ad-default-rtdb.firebaseio.com',
  projectId: 'todo-list-firebase-271ad',
  storageBucket: 'todo-list-firebase-271ad.appspot.com',
  messagingSenderId: '118120703277',
  appId: '1:118120703277:web:6026dc745e42a1db75dfa4',
  measurementId: 'G-H3C6YR5B80',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Database name
const DATABASE_NAME = {
  TASKS: 'tasks',
  TODOS: 'todos',
};

export { db, DATABASE_NAME };
