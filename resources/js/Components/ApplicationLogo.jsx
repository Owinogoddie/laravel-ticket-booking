export default function ApplicationLogo(props) {
    return (
        // <svg width="518" height="120"  fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
        <svg
            {...props}
            viewBox="0 0 518 120"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M-3.08811e-06 27.6619C-1.72904e-06 19.889 8.47971 15.0878 15.145 19.087L40.2899 34.174C46.314 37.7884 50 44.2986 50 51.3238L50 68.6762C50 75.7015 46.314 82.2116 40.2899 85.8261L15.1449 100.913C8.47968 104.912 -1.57555e-05 100.111 -1.43965e-05 92.3381L-3.08811e-06 27.6619Z"
                fill="#FA776C"
            />
            <path
                d="M103.855 -3.00576e-06C109.151 -1.88027e-06 111.85 6.36198 108.169 10.1701L94.8962 23.9004C91.1279 27.7987 85.9383 30 80.5165 30L55.5397 30C51.9148 30 48.3581 29.0148 45.2498 27.1498L18.5749 11.1449C13.3568 8.01404 15.5766 -2.17645e-05 21.6619 -2.04714e-05L103.855 -3.00576e-06Z"
                fill="#624CF5"
            />
            <path
                d="M103.855 120C109.151 120 111.85 113.638 108.169 109.83L94.8962 96.0995C91.1279 92.2013 85.9384 90 80.5165 90L55.5397 90C51.9148 90 48.3581 90.9851 45.2498 92.8501L18.5749 108.855C13.3568 111.986 15.5766 120 21.6619 120L103.855 120Z"
                fill="#624CF5"
            />
            <rect x="56" y="45" width="30" height="30" rx="15" fill="#FA776C" />
            <path
                d="M164.272 52.872H196.624V64.968H164.272V52.872ZM165.424 80.52H202V93H149.968V25.8H200.752V38.28H165.424V80.52ZM226.866 93L205.169 41.352H220.626L238.674 85.8H230.994L249.714 41.352H264.114L242.322 93H226.866ZM294.45 93.768C288.562 93.768 283.378 92.616 278.898 90.312C274.482 88.008 271.058 84.872 268.626 80.904C266.194 76.872 264.978 72.296 264.978 67.176C264.978 61.992 266.162 57.416 268.53 53.448C270.962 49.416 274.258 46.28 278.418 44.04C282.578 41.736 287.282 40.584 292.53 40.584C297.586 40.584 302.13 41.672 306.162 43.848C310.258 45.96 313.49 49.032 315.858 53.064C318.226 57.032 319.41 61.8 319.41 67.368C319.41 67.944 319.378 68.616 319.314 69.384C319.25 70.088 319.186 70.76 319.122 71.4H277.17V62.664H311.25L305.49 65.256C305.49 62.568 304.946 60.232 303.858 58.248C302.77 56.264 301.266 54.728 299.346 53.64C297.426 52.488 295.186 51.912 292.626 51.912C290.066 51.912 287.794 52.488 285.81 53.64C283.89 54.728 282.386 56.296 281.298 58.344C280.21 60.328 279.666 62.696 279.666 65.448V67.752C279.666 70.568 280.274 73.064 281.49 75.24C282.77 77.352 284.53 78.984 286.77 80.136C289.074 81.224 291.762 81.768 294.834 81.768C297.586 81.768 299.986 81.352 302.034 80.52C304.146 79.688 306.066 78.44 307.794 76.776L315.762 85.416C313.394 88.104 310.418 90.184 306.834 91.656C303.25 93.064 299.122 93.768 294.45 93.768ZM360.773 40.584C364.869 40.584 368.517 41.416 371.717 43.08C374.981 44.68 377.541 47.176 379.397 50.568C381.253 53.896 382.181 58.184 382.181 63.432V93H367.205V65.736C367.205 61.576 366.277 58.504 364.421 56.52C362.629 54.536 360.069 53.544 356.741 53.544C354.373 53.544 352.229 54.056 350.309 55.08C348.453 56.04 346.981 57.544 345.893 59.592C344.869 61.64 344.357 64.264 344.357 67.464V93H329.381V41.352H343.685V55.656L340.997 51.336C342.853 47.88 345.509 45.224 348.965 43.368C352.421 41.512 356.357 40.584 360.773 40.584ZM416.876 93.768C410.796 93.768 406.06 92.232 402.668 89.16C399.276 86.024 397.58 81.384 397.58 75.24V29.928H412.556V75.048C412.556 77.224 413.132 78.92 414.284 80.136C415.436 81.288 417.004 81.864 418.988 81.864C421.356 81.864 423.372 81.224 425.036 79.944L429.068 90.504C427.532 91.592 425.676 92.424 423.5 93C421.388 93.512 419.18 93.768 416.876 93.768ZM389.612 54.024V42.504H425.42V54.024H389.612ZM437.475 93V21.768H452.451V93H437.475ZM472.878 112.392C470.19 112.392 467.534 111.976 464.91 111.144C462.286 110.312 460.142 109.16 458.477 107.688L463.95 97.032C465.102 98.056 466.414 98.856 467.886 99.432C469.422 100.008 470.926 100.296 472.398 100.296C474.51 100.296 476.174 99.784 477.39 98.76C478.67 97.8 479.822 96.168 480.846 93.864L483.534 87.528L484.686 85.896L503.214 41.352H517.614L494.286 96.168C492.622 100.328 490.702 103.592 488.526 105.96C486.414 108.328 484.046 109.992 481.422 110.952C478.862 111.912 476.014 112.392 472.878 112.392ZM481.71 95.016L458.669 41.352H474.126L491.982 84.552L481.71 95.016Z"
                fill="black"
            />
        </svg>
    );
}
