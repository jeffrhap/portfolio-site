import { Outlet } from "react-router-dom";
import Experience from "../components/experience/Experience.component";

export default function Layout({ children }: any) {
  return (
    <>
      <Outlet />
      <Experience />
    </>
  );
}
