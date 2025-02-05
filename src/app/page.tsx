export default function Home() {
  return (
    <div className="bg-responsive">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background/30">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* Your existing main content */}
          <h1 className="text-4xl font-bold">Portfolio</h1>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          {/* Your existing footer content */}
        </footer>
      </div>
    </div>
  );
}