import React from "react";
import MainHeading from "./MainHeading";

export default function Story() {
  return (
    <div className="container storyContainer" id="story">
      <MainHeading section="Our Story."></MainHeading>

      <div className="storySummaryContainer">
        <section className="nonImgSection">
          <p className="story">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis deserunt tempora doloribus beatae atque magnam et
            aliquid praesentium inventore dolores adipisci fuga, voluptatum
            totam nostrum, quae sapiente fugiat, tenetur excepturi ut magni
            natus voluptas. Sapiente velit blanditiis eligendi qui nihil nostrum
            exercitationem voluptatem eveniet laudantium, molestias excepturi
            amet tempore suscipit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maxime, doloribus. few more words like
          </p>
        </section>
        <section className="imgSection">
          <p className="story">
            orem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab
            doloribus dolore excepturi laborum quasi nihil, expedita tenetur qui
            recusandae dignissimos velit accusantium non architecto minima
            molestias voluptatum dolorum rem est ad obcaecati? Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet. Huh
          </p>
          <img src="./images/anim.gif" alt="" id="anim" />
          <p className="story">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            optio sit minima, est neque quibusdam cumque dolore quos quasi
            possimus quisquam ipsum perferendis? Expedita eligendi magnam
            maiores, minus placeat itaque. Vero voluptate earum dolor
            consectetur ea corrupti? Aint nobody's gonna notice me here 🐕
          </p>
        </section>
      </div>
    </div>
  );
}
