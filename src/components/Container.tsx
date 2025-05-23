export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-xl px-6 md:px-8 lg:px-12">
      {children}
    </div>
  );
}
