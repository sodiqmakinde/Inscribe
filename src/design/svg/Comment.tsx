import { SvgProps } from "@/helpers/SvgMapper";

export const Comment = ({
  className,
  width = 24,
  height = 24,
  responsive = false,
}: SvgProps) => {
  const svgAttributes = responsive ? {} : { width, height };
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      {...svgAttributes}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 25C15.3734 25 17.6934 24.2962 19.6668 22.9776C21.6402 21.6591 23.1783 19.7849 24.0865 17.5922C24.9948 15.3995 25.2324 12.9867 24.7694 10.6589C24.3064 8.33115 23.1635 6.19295 21.4853 4.51472C19.807 2.83649 17.6689 1.6936 15.3411 1.23058C13.0133 0.767559 10.6005 1.0052 8.4078 1.91345C6.21508 2.8217 4.34094 4.35977 3.02236 6.33316C1.70379 8.30655 1 10.6266 1 13C1 14.984 1.48 16.8547 2.33333 18.5027L1 25L7.49733 23.6667C9.14533 24.52 11.0173 25 13 25Z"
        stroke="#929190"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
