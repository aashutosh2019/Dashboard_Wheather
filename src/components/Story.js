import React from "react";

const Story = () => {
  const story =
    "I remember a day when the weather forecast was crucial for my plans. It was a family outing to the beach, and knowing the weather helped us pack appropriately and have a great time despite a brief shower.";

  return (
    <div className="story">
      <h3>Weather-Related Story</h3>
      <p>{story}</p>
    </div>
  );
};

export default Story;
