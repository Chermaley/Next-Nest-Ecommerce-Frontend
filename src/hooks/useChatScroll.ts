import { useEffect, useRef } from "react";

export const useChatScroll = (dep: any)  => {
  const ref = useRef<any>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}