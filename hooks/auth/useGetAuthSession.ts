import { db } from "@/lib/db";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

function useGetAuthSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    db.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    db.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session;
}

export default useGetAuthSession;
