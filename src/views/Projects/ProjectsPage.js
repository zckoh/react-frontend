import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import WebsiteScreenShot from "../../assets/img/website-screenshot.jpg";

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
                <MDBIcon icon="utensils" className="pr-2" />
                Web Development
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>My personal website and web app</strong>
            </h3>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis.
            </p>
            <p>
              Date: Nov 2019 - Feb 2020
            </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Deep Learning
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Re-implementation of Music Transformer</strong>
            </h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate
              non provident.
            </p>
            <p>
              Date: March 2019 - May 2019
            </p>
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
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
                src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
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
                <MDBIcon icon="suitcase" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Scene Classifier</strong>
            </h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
              sit amet.
            </p>
            <p>
              Date: Nov 2018 - Jan 2018
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ProjectsPage;