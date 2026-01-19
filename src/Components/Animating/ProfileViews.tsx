"use client";

import { FaEye } from "react-icons/fa";
import CountUp from "react-countup";
import useProfileViews from "@/hooks/useProfileViews";

const ProfileViews = () => {
  const views = useProfileViews();

  return (
    <div
      className="flex items-center gap-2 text-xs text-gray-300 
                 bg-black/40 backdrop-blur-md 
                 px-3 py-1 rounded-full 
                 border border-cyan-400/30
                 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
                 transition-all duration-300"
    >
      <FaEye className="text-cyan-400" />

      {views > 0 && (
        <CountUp start={0} end={views} duration={1.5} separator="," />
      )}

      <span>Profile Views</span>
    </div>
  );
};

export default ProfileViews;
