import React, { useState } from "react";
import Link from "next/link";
import "@appwrite.io/pink";
import { ID } from "appwrite";
import { storage } from "./component/ApiHelper";

const upload = () => {
  const [upload, setUpload] = useState(null);

  const onFileChange = (e) => {
    if (e.target.files) {
      setUpload(e.target.files[0]);
    }
  };

  const fileUpload = () => {
    if (!upload) {
      return;
    }
    const promise = storage.createFile(
      "[BUCKET_ID]",
      ID.unique(),
      upload
    );
    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };
  return (
    <main>
      <div>
        <nav className="u-flex u-cross-center u-main-space-between u-padding-16">
          <h2 className="logo u-padding-16 eyebrow-heading-1 u-color-text-pink">
            <Link href="/">PINK COLLAGE</Link>
          </h2>
          <button className="button">
            <Link href="/">HOME</Link>
          </button>
        </nav>
        <h2 className="header eyebrow-heading-1 u-color-text-pink u-padding-16">
          Upload an image
        </h2>
        <div className="section">
          <button className="button" onClick={fileUpload}>
            Upload
          </button>
        </div>
      </div>
    </main>
  );
};

export default upload;
