import React, { useState } from "react";
import Rating from "react-star-rating-component";
import styles from "./Avis.module.css";
import Image from "next/image";
import img from "../../public/assets/images/Mask group.svg";
function Avis() {
  const [rating, setRating] = useState(0);
  const handleStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };
  return (
    <section className={styles.avis}>
      <div className={styles.avis_container}>
        <div>
          <div className={styles.avis_text}>4.5 / 5</div>
          <div className={styles.exellent}>Exellent</div>
        </div>
        <div className={styles.stars}>
          <div className={styles.rating}>
            <Rating
              value={rating}
              onStarClick={(nextValue, prevValue, name) =>
                handleStarClick(nextValue, prevValue, name)
              }
              starCount={5}
              starColor={"#ffb400"}
              emptyStarColor={"#FFA800"}
            />
          </div>
          <div className={styles.total_avis}>7 Avis</div>
        </div>
      </div>
      <div className={styles.commentaire}>
        <div className={styles.comm}>
          <div className={styles.titre}>Les avis</div>
          <div className={styles.ligne}></div>
        </div>
        <div className={styles.commentaire_content}>
          <div className={styles.commentaire_sub}>
            <div className={styles.img}>
              <Image src={img} />
            </div>
            <div className={styles.name}>
              <div className={styles.nom}>Ahmed Alaoui</div>
              <div className={styles.rating}>
                <Rating
                  value={rating}
                  onStarClick={(nextValue, prevValue, name) =>
                    handleStarClick(nextValue, prevValue, name)
                  }
                  starCount={5}
                  starColor={"#ffb400"}
                  emptyStarColor={"#FFA800"}
                />
              </div>
            </div>
            <div className={styles.date}>On may 12 / 2023</div>
          </div>
          <div className={styles.cmnt}>
            <label >I loved every bit of this service, it is great and will always be one of my favourite services <br /> I loved the service delivery too.</label>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className={styles.commentaire}>
        
        <div className={styles.commentaire_content}>
          <div className={styles.commentaire_sub}>
            <div className={styles.img}>
              <Image src={img} />
            </div>
            <div className={styles.name}>
              <div className={styles.nom}>Ahmed Alaou</div>
              <div className={styles.rating}>
                <Rating
                  value={rating}
                  onStarClick={(nextValue, prevValue, name) =>
                    handleStarClick(nextValue, prevValue, name)
                  }
                  starCount={4}
                  starColor={"#ffb400"}
                  emptyStarColor={"#FFA800"}
                />
              </div>
            </div>
            <div className={styles.date}>On may 12 / 2023</div>
          </div>
          <div className={styles.cmnt}>
            <label >I loved every bit of this service, it is great and will always be one of my favourite services <br /> I loved the service delivery too.</label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Avis;
