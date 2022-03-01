export default function Home() {
  return (
    <div>
      <h1 className="mt-16 mb-5 font-bold text-3xl">LIST OF TEAMS</h1>
      <section>
        <span className="text-lg">There are teams</span>
        <button className="border-none text-center no-underline inline-block font-bold text-base rounded cursor-pointer ml-1 bg-gradient-to-b from-btn-linear-first to-btn-linear-second py-0.5 px-2">
          Add
        </button>
      </section>
    </div>
  );
}
