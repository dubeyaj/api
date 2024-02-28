export default function Button({children, ...props}) {
  return (
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-red-500 text-red-100 hover:bg-red-600 hover:text-red-50"
      {...props}
    >
      {children}
    </button>
  );
}