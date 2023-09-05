import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Getting Started",
    description: (
      <>
        <div>
          <img src="/img/stablelogo.png" alt="Stability Logo" />
        </div>
        Begin by setting up your development environment to work with Stability.
      </>
    ),
  },
  {
    title: "Quickstart Tutorials",
    description: (
      <>
        <div>
          <img src="/img/stablelogo.png" alt="Stability Logo" />
        </div>
        Learn by example with our quickstart tutorials.
      </>
    ),
  },
  {
    title: "Architecture",
    description: (
      <>
        <div>
          <img src="/img/stablelogo.png" alt="Stability Logo" />
        </div>
        We are different. Learn how stability works.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
