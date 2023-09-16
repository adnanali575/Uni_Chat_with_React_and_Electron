import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface StrengthStepsType {
  control?: boolean;
  title?: string;
}

const StrengthSteps: React.FC<StrengthStepsType> = ({ control, title }) => {
  return (
    <h1 className={`${control ? `text-blue` : ``} flex items-center gap-2`}>
      <FontAwesomeIcon
        icon={`${control ? `circle-check` : `dot-circle`}`}
        className=""
      />
      {title}
    </h1>
  );
};

export default StrengthSteps;
