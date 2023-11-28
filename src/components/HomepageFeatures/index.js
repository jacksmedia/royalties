import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'New Player Guide',
    img: require('@site/static/img/panel1.png').default,
    linker: 'https://stash23.s3.us-west-2.amazonaws.com/PotR-QuickIntro07.pdf',
    description: (
      <>
        Read this to for a rules refresh or to learn the basics!
      </>
    ),
  },
  {
    title: 'PotR Main Rules v0.7',
    img: require('@site/static/img/panel2.png').default,
    linker: 'https://stash23.s3.us-west-2.amazonaws.com/PotR-OfficialRulesv07.pdf',
    description: (
      <>
        Complete rules resource, including all the latest expansions!
      </>
    ),
  },
  {
    title: 'Rules Reference Sheet',
    img: require('@site/static/img/panel3.png').default,
    linker: 'https://stash23.s3.us-west-2.amazonaws.com/PotR-ReferenceSheetv07.pdf',
    description: (
      <>
        Keep this handy when playing Protectors of the Realm, once you've perused the main rules.
      </>
    ),
  },
  {
    title: 'Expansion Rules: Quests!',
    img: require('@site/static/img/panel4.png').default,
    linker: 'https://stash23.s3.us-west-2.amazonaws.com/PotR_Quests_v03.pdf',
    description: (
      <>
        Bonus content used in some games: read the Quests! details here.
      </>
    ),
  },
  {
    title: 'Expansion Rules: Heroes & Tyrants',
    img: require('@site/static/img/panel5.png').default,
    linker: 'https://stash23.s3.us-west-2.amazonaws.com/PotR_HeroesTyrants_v01.pdf',
    description: (
      <>
        Bonus content used in some games: read the Heroes & Tyrants details here.
      </>
    ),
  },
];

function Feature({img, title, description, linker}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} />
      </div>
      <div className="text--center padding-horiz--md padding-vert--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={linker}>
          <button>Download</button>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}