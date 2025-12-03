import { PARTNER } from "@/constant/partner";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="flex items-center justify-center gap-8 bg-linear-90 from-fuchsia-950 to-cyan-900">
      {PARTNER.map((items) => (
        <div key={items.id}>
          <Image
            className=""
            src={items.src}
            alt={items.alt}
            width={90}
            height={90}
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
