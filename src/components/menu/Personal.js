import React from "react";
import "../../static/css/img_slider.css";
import "../../static/css/app.css";
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import image1 from "../../static/image/img1.jpeg";
import image2 from "../../static/image/img2.jpeg";
import image3 from "../../static/image/img3.jpeg";
import image4 from "../../static/image/img4.jpeg";
import image5 from "../../static/image/img5.jpeg";
import image6 from "../../static/image/img6.jpeg";
import image7 from "../../static/image/img7.jpeg";

export default function () {
  const itemData = [
    {
      original: image1,
      thumbnail: image1,
      title: "Image",
      author: "author",
      sizes: "20px",
      thumbnailClass: "thumbnail_Class",
    },
    {
      original: image2,
      thumbnail: image2,
      title: "Image",
      author: "author",
      cols: 2,
      thumbnailClass: "thumbnail_Class",
    },

    {
      original: image3,
      thumbnail: image3,
      title: "Image",
      author: "author",
      cols: 2,
      thumbnailClass: "thumbnail_Class",
    },
    {
      original: image4,
      thumbnail: image4,
      title: "Image",
      author: "author",
      cols: 2,
      thumbnailClass: "thumbnail_Class",
    },
    {
      original: image5,
      thumbnail: image5,
      title: "Image",
      author: "author",
      cols: 2,
    },
    {
      original: image6,
      thumbnail: image6,
      title: "Image",
      author: "author",
      cols: 2,
      thumbnailClass: "thumbnail_Class",
    },
    {
      original: image7,
      thumbnail: image7,
      title: "Image",
      author: "author",
      cols: 2,
      thumbnailClass: "thumbnail_Class",
    },
  ];

  return <ImageGallery items={itemData} />;
}
