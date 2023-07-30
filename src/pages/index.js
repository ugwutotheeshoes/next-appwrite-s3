import Link from "next/link";
import "@appwrite.io/pink";
import { useState } from "react";
import { images } from "../pages/component/images";
import Image from "next/image";

export default function Home() {
  const ImageContainer = images.map((images) => (
    <li key={images.id}>
      <img src={images.img} alt="images" height={1000} width={1000} />
    </li>
  ));
  return (
    <main>
      <div>
        <nav className="u-flex u-cross-center u-main-space-between u-padding-16">
          <h2 className="logo u-padding-16 eyebrow-heading-1 u-color-text-pink">
            <Link href="/">PINK COLLAGE</Link>
          </h2>
          <button className="button">
            <Link href="/upload">UPLOAD AN IMAGE</Link>
          </button>
        </nav>
        <ul className="collage">{ImageContainer}</ul>
      </div>
    </main>
  );
}
