import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/client'

import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";
import Login from "../pages/auth/login";
import Dashboard from "../pages/admin/dashboard";

export default function Index() {
  const [ session, loading ] = useSession()

  return (
  <>
  {!session && <>
      <Auth><Login/></Auth>
    </>}
    {session && <>
      <Admin><Dashboard></Dashboard></Admin>
    </>}
  </>
  );
}
