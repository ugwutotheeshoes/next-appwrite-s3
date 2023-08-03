import Link from "next/link";
import "@appwrite.io/pink";
import { storage } from "./component/ApiHelper";

export default function Home() {
  const result = storage.getFilePreview(
    "[BUCKET_ID]",
    "[FILE_ID]",
    "[width]",
    "[height]"
  );
  console.log(result); // Resource URL
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
        <div className="article">
          <img src={result} alt="images" />
          <div className="article-container">
            <h2 className="eyebrow-heading-1">The Pink Flamingo</h2>
            <p>
              Sunt et dolore labore est voluptate laborum nisi incididunt
              officia qui esse ut. Magna anim ad aliqua sit tempor officia
              consectetur. Occaecat aliquip voluptate enim do consectetur aliqua
              cupidatat ad excepteur. Nulla nostrud sint deserunt duis aliqua
              consectetur tempor aute officia. Consectetur irure reprehenderit
              aute exercitation eu enim ad. Cillum sint mollit eu elit aute
              laborum est et. Esse laboris voluptate irure ipsum officia eiusmod
              ea fugiat. Nulla nostrud sint deserunt duis aliqua consectetur
              tempor aute officia. Consectetur irure reprehenderit aute
              exercitation eu enim ad. Duis nisi Lorem nulla velit exercitation
              nisi reprehenderit ea incididunt. Commodo minim sint ipsum in
              cupidatat amet enim velit ea. In laboris ut ad eu officia dolore
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
