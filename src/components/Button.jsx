export default function Button({ children, ...props }) {
  return (
    <button
      type="button"
      className="bg-stone-700 hover:bg-stone-600 text-stone-400 hover:text-stone-50 py-2 px-4 rounded mb-8"
      {...props}
    >
      {children}
    </button>
  );
}
