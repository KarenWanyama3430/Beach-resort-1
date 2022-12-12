import React, { Component } from "react";
import { FaCocktail, FaBeer, FaHiking, FaShuttleVan } from "react-icons/fa";
import Title from "./Title";
export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eius.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eius.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free van",
        info:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eius.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eius.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
