import Link from "next/link";
import React from "react";

const TopItem = ({ href, text, active}) => {
  
  return (
    <Link href={{
        pathname: href
      }} className={`top__link ${active? "active" : ""}`}>
      {text}
    </Link>
  )
}

export default TopItem