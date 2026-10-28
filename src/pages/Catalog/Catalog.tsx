"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, X } from "lucide-react";

import { Section } from "../../components/common/Section";
import CategoryHeader from "../../components/common/CategoryHeader";
import { CTABtn } from "../../components/common/CTABtn";
import { cdn } from "../../config/cdn";
import { ProgressiveImg } from "../../components/common/ProgressiveImg";

import { BROCHURES } from "../../data/brochures";
import { useLeadForm } from "../../components/lead/LeadForm";

export const CatalogPage: React.FC = () => {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);
  const leadForm = useLeadForm();

  // LOCK BODY SCROLL
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

  // ESC CLOSE
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

  // DOWNLOAD FUNCTION
  const handleDownload = async (
    url: string,
    fileName: string
  ) => {
    try {
      const response = await fetch(url);

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = fileName;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, "_blank");
    }
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
            title="Brochures"
            description="Preview and download our brand brochures, designed to bring warmth, texture, and timeless materiality into modern architectural spaces."
            iconSrc={cdn("/icons/arrow-right.png")}
          />
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 2xl:gap-12">

          {BROCHURES.map((catalog, index) => (
            <motion.div
              key={catalog.brand}
              id={catalog.brand.toLowerCase()}
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
              <ProgressiveImg
                src={catalog.image}
                alt={`${catalog.title} brochure`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                wrapperClassName="w-full h-full"
                priority={index === 0}
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
                    {catalog.title}
                  </span>

                  <h3 className="mt-3 text-dynamic-small md:text-dynamic-body text-white/80 leading-tight max-w-xl">
                    {catalog.description}
                  </h3>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-4 mt-8">
                    {catalog.pdf ? (
                      <>
                        <CTABtn
                          label="Download PDF"
                          variant="primary"
                          onClick={() => handleDownload(catalog.pdf!, catalog.fileName ?? `${catalog.title}.pdf`)}
                        />

                        <button
                          onClick={() => setSelectedPDF(catalog.pdf!)}
                          aria-label={`Preview the ${catalog.title} brochure`}
                          className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <Eye size={16} />
                        </button>
                      </>
                    ) : (
                      <CTABtn
                        label="Request Brochure"
                        variant="primary"
                        onClick={() =>
                          leadForm.open({ kind: 'brochure', about: `${catalog.title} brochure`, source: 'Brochures page', details: [{ label: 'Brand', value: catalog.title }] })
                        }
                      />
                    )}
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