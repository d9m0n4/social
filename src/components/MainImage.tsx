import image from '../../public/new.jpg';

export const MainImage = ({ width = 630, height = 450 }: { width?: number; height?: number }) => (
  <div>
    <svg
      width="628"
      height="432"
      viewBox="0 0 628 432"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="110"
        y="309"
        width="128.931"
        height="128.931"
        rx="10"
        transform="rotate(-45 110 309)"
        fill="#48AD43"
      />
      <rect
        x="449.084"
        y="87.1682"
        width="128.931"
        height="128.931"
        rx="10"
        transform="rotate(-45 449.084 87.1682)"
        fill="#48AD43"
      />
      <rect
        x="123"
        y="91"
        width="46.0652"
        height="46.0652"
        rx="10"
        transform="rotate(-45 123 91)"
        fill="#F6C31A"
      />
      <rect
        x="292"
        y="358"
        width="46.0652"
        height="46.0652"
        rx="10"
        transform="rotate(-45 292 358)"
        fill="#8DCEF4"
      />
      <rect
        x="169"
        y="136.573"
        width="46.0652"
        height="46.0652"
        rx="10"
        transform="rotate(-45 169 136.573)"
        fill="#48AD43"
      />
      <rect
        x="338"
        y="403.573"
        width="46.0652"
        height="46.0652"
        rx="10"
        transform="rotate(-45 338 403.573)"
        fill="#F6C31A"
      />
      <rect
        x="215"
        y="91"
        width="46.0652"
        height="46.0652"
        rx="10"
        transform="rotate(-45 215 91)"
        fill="#8DCEF4"
      />
      <rect
        x="384"
        y="358"
        width="46.0652"
        height="46.0652"
        rx="10"
        transform="rotate(-45 384 358)"
        fill="#48AD43"
      />
      <rect
        x="449.084"
        y="309"
        width="128.931"
        height="128.931"
        rx="10"
        transform="rotate(-45 449.084 309)"
        fill="#F6C31A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M233.929 187C230.024 190.905 230.024 197.237 233.929 201.142L364 331.213C367.905 335.118 374.237 335.118 378.142 331.213L508.213 201.142C512.118 197.237 512.118 190.905 508.213 187L378.142 56.9289C374.237 53.0237 367.905 53.0237 364 56.9289L233.929 187Z"
        fill="url(#pattern0_0_1)"
      />
      <rect
        x="-4"
        y="192.168"
        width="128.931"
        height="128.931"
        rx="10"
        transform="rotate(-45 -4 192.168)"
        fill="#8DCEF4"
      />
      <defs>
        <pattern id="pattern0_0_1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_0_1" transform="translate(-0.175818) scale(0.0015)" />
        </pattern>
        <image
          id="image0_0_1"
          width={image.width}
          height={image.height}
          href={image.src}
          preserveAspectRatio="xMidYMid slice"
        />
      </defs>
    </svg>
  </div>
);
