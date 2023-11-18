import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Uploader from "../components/Uploader";

function HomePage() {
  const { token } = useSelector((state) => state.user);

  return (
    <section className="custom-section d-flex justify-content-center">
      <Container className="p-5 text-center">
        <Row>
          <Col data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300">
            <h1
              className="display-5 fw-bold mb-5"
              style={{ textShadow: "0px 10px 10px black" }}
            >
              Welcome to Careersync
            </h1>
          </Col>
        </Row>

        {token ? (
          <Uploader />
        ) : (
          <h4 className="my-3">
            Please <Link to={"/auth/user-login"}>Login</Link> to get started
          </h4>
        )}
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <p>
              Your Dream Career, One Click Away Are you ready to take the next
              step in your career journey? At Careersync, we're
              dedicated to connecting you with the job opportunities that matter
              most to you.
            </p>
           {/* <div className="text-start my-5">
              <h2>Why Choose Us:</h2>
              <ul>
                <li>
                  <span className="fw-bold">
                    Personalized Job Recommendations:
                  </span>
                  Say goodbye to sifting through endless job listings. Our
                  advanced algorithms analyze your skills, experience, and
                  preferences to recommend jobs tailored just for you.
                </li>
                <li>
                  <span className="fw-bold">Effortless Resume Upload:</span>{" "}
                  Upload your resume with ease, and let our technology do the
                  heavy lifting. We'll extract the essential details and match
                  you to the perfect positions.
                </li>
                <li>
                  <span className="fw-bold">Simplified Job Search:</span>{" "}
                  Looking for something specific? Our user-friendly search and
                  filter options make it a breeze to find the job you want.
                </li>
                <li>
                  <span className="fw-bold">Stay Informed:</span> Receive
                  real-time alerts for new job openings that fit your profile.
                  Your dream job could be just a notification away.
                </li>
                <li>
                  <span className="fw-bold"> Your Career, Your Way:</span> Set
                  your preferences, from location and salary to job type and
                  industry. We respect your unique needs and aspirations.
                </li>
              </ul>

              <p>
                Ready to embark on the path to a brighter future? Join our
                community of job seekers, and let's make your career aspirations
                a reality. Start your journey today. Your future is waiting.
              </p>
        </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomePage;
