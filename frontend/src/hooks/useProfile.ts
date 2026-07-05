import { useEffect, useState } from "react";
import { profile as bundled, type Profile } from "../data/profile";

/**
 * Renders instantly from the bundled snapshot, then refreshes from
 * GET /api/profile when the backend is reachable.
 */
export function useProfile(): Profile {
  const [profile, setProfile] = useState<Profile>(bundled);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/profile", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.name === "string") setProfile(data);
      })
      .catch(() => {
        /* offline or static preview — bundled data is already rendered */
      });
    return () => controller.abort();
  }, []);

  return profile;
}
