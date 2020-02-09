import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import WebsiteScreenShot from "../../assets/img/website-screenshot.jpg";
import SceneClassifierScreenshot from "../../assets/img/scene-classifier-screenshot.jpg";
import "../../assets/css/projectpage.css";

const ProjectsPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 light-grey-background z-depth-0">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          My Recent Projects
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Below are a list of my recent projects that I've been working on. Please check them out!
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={WebsiteScreenShot}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon fab icon="js-square" className="pr-2" />
                Web Development
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>My personal website and web app</strong>
            </h3>
            <p>
              This is my first web development project which uses React. <br/>
              My website contains a landing page, a projects page which showcase my recent projects and a web app page.
              <br/><br/>
              My first web app (What To Eat!) helps the user to choose what to eat by randomly selecting at dish or a restaurant.
            </p>
            <p>
              Date: Nov 2019 - Feb 2020
            </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              Read more (Coming Soon)
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="project-diagram" className="pr-2" />
                Deep Learning
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Re-implementation of Music Transformer</strong>
            </h3>
            <p>
              This is a group coursework for my deep learning module at university
              where we re-implemented the Music Transformer paper that is published in ICLR conference.<br/>
              <br/>
              The re-implementation was attempted using PyTorch instead of TensorFlow.
            </p>
            <p>
              Date: March 2019 - May 2019
            </p>
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more (Coming Soon)
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="white-background rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid center-photo"
                src="https://nlp.seas.harvard.edu/images/the-annotated-transformer_14_0.png"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={SceneClassifierScreenshot}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="images" className="pr-2" />
                Computer Vision
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Scene Classifier</strong>
            </h3>
            <p>
              Classifies scene images into one of 15 categories.<br/>
              <br/>
              Three models have been implemented, with increasing complexity.<br/>
              An additional model using transfer learning has also been implemented,
              providing the best accuracy.
            </p>
            <ul>
              <li>Run 1 - K-Nearest Neighbour classifier with “tiny image” feature.</li>
              <li>Run 2 - 15 one-vs-all linear classifier with Bags-of-Visual-Words feature.</li>
              <li>Run 3 - Dense SIFT with spatial pyramid matching using SVM classifier.</li>
              <li>Run 4 - Transfer Learning with inception V3 model with additional pooling and softmax output layer as the top layers.</li>
            </ul>
            <p>
              Date: Nov 2018 - Jan 2018
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Read more (Coming Soon)
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ProjectsPage;