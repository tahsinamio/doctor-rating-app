import React from "react";

const HomeImage = () => {
  return (
    <div>
      <div class="parallax-container">
        <div class="parallax">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "45% 50%",
              opacity: "1",
            }}
            src="/kendal-L4iKccAChOc-unsplash.jpg"
            alt="home_image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
