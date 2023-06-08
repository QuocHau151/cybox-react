import React from "react";
import dataRoadmap from "../assets/fake-data/data-roadmap";
import PageTitle from "../components/pagetitle";
import RoadMap from "../features/roadmap";

function RoadMapOne(props) {
  return (
    <div className="page-roadmap">
      <PageTitle title="Roadmaps" />

      <RoadMap data={dataRoadmap} />
    </div>
  );
}

export default RoadMapOne;
