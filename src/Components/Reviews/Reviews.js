import React from "react";
import { Card, Carousel } from "react-bootstrap";
import "./Reviews.css";
import review1 from "../../Images/review1.jpg";
import review2 from "../../Images/review2.jpg";
import review3 from "../../Images/review3.jpg";

const Reviews = () => {
  return (
    <div className="container ">
      <h3 className="m-5">Reviews</h3>
      <Carousel>
        <Carousel.Item interval={3000}>
          <Card className="slider" style={{ width: "18rem" }}>
            <Card.Img variant="top" className="review" src={review1} />
            <Card.Body>
              <Card.Text>
                We have a trip in Cusco and Machu Picchu.From the trip advisory
                to the local travel guide,all are very professional and
                dedicated to bring us an enjoy able trip.
              </Card.Text>
              <Card.Title>Alex Gordan</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Card className="slider" style={{ width: "18rem" }}>
            <Card.Img variant="top" className="review" src={review2} />
            <Card.Body>
              <Card.Text>
                Our travel agent was excellent for us and considered our unique
                needs and planned our itinerary.Thank you so much for a
                wonderful trip
              </Card.Text>
              <Card.Title>Robbert</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Card className="slider" style={{ width: "18rem" }}>
            <Card.Img variant="top" className="review" src={review3} />
            <Card.Body>
              <Card.Text>
                I just returned from Australia and I can't stop raving.The trip
                far exceeded my expectations. Everything from the guides to the
                accommodations and food was wonderful.
              </Card.Text>
              <Card.Title>Terry Black</Card.Title>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
