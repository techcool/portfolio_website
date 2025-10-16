"use client";
import React, { useState, useCallback, useMemo } from "react";

export default function FileUploadDropzone({
  file,
  onFileSelect,
  onFileRemove,
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const allowedFileTypesDisplay = useMemo(
    () => "PDF, DOC, DOCX, JPG, JPEG, PNG",
    []
  );

  const maxSizeDisplay = useMemo(() => "25 MB", []);

  //Handle file drop

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles && droppedFiles.length > 0) {
      const mockEvent = {
        target: {
          files: droppedFiles,
          value: "",
        },
      };
      onFileSelect(mockEvent);
    }
  }, [onFileSelect]);

  //Handle drag events

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleZoneClick = () => {
    document.getElementById("attachment-input").click();
  };

  if (file) {
    return (
      <div className="p-3 border border-green-500 rounded-lg bg-green-50 flex justify-between items-center text-sm">
        <span className="truncate">
          ✅ File Attached: **{file.name}** ({Math.round(file.size / 1024)} KB)
        </span>
        <button
          type="button"
          onClick={onFileRemove}
          className="text-red-600 hover:text-red-800 ml-4 font-bold cursor-pointer" 
        >
          Remove
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        className={`border-2 mb-5 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragOver
            ? "border-indigo-500 bg-indigo-50"
            : "border-gray-300 bg-white"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleZoneClick}
      >
        <p className="text-gray-400 text-sm mb-1 msg">
          {" "}
          **Drag & drop file here** or **Click to upload**
        </p>
        <p className="msg">
          {allowedFileTypesDisplay} only | Max size: {maxSizeDisplay}
        </p>

        {/* Hidden input to trigger file selection */}
        <input
          type="file"
          id="attachment-input"
          name="attachements"
          accept=".pdf,.doc,.docx,image/*"
          onChange={onFileSelect}
          className="hidden"
          
        />
      </div>
    </>
  );
}
