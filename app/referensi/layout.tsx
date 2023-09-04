export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="justify-center inline-block max-w-xs text-center sm:max-w-md md:max-w-lg lg:max-w-5xl">
        {children}
      </div>
    </section>
  );
}
