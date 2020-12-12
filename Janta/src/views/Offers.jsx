import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import DashboardLayout from "../layouts/DashBoardLayout";
// import Home from "./Home";
import "./card.styles.scss";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

const Offers = () => {
  return (
    <DashboardLayout>
      <Row>
        <Card className="portfolio-card">
          <CardHeader className="portfolio-card-header"></CardHeader>
          <CardBody>
            <p className="portfolio-card-city"></p>
            <CardTitle className="portfolio-card-title"></CardTitle>
            <CardText className="portfolio-card-text"></CardText>
          </CardBody>
        </Card>
      </Row>
    </DashboardLayout>
  );
};

export default Offers;
