import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="place-list-center">
        <Card>
          <h2>No Place Found</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creator={place.creator}
          coordinates={place.location}
        ></PlaceItem>
      ))}
    </ul>
  );
};

export default PlaceList;
