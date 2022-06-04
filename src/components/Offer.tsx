import styles from "./Offer.module.scss";

interface OfferInterface {
 title: string;
 description: string;
 image: string;
 tags: string[];
}

export default function Offer({
 title,
 description,
 image,
 tags,
}: OfferInterface) {
 return (
  <div className={styles.container}>
   <div className={styles.title}>
    <h3>Dreamlance</h3>
   </div>
   <div className={styles.img}>
    <img src={image} alt={title} />
   </div>
   <div className={styles.title}>
    <h3>{title}</h3>
   </div>
   <div className={styles.description}>
    <p>{description}</p>
   </div>
   <div className={styles.tagContainer}>
    {tags.map((tag, index) => {
     return (
      <div key={index} className={styles.tag}>
       #{tag}
      </div>
     );
    })}
   </div>
   <div className={styles.buttonContainer}>
    <button className={styles.applyButton}>Apply</button>
   </div>
  </div>
 );
}
