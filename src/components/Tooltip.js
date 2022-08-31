export const Tooltip = ({ 
  message, children 
}) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-neutral-700 whitespace-no-wrap bg-neutral-200 shadow-lg rounded-md">{message}</span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-neutral-200"></div>
      </div>
    </div>
  );
};
