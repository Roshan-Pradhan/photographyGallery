import React, { useState } from "react";
import { Photos } from "../PHOTOGRAPHES/Photos";
import "./Gallary.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Blurhash } from "react-blurhash";
import ReactLoading from "react-loading";
import { NavLink, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallary = () => {
  const navigate = useNavigate()
  const [visiblePhotos, setVisiblePhotos] = useState(5); // Number of initially visible photos
  const [allPhotos, setallPhotos] = useState(Photos);
  const [activeNav, setactiveNav] = useState();

  const loadMorePhotos = () => {
    setVisiblePhotos((prevVisiblePhotos) => prevVisiblePhotos + 5); // Increase the number of visible photos by 5
  };
console.log(visiblePhotos)


const handleSinglePhoto =(gotID) =>{
console.log(gotID)
navigate(`/photo/${gotID}`)
}

  const renderedPhotos = allPhotos.slice(0, visiblePhotos).map((item) => (
    <div className="photos" key={item.id}>
      <LazyLoadImage  effect="blur" 
      threshold="80"
      src={item.imgUrl} alt={item.Category}  
      placeholderSrc={`https://placehold.co/600x400?text=${item.Category}`}
      onClick={()=>handleSinglePhoto(item.id)} />
    </div>
  ));



  const uniqueCategory = Array.from(
    new Set(Photos.map((item) => item.Category))
  );

  const handleCategory = (ClickedCategory) => {
    setallPhotos(Photos.filter((item) => item.Category === ClickedCategory));
  };
  const handleactiveHeading = (heading) => {
    setactiveNav(heading);
  };
  return (
    <>
      <div className="categoryWrapper" id="catNav">
        {uniqueCategory?.map((cat, index) => (
          <div className="navCat" key={index}>
            <h1
              onClick={() => {
                handleCategory(cat);
                handleactiveHeading(cat);
              }}
              className={activeNav === cat ? "activeNav" : "normalNav"}
            >
              {cat}
            </h1>
          </div>
        ))}
      </div>

      <InfiniteScroll
        dataLength={visiblePhotos}
        next={loadMorePhotos}
        hasMore={visiblePhotos < Photos.length}
        loader={
          <ReactLoading
            type="bars"
            color="red"
            height="50px"
            className="customLoader"
          />
        }
      >
        <div className="galleryWrapper">{renderedPhotos}</div>
        <div className="scrollTOp">
        <a href="#catNav" className="moveToTop">Move to top ⬆</a>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Gallary;
