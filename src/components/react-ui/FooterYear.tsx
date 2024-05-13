import { currentYear } from "@/stores/dateStore";
import { useStore } from "@nanostores/react";

export const FooterYear = () => {
  const year = useStore(currentYear);
  return (
    <>
      <span>©{year} Gihay Initiative</span>
    </>
  );
};
