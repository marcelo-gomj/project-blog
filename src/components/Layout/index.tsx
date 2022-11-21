import { ReactElement } from "react";
import {  Header } from "../Header-Layout";
// import { Footer } from "../Footer-Layout";

interface LayoutProp {
   children: ReactElement
}

export function Layout( { children }: LayoutProp ) {
   return (
      <>
         <Header />
         { children }
      </>
   )
}