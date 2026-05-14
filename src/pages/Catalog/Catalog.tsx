import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, X } from "lucide-react";

import { Section } from "../../components/common/Section";
import CategoryHeader from "../../components/common/CategoryHeader";
import { CTABtn } from "../../components/common/CTABtn";
import { cdn } from "../../config/cdn";

const livingRoomImg = cdn("/images/home/collection-1.png");
const kitchenImg = cdn("/images/home/collection-2.png");


const catalogs = [
  {
    id: 1,
    subTitle: "Oaken",
    title:
      "Premium indoor flooring crafted to deliver the authentic beauty of real wood with enhanced strength and performance for modern interiors.",
    img: livingRoomImg,
    pdf: cdn("/pdf/PARQON BROCHURE NORDWOOD WT POV.pdf"),
  },
  {
    id: 2,
    subTitle: "NordWood",
    title:
      "Sustainable outdoor surfaces that transform the timeless beauty of wood into durable, weather-enduring landscapes and architectural elements.",
    img: kitchenImg,
    pdf: cdn("/pdf/PARQON BROCHURE NORDWOOD WT POV.pdf"),
  },
];

export const CatalogPage: React.FC = () => {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

  // LOCK BODY SCROLL WHEN MODAL OPENS
  useEffect(() => {
    if (selectedPDF) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [selectedPDF]);

  // ESC KEY CLOSE
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPDF(null);
      }
    };

    if (selectedPDF) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPDF]);

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", `${title}.pdf`);
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Section id="catalog" className="">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CategoryHeader
            title="Product Catalogs"
            description="Explore our curated catalogs designed to bring warmth, texture, and timeless materiality into modern architectural spaces."
            iconSrc={cdn("/icons/arrow-right.png")}
          />
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-16">
          
          {catalogs.map((catalog, index) => (
            <motion.div
              key={catalog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group relative overflow-hidden h-[300px] md:h-[500px]"
            >
              
              {/* IMAGE */}
              <img
                src={catalog.img}
                alt={catalog.subTitle}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                >
                  <span className="uppercase text-dynamic-body md:text-dynamic-h3 text-white">
                    {catalog.subTitle}
                  </span>

                  <h3 className="mt-3 text-dynamic-small md:text-dynamic-body text-white/80 leading-tight max-w-xl">
                    {catalog.title}
                  </h3>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-4 mt-8">
                    
                    <CTABtn
                      label="Download PDF"
                      variant="primary"
                      onClick={() =>
                        handleDownload(
                          catalog.pdf,
                          catalog.subTitle
                        )
                      }
                    />

                    <button
                      onClick={() => setSelectedPDF(catalog.pdf)}
                      className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PDF MODAL */}
      {selectedPDF && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedPDF(null);
            }
          }}
        >
          
          <div className="relative w-full max-w-6xl h-[90vh] bg-white overflow-hidden shadow-2xl">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedPDF(null)}
              className="absolute top-0 right-0 z-20 bg-black text-white w-10 h-10 flex items-center justify-center hover:bg-black/80 transition-all duration-300"
            >
              <X size={18} />
            </button>

            {/* PDF VIEWER */}
            <iframe
              src={`${selectedPDF}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogPage;