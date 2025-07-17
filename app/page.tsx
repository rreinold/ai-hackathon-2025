const baseUrl = '/ai-hackathon-2025';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <img
          className="dark:invert"
          src={`${baseUrl}/next.svg`}
          alt="Next.js logo"
          width={180}
          height={38}
          style={{ display: 'block' }}
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx!
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src={`${baseUrl}/file.svg`}
            alt="File icon"
            width={16}
            height={16}
            style={{ display: 'inline-block' }}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src={`${baseUrl}/window.svg`}
            alt="Window icon"
            width={16}
            height={16}
            style={{ display: 'inline-block' }}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            src={`${baseUrl}/globe.svg`}
            alt="Globe icon"
            width={16}
            height={16}
            style={{ display: 'inline-block' }}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
