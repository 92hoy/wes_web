import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Modal from "../modal2";

import image1 from "../../static/image/img1.jpeg";
import image2 from "../../static/image/img2.jpeg";
import image3 from "../../static/image/img3.jpeg";
import image4 from "../../static/image/img4.jpeg";
import image5 from "../../static/image/img5.jpeg";
import image6 from "../../static/image/img6.jpeg";
import image7 from "../../static/image/img7.jpeg";
const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    // backgroundColor: theme.palette.background.paper,
  },
  ImageListItem: {
    // margin: "1rem",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
});

const itemData = [
  {
    img: image1,
    title: "First",
    author: "author",
    cols: 2,
  },
  {
    img: image2,
    title: "Second",
    author: "author",
    cols: 2,
  },
  ,
  {
    img: image3,
    title: "Third",
    author: "author",
    cols: 2,
  },
  {
    img: image4,
    title: "Forth",
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
    title: "Fifth",
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
class Advertising extends React.Component {
  openModal(e, title) {
    Modal(title);
  }
  render() {
    // export default function Advertising() {
    // const { classes } = useStyles();

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ImageList rowHeight={180} className={classes.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Advertising</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className={classes.ImageListItem}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.title}`}
                    className={classes.icon}
                  >
                    {/* <InfoIcon /> */}
                    <Modal name={item.title} />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }
}
Advertising.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(Advertising);
