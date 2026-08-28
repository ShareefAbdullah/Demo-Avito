//library
import { useEffect, useState, useRef } from "react";

export const useOutsideAlerter = (initialVisible) => {
  const [isShown, setIsShown] = useState(initialVisible);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { ref, isShown, setIsShown };
};
