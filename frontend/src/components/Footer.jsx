// Simple footer at bottom of page

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-0">
        <p>© {new Date().getFullYear()} GainMart Supplements Center.</p>
        <p>Student project .</p>
      </div>
    </footer>
  );
}
