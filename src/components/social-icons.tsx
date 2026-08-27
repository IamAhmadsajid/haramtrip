// src/components/social-icons.tsx
import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.021 10.125 11.93v-8.437H7.078v-3.493h3.047V9.429c0-3.033 1.792-4.711 4.533-4.711 1.312 0 2.686.236 2.686.236v2.977h-1.515c-1.491 0-1.956.93-1.956 1.886v2.256h3.328l-.532 3.493h-2.796v8.437C19.612 23.094 24 18.099 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PinterestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.157 9.43 7.613 11.2-.105-.95-.2-2.41.042-3.45l1.35-5.73s-.344-.69-.344-1.71c0-1.6.927-2.79 2.082-2.79.982 0 1.457.738 1.457 1.623 0 .989-.63 2.467-.954 3.838-.272 1.148.576 2.084 1.707 2.084 2.049 0 3.624-2.16 3.624-5.278 0-2.76-1.984-4.69-4.817-4.69-3.28 0-5.207 2.46-5.207 5.005 0 .991.382 2.054.859 2.632.094.113.108.212.08.327l-.32 1.31c-.052.211-.17.256-.392.154-1.463-.681-2.378-2.82-2.378-4.54 0-3.696 2.685-7.088 7.742-7.088 4.066 0 7.229 2.898 7.229 6.77 0 4.04-2.547 7.288-6.084 7.288-1.188 0-2.304-.617-2.687-1.345l-.73 2.778c-.264 1.017-.98 2.29-1.46 3.067A12.01 12.01 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M23.498 6.186a3.01 3.01 0 00-2.12-2.13C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.378.556a3.01 3.01 0 00-2.12 2.13C0 8.065 0 12 0 12s0 3.935.502 5.814a3.01 3.01 0 002.12 2.13C4.495 20.5 12 20.5 12 20.5s7.505 0 9.378-.556a3.01 3.01 0 002.12-2.13C24 15.935 24 12 24 12s0-3.935-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19.589 6.686a4.793 4.793 0 01-4.154-4.278V2h-3.3v13.6a2.877 2.877 0 11-2.876-2.877c.197 0 .39.02.575.057v-3.36a6.19 6.19 0 00-.575-.027A6.207 6.207 0 1015.435 15V8.12a8.06 8.06 0 004.154 1.145V6.686z" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}