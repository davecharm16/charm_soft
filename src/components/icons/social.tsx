import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function svgProps({ size = 24, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
    ...rest,
  };
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.85l-4.51-5.9L5.78 22H3l7.04-8.04L2 2h6.93l4.07 5.4L18.244 2zm-1.2 18.18h1.86L7.05 3.74H5.06l11.984 16.44z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88V14.9H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v6.98C18.34 21.13 22 16.99 22 12z" />
    </svg>
  );
}
