interface Props {
  children: React.ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <div className="text-slate-950 shadow-lg p-6 w-full h-full mx-auto bg-slate-100  self-center ">
      {children}
    </div>
  );
}
