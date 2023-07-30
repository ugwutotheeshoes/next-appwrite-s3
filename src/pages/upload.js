import React, { useState } from "react";
import Link from "next/link";
import "@appwrite.io/pink";

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
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: upload,
      // 👇 Set headers manually for single file upload
      headers: {
        "content-type": upload.type,
        "content-length": `${upload.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    // Runner();
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
          <input type="file" onChange={onFileChange} />

          {/* <div>{upload && `${upload.name} - ${upload.type}`}</div> */}

          <button className="button" onClick={fileUpload}>
            Upload
          </button>
        </div>
      </div>
    </main>
  );
};

export default upload;
