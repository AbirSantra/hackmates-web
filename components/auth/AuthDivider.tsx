import React from "react";

const AuthDivider = () => {
  return (
    <div className="flex flex-row items-center justify-evenly gap-6 font-brand text-[10px] font-semibold text-zinc-500">
      <div className="w-full border-t border-dashed border-zinc-200"></div>
      OR
      <div className="w-full border-t border-dashed border-zinc-200"></div>
    </div>
  );
};

export default AuthDivider;