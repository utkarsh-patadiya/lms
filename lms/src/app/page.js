import Image from "next/image";
import Header from "./components/Header";
import { ReactElement } from "react";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}
