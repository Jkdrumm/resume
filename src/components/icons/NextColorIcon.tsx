import { Icon, type IconProps } from "@chakra-ui/react";
import { useId } from "react";

export const NextColorIcon: React.FC<IconProps> = (props) => {
  const id = useId();
  const [linearGradientA, linearGradientB, linearGradientC] = [
    `next-icon-a_${id}`,
    `next-icon-b_${id}`,
    `next-icon-c_${id}`,
  ];
  return (
    <Icon {...props}>
      <svg viewBox="0 0 100 100">
        <defs>
          <linearGradient
            id={linearGradientB}
            x1="60.5556"
            y1="64.7222"
            x2="80.2778"
            y2="89.1667"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="1" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={linearGradientC}
            x1="67.2222"
            y1="30"
            x2="67.1106"
            y2="59.3751"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="1" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <mask
          id={linearGradientA}
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100"
          height="100"
        >
          <circle cx="50" cy="50" r="50" fill="black" fillOpacity="1" />
        </mask>
        <g mask={`url(#${linearGradientA})`}>
          <circle
            cx="50"
            cy="50"
            r="48.3333"
            fill="black"
            stroke="white"
            fillOpacity="1"
            strokeOpacity="1"
            strokeWidth="3.33333"
          />
          <path
            d="M83.06 87.5113L38.4122 30H30V69.9833H36.7298V38.5464L77.7773 91.5806C79.6293 90.3409 81.394 88.9808 83.06 87.5113Z"
            fill={`url(#${linearGradientB})`}
          />
          <rect
            x="63.8889"
            y="30"
            width="6.66667"
            height="40"
            fill={`url(#${linearGradientC})`}
          />
        </g>
      </svg>
    </Icon>
  );
};
