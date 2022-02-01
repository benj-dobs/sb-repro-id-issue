import { FC } from "react";

export interface CircleProps {
  id: string;
}

export const Circle: FC<CircleProps> = ({ id }) => (
  <svg id={id} width={16} height={16}>
    <defs>
      <clipPath id={`${id}-clip-path`}>
        <circle cx={8} cy={8} r={8} />
      </clipPath>
    </defs>
    <rect
      width={16}
      height={16}
      fill="#09f"
      clipPath={`url('#${id}-clip-path')`}
    />
  </svg>
);
