import { forwardRef } from "react";

const Input = forwardRef(({ label, tag = "input", ...props }, ref) => {
  const Tag = tag;
  return (
    <>
      <label className="uppercase font-bold text-stone-500 text-sm">
        {label}
      </label>
      <Tag
        ref={ref}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 mt-1 mb-4"
        {...props}
      />
    </>
  );
});

export default Input;
