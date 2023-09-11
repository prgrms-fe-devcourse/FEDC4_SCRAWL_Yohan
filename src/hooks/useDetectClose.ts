import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState
} from "react";

const useDetectClose = (
  ref: RefObject<HTMLDivElement | null>,
  initialState: boolean
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const channelClickEvent = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", channelClickEvent);
    }

    return () => {
      window.removeEventListener("click", channelClickEvent);
    };
  }, [isOpen, ref]);
  return [isOpen, setIsOpen];
};

export default useDetectClose;
