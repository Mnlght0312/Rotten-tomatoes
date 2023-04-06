import {Movies}  from "../component/Movies";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import  {PrivateComponent } from "../component/PrivateComponent";

export default function List() {
  const router = useRouter();
  const { loggedIn }: { loggedIn: boolean } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    }
  }, [loggedIn]);

  return loggedIn ? <Movies /> : <PrivateComponent />;
}
