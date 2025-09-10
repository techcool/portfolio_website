"use client";

import React, { useState } from "react";
import ApplicationModal from "./ApplicationModal";
import CircleButton from "@/ui/CircleButton";
import Portal from "../layouts/Portal";

export default function ApplicationModalWrapper({ job }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CircleButton
        link="services"
        label="Apply This Position"
        position="left"
        variant="light"
        modal="true"
        onClick={() => setIsModalOpen(true)}  
      />

      {isModalOpen && (
        <Portal>
          <ApplicationModal
            job={job}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Portal>
      )}
    </>
  );
}
