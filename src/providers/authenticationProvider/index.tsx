"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useAuthentication from "../../guard/authentication/useAuthentication";

const AuthenticationProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const authentication = useAuthentication();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Boolean(authentication) === false) {
      if (pathname !== "/sign-in") {
        router.push("/login");
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  if (loading) {
    return <div>loading in AuthenticationProvider</div>;
  }

  return <div>{children}</div>;
};

export default AuthenticationProvider;
