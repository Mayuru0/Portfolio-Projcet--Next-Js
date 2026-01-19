// hooks/useProfileViews.ts
"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";

const useProfileViews = () => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const viewed = localStorage.getItem("profile_viewed");
    const docRef = doc(db, "profileStats", "views");

    const updateViews = async () => {
      const snap = await getDoc(docRef);

      if (!snap.exists()) {
        await setDoc(docRef, { count: 1 });
        setViews(1);
        localStorage.setItem("profile_viewed", "true");
        return;
      }

      if (!viewed) {
        await updateDoc(docRef, { count: increment(1) });
        setViews(snap.data().count + 1);
        localStorage.setItem("profile_viewed", "true");
      } else {
        setViews(snap.data().count);
      }
    };

    updateViews();
  }, []);

  return views;
};

export default useProfileViews;
