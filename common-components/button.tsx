export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`flex items-center justify-center bg-transparent border-solid border-2 border-primary rounded-md cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
