export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-2 md:py-4">
      <div className="justify-center inline-block max-w-xs text-center sm:max-w-md md:max-w-lg lg:max-w-4xl">
        {children}
      </div>
    </section>
  );
}
