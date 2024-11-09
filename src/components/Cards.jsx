import React from "react";
import Card from "./Card";
import iconSupervisor from "../assets/images/icon-supervisor.svg";
import iconKarma from "../assets/images/icon-karma.svg";
import iconcalculator from "../assets/images/icon-calculator.svg";
import iconTeamBuilder from "../assets/images/icon-team-builder.svg";

const Cards = () => {
  return (
    <div className="flex justify-center items-center gap-5 max-sm:flex-wrap">
      <Card
        color={"var(--color-primary-cyan)"}
        header={"Supervisor"}
        comment={"Monitors activity to identify project roadblocks"}
        icon={iconSupervisor}
      ></Card>
      <div className="flex flex-col gap-5 max-sm:flex-row max-sm:flex-wrap">
        <Card
          color={"var(--color-primary-red)"}
          header={"Team Builder"}
          comment={
            "Scans our talent network to create the optimal team for your project"
          }
          icon={iconTeamBuilder}
        ></Card>
        <Card
          color={"var(--color-primary-orange)"}
          header={"Karma"}
          comment={"Regularly evaluates our talent to ensure quality"}
          icon={iconKarma}
        ></Card>
      </div>
      <Card
        color={"var(--color-primary-blue)"}
        header={"Calculator"}
        comment={
          "Uses data from past projects to provide better delivery estimates"
        }
        icon={iconcalculator}
      ></Card>
    </div>
  );
};

export default Cards;
