// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from "firebase/firestore";
import type { User } from "firebase/auth";

// Debug: Check if environment variables are loaded
console.log("Environment variables check:");
console.log("API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
console.log("Auth Domain:", import.meta.env.VITE_FIREBASE_AUTH_DOMAIN);
console.log("Project ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAVZmEM8PJhnHdks8KFx2dtDkyiKXUT9X4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "epic-signup-auth.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "epic-signup-auth",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "epic-signup-auth.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "743836494256",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:743836494256:web:31097062c72f463e0d8e75",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-X3P08GLP12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;
if (typeof window !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    // Ignore analytics errors in unsupported environments
  }
}
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Contact form interface
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp?: any;
  source?: string; // To track which page the form was submitted from
}

// Authentication functions
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { user: result.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Firestore functions for contact forms
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      ...formData,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getRecentContactSubmissions = async (limitCount: number = 10) => {
  try {
    const q = query(
      collection(db, "contactSubmissions"),
      orderBy("timestamp", "desc"),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    const submissions = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return { submissions, error: null };
  } catch (error: any) {
    return { submissions: [], error: error.message };
  }
};

export { auth, db, analytics }; 