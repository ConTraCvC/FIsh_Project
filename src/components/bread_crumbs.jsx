import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BasicBreadcrumbs () {

  const { pathname } = useRouter();

  return (
    <div style={{position:"relative", color:"white", left:"10rem", display:"flex"}}>
      <a style={{marginRight:"10px"}} href='/'>Home</a>
      <p style={{marginRight:"10px"}}>&rarr;</p>
      <Link href={pathname}> {pathname}</Link>
    </div>
  );
}