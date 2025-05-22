export default function MainContent({ children, collapsed }) {
  return (
    <main
      className={` ${
        collapsed
          ? "left-18 w-[calc(100%-72px)]"
          : "left-64 w-[calc(100%-256px)]"
      }`}
    >
      {children}
    </main>
  );
}
