import Link from "next/link";

function Navbar() {
  return (
    <div className="h-[10vh] w-full bg-gray-800">
      <div className="container text-white flex h-full justify-between items-center mx-auto">
        <h1 className="text-3xl ">
          <Link href={"/"}> Logo</Link>
        </h1>
        <div className="flex gap-x-5">
          <Link href={"/client"}>Client</Link>
          <Link href={"/server"}>Server</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
