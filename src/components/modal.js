import React from "react";
import "../static/css/img_slider.css";
import "../static/css/app.css";
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import image1 from "../static/image/img1.jpeg";
import image2 from "../static/image/img2.jpeg";
import image3 from "../static/image/img3.jpeg";
import image4 from "../static/image/img4.jpeg";
import image5 from "../static/image/img5.jpeg";
import image6 from "../static/image/img6.jpeg";
import image7 from "../static/image/img7.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "80%",
  },
}));

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

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div onClick={handleOpen}>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.name}</h2>
            <ImageGallery items={itemData} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
