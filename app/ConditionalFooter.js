"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer/Footer_section";

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Don't show footer on products page
  const hideFooter = pathname === '/Parker';
  
  if (hideFooter) return null;
  
  return <Footer />;
}