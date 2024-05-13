import { currentYear } from "@/stores/dateStore";
import { useStore } from "@nanostores/react";

export const FooterYear = () => {
  const year = useStore(currentYear);
  return (
    <>
      <span className="text-xs md:text-sm lg:text-base">
        ©{year} Gihay Initiative
      </span>
    </>
  );
};
