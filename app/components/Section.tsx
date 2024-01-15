interface Props {
  width: string;
  height: string;
  children: React.ReactNode;
}

export default function Section({ width, height, children }: Props) {
  return (
    <div
      className="p-5 shadow-lg bg-slate-100 "
      style={{ width: width, height: height }}
    >
      {children}
    </div>
  );
}
