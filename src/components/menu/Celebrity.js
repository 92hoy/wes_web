import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

import image1 from "../../static/image/img1.jpeg";
import image2 from "../../static/image/img2.jpeg";
import image3 from "../../static/image/img3.jpeg";
import image4 from "../../static/image/img4.jpeg";
import image5 from "../../static/image/img5.jpeg";
import image6 from "../../static/image/img6.jpeg";
import image7 from "../../static/image/img7.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));
const itemData = [
  {
    img: image1,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image2,
    title: "Image",
    author: "author",
    cols: 2,
  },
  ,
  {
    img: image3,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image4,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image5,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image6,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image7,
    title: "Image",
    author: "author",
    cols: 2,
  },
];

export default function BasicImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
