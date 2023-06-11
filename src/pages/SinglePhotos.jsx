import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Photos } from "../PHOTOGRAPHES/Photos";
import "./SinglePhotos.css"

const SinglePhotos = () => {
  const { id } = useParams();

  const [photoID, setPhotoID] = useState(parseInt(id));

const handleIncrease = () =>{
     setPhotoID(parseInt(photoID) + 1);
}
const handleDecrease = () =>{
    setPhotoID(parseInt(photoID) - 1);
}

let getImagefromId =Photos.filter((pic) => pic.id === photoID);

  return (
    <>
    <div className="singleImage">
        {photoID > 51 &&
        <button className="btnChange" onClick={handleDecrease}>◀</button>
        }
      <img
      key={photoID}
        loading="lazy"
        src={`.${getImagefromId[0]?.imgUrl}`}
        alt={getImagefromId[0]?.Category}
      />
      {photoID < 116 &&
      <button className="btnChange" onClick={handleIncrease}>▶</button>
       }
    </div>

    </>
  );
};

export default SinglePhotos;
