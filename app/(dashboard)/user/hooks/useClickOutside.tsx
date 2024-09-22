import { useEffect, useRef } from "react";

export function useClickOutside(
  closeHandler: () => void,
  listenCapturing = true
) {
  const ref = useRef<HTMLDivElement>();

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node))
          closeHandler();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [closeHandler, listenCapturing]
  );
  return ref;
}
