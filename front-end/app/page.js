import Image from "next/image";
import registerStudent from "./register-student/page";
import Link from "next/link";
import findStudent from "./find-student/page";

export default function Home() {
  return (
      <main>
          <h1 className={"font-bold text-center font-serif text-4xl"}>Hello</h1>
          <p className={"font-serif text-center text-lg"}>Welcome to my student database.</p>
          {/*Add two buttons one that will add a new student and one that shows all students in database*/}
          <div className={"flex justify-center m-2"}>
              <Link href={"/register-student"} className={"text-center"}>
                  <button className={"border-2 text-lg p-1.5"}>Register New Student</button>
              </Link>
          </div>
          <div className={"flex justify-center m-2"}>
              <Link href={"/find-student"} className={"text-center"}>
                  <button className={"border-2 text-lg p-1.5"}>Find A Student</button>
              </Link>
          </div>
      </main>
  );
}
