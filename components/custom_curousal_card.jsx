import { useState } from 'react';
import styles from './CarouselCard.module.scss';

function CarouselCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const options  = [
    {
      id: 1,
      title: "Vietnam",
      imgSrc: "/img/general/travel tailor website content -01.png",
      tourCount: 100,
    },
    {
      id: 2,
      title: "Indonesia",
      imgSrc: "/img/general/travel tailor website content -02.png",
      tourCount: 100,
    },
    {
      id: 3,
      title: "Kazakhstan",
      imgSrc: "/img/general/travel tailor website content -03.png",
      tourCount: 100,
    },
    {
      id: 4,
      title: "Oman",
      imgSrc: "/img/general/travel tailor website content -04.png",
      tourCount: 100,
    },
    {
      id: 5,
      title: "Morocco",
      imgSrc: "/img/general/travel tailor website content -05.png",
      tourCount: 100,
    },
    {
      id: 6,
      title: "Dubai",
      imgSrc: "/img/general/travel tailor website content -06.png",
      tourCount: 100,
    },
    {
      id: 7,
      title: "Finland",
      imgSrc: "/img/general/travel tailor website content -07.png",
      tourCount: 100,
    },
    {
      id: 8,
      title: "New Zealand",
      imgSrc: "/img/general/travel tailor website content -08.png",
      tourCount: 100,
    },
  ];

  return (
    <div className="wrapper">
        <div className={styles.options}>
      {options.map((option, index) => (
        <div
          key={index}
          className={`${styles.option} ${index === activeIndex ? styles.active : ''}`}
          style={{ '--optionBackground': `url("${option.imgSrc}")` }}
          onClick={() => setActiveIndex(index)}
        >
          <div className={styles.shadow}></div>
          <div className={styles.label}>
            <div className={styles.icon}>
              <i><img style={{objectFit:"cover", height:"40px", width:"40px", borderRadius:"100%"}} src={option.imgSrc} alt="" /></i>
            </div>
            <div className={styles.info}>
              <div className={styles.main}>{option.title}</div>
              <div className={styles.sub}>{option.tourCount}+ Tours</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <p className={styles.scrollHint}>Scroll For More</p>
    </div>
  );
}

export default CarouselCard;
