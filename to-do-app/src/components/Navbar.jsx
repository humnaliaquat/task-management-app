export default function Navbar({ collapsed }) {
  return (
    <nav
      className={`fixed top-0 h-[75px] flex items-center justify-between  px-4   ${
        collapsed
          ? "left-18 w-[calc(100%-72px)]"
          : "left-64 w-[calc(100%-256px)]"
      }`}
    >
      <h1 className="welcome">Good afternoon James!</h1>
      <button className=" btn text-white px-4 py-1 rounded">Theme</button>
    </nav>
  );
}
