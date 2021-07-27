import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
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
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    height: "100%",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
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

export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
