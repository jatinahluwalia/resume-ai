import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { formatBytes } from "~/lib/utils";

const MAX_SIZE = 20 * 1024 * 1024;

interface FileUploaderProps {
  onFileSelect: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0] || null;
    onFileSelect?.(file);
  }, []);
  const { getInputProps, getRootProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: { "application/pdf": [".pdf"] },
      maxSize: MAX_SIZE,
    });

  const file = acceptedFiles[0] || null;

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <input type="text" {...getInputProps()} />
        <div className="space-y-4 cursor-pointer">
          {file ? (
            <div
              className="uploader-selected-file"
              onClick={(e) => e.stopPropagation()}
            >
              <img src="/images/pdf.png" alt="pdf" className="size-10" />
              <div className="flex items-center space-x-3l">
                <div>
                  <p className="text-sm font-medium text-gray-700 truncate max-w-xs">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatBytes(file.size)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="p-2 cursor-pointer"
                onClick={(e) => onFileSelect?.(null)}
              >
                <img src="/icons/cross.svg" alt="remove" className="size-4" />
              </button>
            </div>
          ) : (
            <div>
              <div className="mx-auto size-16 flex items-center mb-2">
                <img src="/icons/info.svg" alt="upload" className="size-20" />
              </div>
              <p className="text-lg text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-lg text-gray-500">
                PDF (max {formatBytes(MAX_SIZE)})
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
