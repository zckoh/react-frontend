import React from "react";
import { MDBContainer, MDBView, MDBRow, MDBCol, MDBIcon, MDBMask } from "mdbreact";
import HomePageImg from "../../assets/img/homepage-img.jpg";
import MyPhoto from "../../assets/img/MyPhoto.jpeg";

const HomePage = () => {
    return (
        <div>
            <header>
                <MDBView src={HomePageImg}>
                    <MDBMask className="flex-center flex-column text-white text-center">
                        <h2>Hi I'm Zac, welcome to my website!</h2>
                        <h5>Scroll down for more info!</h5>
                    </MDBMask>
                </MDBView>
            </header>
            <main>
                <MDBContainer>
                    <section className="my-5">
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                            About Me
                        </h2>
                        <p className="w-responsive text-center mx-auto mb-4">
                            My name is Zac Koh, I'm from Penang, Malaysia but currently based in Cambridge, UK.
                            <br/>
                            I am an aspiring software engineer that is currently on a graduate developer role with Barclays.
                        </p>
                        <h4 className="h5-responsive font-weight-bold text-center my-2">My Goals for 2020:</h4>
                        <ol className="w-responsive text-center mx-auto mb-5">
                            <li className="w-responsive text-center mx-auto">
                                Learn web development and deploy production-level code.
                            </li>
                            <li className="w-responsive text-center mx-auto">
                                Start with kaggle and participate in at least 2 competitions.
                            </li>
                        </ol>
                        <MDBRow>
                            <MDBCol lg="5" className="mb-lg-0 mb-5">
                                <img
                                    src={MyPhoto}
                                    alt="Photograph of me"
                                    className="img-fluid rounded z-depth-3"
                                />
                            </MDBCol>
                            <MDBCol lg="7">
                                <MDBRow className="mb-3">
                                    <MDBCol md="1" size="2">
                                        <MDBIcon icon="code" size="2x" className="indigo-text" />
                                    </MDBCol>
                                    <MDBCol md="11" size="10">
                                        <h5 className="font-weight-bold mb-3">Technologies</h5>
                                        <ul>
                                            <li className="font-weight-bold">Programming Languages</li>
                                            <p className="mb-1">
                                                Python, JavaScript, C, C++, Java, Groovy
                                            </p>
                                            <li className="font-weight-bold">Data Science/ML</li>
                                            <p className="mb-1">
                                                PyTorch, Pandas, sklearn, numpy
                                            </p>
                                            <li className="font-weight-bold">DevOps</li>
                                            <p className="mb-1">
                                                Git, Bash, Nexus, Maven, TeamCity, Jenkins
                                            </p>
                                            <li className="font-weight-bold">Web Development</li>
                                            <p className="mb-1">
                                                django, React
                                            </p>
                                        </ul>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="mb-3">
                                    <MDBCol md="1" size="2">
                                        <MDBIcon icon="user-graduate" size="2x" className="pink-text" />
                                    </MDBCol>
                                    <MDBCol md="11" size="10">
                                        <h5 className="font-weight-bold mb-3">Education</h5>
                                        <p>
                                            MEng Electronic Engineering with Artificial Intelligence<br/>
                                            University of Southampton<br/>
                                            <br/>
                                            First Class Honours<br/>
                                            Class of 2019
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="mb-3">
                                    <MDBCol md="1" size="2">
                                        <MDBIcon icon="heart" size="2x" className="blue-text" />
                                    </MDBCol>
                                    <MDBCol md="11" size="10">
                                        <h5 className="font-weight-bold mb-3">Interests</h5>
                                        <p>
                                        Cooking, Bouldering, Running
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>
            </main>
        </div>
    );
}

export default HomePage;

