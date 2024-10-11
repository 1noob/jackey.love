import React from "react";

import { IconSvgProps } from "@/types";

const FLY: React.FC<IconSvgProps> = ({
  size = 16,
  shapeRendering = "geometricPrecision",
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 1280 1280"
      {...props}
    >
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="none"
        d="M 697.818 475.604 C 659.978 475.535 622.139 475.466 583.318 475.34 C 579.704 475.391 577.069 475.497 573.935 475.499 C 566.893 475.466 560.354 475.538 553.315 475.445 C 526.791 475.272 500.77 475.225 474.748 475.258 C 398.502 475.351 322.255 475.477 245.547 475.434 C 244.137 475.387 243.188 475.496 241.806 475.567 C 239.421 475.573 237.471 475.618 234.986 475.487 C 227 475.278 219.537 474.9 212.099 475.284 C 195.452 476.146 179.623 471.466 164.053 465.107 C 120.838 447.455 85.54 415.595 55.742 374.048 C 50.423 366.631 45.52 358.77 39.486 349.702 C 43.061 349.702 44.983 349.702 46.904 349.702 C 101.253 349.71 155.602 349.733 209.95 349.712 C 221.941 349.706 233.928 349.54 246.417 349.533 C 255.432 349.643 263.947 349.705 272.462 349.682 C 297.092 349.615 321.722 349.515 346.854 349.517 C 516.229 349.635 685.1 349.673 853.97 349.673 C 881.627 349.673 909.281 349.504 937.446 349.553 C 940.386 349.643 942.82 349.59 945.627 349.652 C 947.589 349.688 949.173 349.608 951.259 349.608 C 952.436 349.636 953.112 349.583 954.268 349.64 C 961.476 349.669 968.205 349.587 975.474 349.589 C 985.656 349.612 995.3 349.552 1005.433 349.613 C 1018.574 349.733 1031.227 349.733 1044.618 349.733 C 1039.896 357.303 1035.982 363.577 1031.767 370.087 C 1030.263 371.988 1029.074 373.668 1027.857 375.317 C 989.623 427.192 944.156 463.696 886.741 474.98 C 884.77 475.368 882.509 477.359 881.335 479.416 C 868.109 502.567 855.03 525.846 841.991 549.153 C 826.713 576.466 811.511 603.842 796.274 631.189 C 760.198 695.31 724.119 759.429 688.042 823.548 C 668.97 857.442 649.901 891.34 630.82 925.226 C 629.91 926.842 628.895 928.368 627.595 930.483 C 604.191 912.743 582.113 893.808 569.802 862.513 C 561.983 842.638 563.347 823.236 573.571 805.024 C 614.95 731.319 656.391 657.669 697.805 583.996 C 703.985 573.002 710.154 562 716.739 550.353 C 718.158 547.662 719.167 545.62 720.176 543.577 C 720.796 542.613 721.416 541.648 722.44 540.115 C 723.995 537.263 725.147 534.977 726.298 532.691 C 727.398 530.904 728.496 529.119 730.033 526.72 C 731.606 523.831 732.744 521.553 733.882 519.279 C 734.496 518.346 735.11 517.415 736.124 515.872 C 738.611 511.293 740.697 507.322 742.784 503.354 C 743.446 502.312 744.109 501.271 745.149 499.656 C 745.808 498.346 746.09 497.609 746.375 496.873 C 746.711 496.758 746.948 496.506 747.458 495.627 C 749.395 492.064 750.962 488.987 752.528 485.911 C 753.211 484.869 753.893 483.827 755.008 482.17 C 756.389 479.788 757.338 478.022 758.629 475.613 C 751.752 475.613 745.536 475.613 738.899 475.508 C 737.336 475.474 736.195 475.54 734.554 475.446 C 721.976 475.39 709.896 475.497 697.818 475.604 Z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="none"
        d="M 539.601 506.274 C 547.245 506.351 554.886 506.428 563.504 506.567 C 567.107 506.514 569.732 506.396 572.358 506.277 C 608.026 506.357 643.695 506.439 680.362 506.592 C 690.837 506.665 700.315 506.665 710.875 506.665 C 698.777 528.469 687.432 548.918 676.086 569.366 C 673.736 569.534 671.387 569.846 669.037 569.847 C 578.549 569.906 488.06 569.938 396.598 569.829 C 364.538 569.665 333.451 569.683 302.365 569.579 C 298.753 569.567 295.063 569.33 291.542 568.422 C 261.5 560.68 238.389 539.854 219.657 510.905 C 219.036 509.947 218.677 508.738 217.552 506.181 C 231.12 506.181 243.741 506.181 256.697 506.305 C 261.161 506.444 265.298 506.64 269.414 506.357 C 270.559 506.278 271.637 504.779 272.794 504.026 C 272.842 504.121 272.993 504.24 272.993 504.24 C 272.993 504.24 273.032 504.745 273.323 505.161 C 273.942 505.744 274.268 505.913 274.988 506.332 C 276.862 506.483 278.343 506.385 280.265 506.395 C 282.496 506.433 284.287 506.366 286.421 506.437 C 286.989 506.486 287.219 506.396 287.944 506.414 C 347.828 506.577 407.216 506.663 466.601 506.658 C 485.114 506.657 503.623 506.417 522.132 506.285 C 525.059 506.36 527.985 506.435 531.858 506.576 C 535.07 506.517 537.335 506.395 539.601 506.274 Z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="none"
        d="M 343.707 637.263 C 332.229 626.882 322.749 614.797 314.055 600.343 C 429.012 600.343 543.15 600.343 658.202 600.343 C 655.843 604.674 653.926 608.306 651.918 611.861 C 643.033 627.609 634.229 643.429 625.095 658.962 C 623.789 661.182 620.844 663.211 618.653 663.217 C 545.132 663.445 471.612 663.602 398.092 663.288 C 380.068 663.212 364.335 653.637 349.403 642.11 C 347.558 640.687 345.814 639.071 343.707 637.263 Z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="none"
        d="M 460.374 745.728 C 440.605 733.665 424.735 716.803 411.406 694.64 C 476.173 694.64 540.166 694.64 604.762 694.64 C 603.912 696.525 603.351 698.06 602.587 699.425 C 592.626 717.235 582.728 735.101 572.535 752.711 C 571.241 754.943 568.358 757.055 566.193 757.084 C 542.176 757.405 518.153 757.501 494.136 757.229 C 482.282 757.097 471.385 751.885 460.374 745.728 Z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="none"
        d="M 1240.514 350.588 C 1200.257 422.221 937.392 888.699 915.822 926.968 C 915.314 927.867 914.733 928.704 913.723 930.31 C 910.508 927.863 907.297 925.529 904.177 923.022 C 888.43 910.367 873.869 896.116 862.861 877.07 C 848.97 853.04 846.719 827.538 862.103 800.561 C 905.266 724.865 947.705 648.549 990.541 572.039 C 1006.654 543.286 1022.644 514.962 1038.676 486.677 C 1040.694 483.118 1042.948 479.757 1045.665 475.385 C 1017.746 475.385 990.804 475.385 963.862 475.385 C 997.006 466.276 1026.992 449.085 1054.763 424.921 C 1054.966 424.564 1055.03 424.567 1055.318 424.45 C 1055.845 424.001 1056.085 423.671 1056.327 423.338 C 1068.866 409.918 1081.802 397.001 1093.803 382.895 C 1101.36 374.01 1107.443 363.264 1114.372 353.55 C 1115.63 351.786 1117.78 349.896 1119.524 349.886 C 1158.981 349.688 1198.439 349.742 1237.897 349.77 C 1238.392 349.77 1238.887 350.066 1240.514 350.588 Z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="none"
        d="M 1056.076 423.466 C 1056.085 423.67 1055.845 424.002 1055.343 424.424 C 1055.24 424.102 1055.49 423.795 1056.076 423.466 Z"
      />
    </svg>
  );
};


export { FLY };
