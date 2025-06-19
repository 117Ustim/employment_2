
"use client";


import styles from "./page.module.css";
import { useEffect, useState } from "react";
import {motion } from "framer-motion";
import Menu from "../app/comp/main/menu/Menu"
import Main from '../app/comp/main/Main'
import Advantages from './comp/advantages/Advantages'
import Company from "./comp/company/Сompany";
import Footer from '../app/comp/footer/Footer'
import Services from "./comp/services/Services";
import Team from "./comp/team/Team";





export default function Home() {

 


  const sections = [
    { id: "main", component: <Main /> },
    { id: "advantages", component: <Advantages/> },
    { id: "company", component: <Company/> },
     { id: "services", component: <Services/>},
     { id: "team", component: <Team/>},
    { id: "footer", component: <Footer /> },
  ];

  return (
    <>
     
          <motion.div
            key="page"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.8 }}
          >
            <Menu /> 
            <div className={styles.wrapper}>
              {sections.map(({ id, component }) => (
                <motion.section
                  key={id}
                  id={id}
                  className={styles.section}
                  // initial={{ opacity: 0, y: 100 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {component}
                </motion.section>
              ))}
            </div>
          </motion.div>
        {/* )} */}
     
    </>
  );
}