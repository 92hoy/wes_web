import React from "react";
import { post } from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { withStyles } from "@material-ui/core/styles";

import ImageGallery from "react-image-gallery";
import image1 from "../static/image/img1.jpeg";
import image2 from "../static/image/img2.jpeg";
import image3 from "../static/image/img3.jpeg";
import image4 from "../static/image/img4.jpeg";
import image5 from "../static/image/img5.jpeg";
import image6 from "../static/image/img6.jpeg";
import image7 from "../static/image/img7.jpeg";
const styles = (theme) => ({
  hidden: {
    display: "none",
  },
  buttoncolor: {
    color: "white",
  },
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
});
const btnStyleL = {
  marginLeft: "2rem",
};
const btnStyleR = {
  marginReft: "2rem",
};
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

class NewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,

      userName: "",

      birthday: "",

      gender: "",

      job: "",

      fileName: "",

      open: false,
    };

    this.handleFileChange = this.handleFileChange.bind(this);

    this.handleValueChange = this.handleValueChange.bind(this);

    this.addCustomer = this.addCustomer.bind(this);

    this.handleClickOpen = this.handleClickOpen.bind(this);

    this.handleOpen = this.handleOpen.bind(this);

    this.handleClose = this.handleClose.bind(this);
  }

  handleFileChange(e) {
    this.setState({
      file: e.target.files[0],

      fileName: e.target.value,
    });
  }

  handleValueChange(e) {
    let nextState = {};

    nextState[e.target.name] = e.target.value;

    this.setState(nextState);
  }

  addCustomer() {
    const url = "/api/customers";

    const formData = new FormData();

    formData.append("image", this.state.file);

    formData.append("name", this.state.userName);

    formData.append("birthday", this.state.birthday);

    formData.append("gender", this.state.gender);

    formData.append("job", this.state.job);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return post(url, formData, config);
  }

  handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  //   handleClose() {
  //     this.setState({
  //       file: null,

  //       userName: "",

  //       birthday: "",

  //       gender: "",

  //       job: "",

  //       fileName: "",

  //       open: false,
  //     });
  //   }
  handleOpen() {
    console.log("Open1", this.state.open);
    this.setState({
      open: true,
    });
    console.log("Open2", this.state.open);
  }

  handleClose() {
    console.log("close1", this.state.open);
    this.setState({
      open: false,
    });
    console.log("close2", this.state.open);
  }
  //   버튼위치 조정

  renderLeftNav(onClick, disabled) {
    return (
      <button
        className="image-gallery-custom-left-nav"
        disabled={disabled}
        onClick={onClick}
        style={btnStyleL}
      />
    );
  }
  renderRightNav(onClick, disabled) {
    return (
      <button
        className="image-gallery-custom-right-nav"
        disabled={disabled}
        onClick={onClick}
        style={btnStyleR}
      />
    );
  }
  render() {
    const { classes } = this.props;

    return (
      //   <div>
      //     <Button
      //       variant="contained"
      //       color="primary"
      //       onClick={this.handleClickOpen}
      //     >
      //       고객 추가하기
      //     </Button>

      //     <Dialog open={this.state.open} onClose={this.handleClose}>
      //       <DialogTitle>고객 추가</DialogTitle>

      //       <DialogContent>
      //         <ImageGallery items={itemData} />
      //       </DialogContent>

      //       <DialogActions>
      //         <Button
      //           variant="outlined"
      //           color="primary"
      //           onClick={this.handleClose}
      //         >
      //           Close
      //         </Button>
      //       </DialogActions>
      //     </Dialog>
      //   </div>
      <div>
        <Button
          variant="outlined"
          onClick={this.handleOpen}
          className={classes.buttoncolor}
        >
          View
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">{this.props.name}</h2>
              <ImageGallery items={itemData} />
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}
export default withStyles(styles)(NewModal);
