import {
  svgVariables,
  svgVariablesUpdate,
  svgStyles,
} from "../shared/variables";
import { useState } from "react";
const Emoji = () => {
  const [select, setSelect] = useState<number>(-1);
  return (
    <div>
      {svgVariables &&
        svgVariables.map((svg, index) => {
          return (
            <div key={index}>
              {select === index ? (
                <img
                  className={
                    select !== -1
                      ? `${svgStyles[index]} active`
                      : svgStyles[index]
                  }
                  src={`images/emojis/${svgVariablesUpdate[Math.floor(Math.random() * svgStyles.length)]}.svg`}
                  alt={svg}
                  onClick={() => setSelect(index)}
                />
              ) : (
                <img
                  className={svgStyles[index]}
                  src={`images/emojis/${svg}.svg`}
                  alt={svg}
                  onClick={() => setSelect(index)}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};
export default Emoji;
