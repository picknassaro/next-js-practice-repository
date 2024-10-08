"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          alt="Uploaded image"
          width="960"
          height="600"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <CldUploadWidget
        uploadPreset="gzdxupkh"
        onSuccess={(response: { info?: { public_id: string } | string }) => {
          if (typeof response.info === "object" && response.info?.public_id) {
            setPublicId(response.info.public_id);
          }
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
