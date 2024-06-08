import { Link } from "@nextui-org/react";
import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import Header from "@/components/header";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import styles from "../styles/layout-default.module.scss"
// import ControllerCard from "@/components/controller-card";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { theme, setTheme } = useTheme();

  useEffect(()=>{
    console.log(theme)
  }, [])


  return (
    <div style={{padding:"1vw", height:"100vh",}}>
      <Head />
      <Header></Header>
      <main className={styles.container}>
        {/* <ControllerCard></ControllerCard> */}
        {children}
      </main>
      
    </div>
  );
}
