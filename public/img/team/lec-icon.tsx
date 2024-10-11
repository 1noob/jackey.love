import React from "react";

import { IconSvgProps } from "@/types";

const FNC: React.FC<IconSvgProps> = ({
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
      viewBox="132.2805 557.79 802.3655 517.556"
      {...props}
    >
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="none"
        d="&#10;M559.566650,637.983154 &#10;&#9;C559.598877,637.103516 559.631104,636.223938 559.553711,633.890564 &#10;&#9;C558.254578,617.205627 556.968933,601.981140 555.914185,586.740601 &#10;&#9;C555.341797,578.470520 555.162231,570.173157 554.805542,561.888123 &#10;&#9;C555.046692,561.024048 555.287842,560.159973 556.648560,558.644897 &#10;&#9;C565.848083,557.925903 573.928040,557.857910 582.007935,557.789978 &#10;&#9;C604.282776,559.115479 626.555176,560.485291 648.833008,561.757568 &#10;&#9;C701.768494,564.780823 754.331970,571.204102 806.415955,580.876831 &#10;&#9;C849.236816,588.829285 891.753479,598.420105 934.645996,607.334900 &#10;&#9;C931.464539,615.331482 874.408630,682.166626 856.496460,699.509033 &#10;&#9;C797.350098,688.395142 737.964172,676.598206 676.089355,671.894531 &#10;&#9;C679.068848,682.631042 681.432190,692.513428 684.545288,702.153687 &#10;&#9;C715.996216,799.548645 770.467834,881.063416 851.864929,943.890686 &#10;&#9;C855.228210,946.486694 857.367065,948.892395 857.342041,953.621460 &#10;&#9;C857.134216,992.939636 857.227112,1032.259399 857.186523,1071.578613 &#10;&#9;C857.185669,1072.449707 856.681885,1073.320312 856.146118,1075.053467 &#10;&#9;C852.656006,1073.126831 849.477844,1071.540894 846.465759,1069.685303 &#10;&#9;C711.338623,986.446045 620.586853,869.170898 576.599304,716.429932 &#10;&#9;C569.899963,693.167419 566.004517,669.097473 560.586548,643.948364 &#10;&#9;C560.096130,640.991516 559.831360,639.487305 559.566650,637.983154 &#10;z"
        transform="matrix(1, 0, 0, 1, -2.842170943040401e-14, -1.1368683772161603e-13)"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="none"
        d="&#10;M509.992889,632.017151 &#10;&#9;C505.664612,654.148010 502.128143,676.469116 496.863098,698.374817 &#10;&#9;C479.368591,771.162292 448.688751,838.127686 405.413391,900.551636 &#10;&#9;C404.113281,902.490723 403.531311,903.558228 402.949341,904.625671 &#10;&#9;C402.949341,904.625671 402.808136,904.862061 402.210754,905.309448 &#10;&#9;C400.371490,907.833191 399.129578,909.909485 397.887634,911.985779 &#10;&#9;C397.887604,911.985779 398.007507,911.990417 397.419739,912.140015 &#10;&#9;C396.296112,913.341858 395.760223,914.394104 395.224304,915.446350 &#10;&#9;C395.224304,915.446350 395.687866,915.759705 394.900909,915.869629 &#10;&#9;C391.791260,919.233704 389.468597,922.487854 386.599182,926.077698 &#10;&#9;C379.301636,934.823730 372.550842,943.234009 365.190918,951.919312 &#10;&#9;C361.698853,955.593323 358.815887,958.992371 355.373901,962.611450 &#10;&#9;C353.595093,964.419800 352.375275,966.008301 351.155487,967.596741 &#10;&#9;C350.616119,967.735779 350.198486,968.041260 349.207764,969.017944 &#10;&#9;C348.183197,970.160400 347.853455,970.798096 347.523712,971.435730 &#10;&#9;C347.523712,971.435730 347.656433,971.670349 347.027588,971.675720 &#10;&#9;C346.112946,972.270752 345.827148,972.860352 345.541321,973.450012 &#10;&#9;C345.541351,973.450012 345.675171,973.661499 345.046906,973.700562 &#10;&#9;C344.149200,974.347412 343.879761,974.955139 343.610352,975.562927 &#10;&#9;C343.610321,975.562927 343.907196,975.906738 343.208191,975.830017 &#10;&#9;C342.212006,976.354797 341.914856,976.956299 341.617737,977.557800 &#10;&#9;C341.617737,977.557800 341.876404,977.873535 341.193542,977.808105 &#10;&#9;C340.211090,978.336914 339.911469,978.931274 339.611877,979.525574 &#10;&#9;C339.611877,979.525574 339.768799,979.764832 339.125061,979.749634 &#10;&#9;C338.189453,980.332825 337.897552,980.931274 337.605682,981.529663 &#10;&#9;C337.605682,981.529663 337.801849,981.798645 337.141754,981.771301 &#10;&#9;C336.197083,982.348389 335.912537,982.952759 335.627930,983.557129 &#10;&#9;C335.627930,983.557129 335.830597,983.822021 335.175903,983.771912 &#10;&#9;C334.212860,984.297607 333.904480,984.873474 333.596130,985.449341 &#10;&#9;C333.596130,985.449341 333.572327,985.559082 333.002045,985.610291 &#10;&#9;C332.137726,986.241577 331.843719,986.821655 331.549683,987.401733 &#10;&#9;C331.549683,987.401733 331.507446,987.498596 330.951843,987.572327 &#10;&#9;C330.109772,988.219604 329.823334,988.793152 329.536865,989.366699 &#10;&#9;C329.536896,989.366699 329.469330,989.463684 328.922852,989.545166 &#10;&#9;C328.092621,990.187317 327.808868,990.747986 327.525116,991.308655 &#10;&#9;C327.525116,991.308655 327.427734,991.413208 326.896667,991.477173 &#10;&#9;C325.694458,991.850525 325.397614,992.372681 325.475067,993.107605 &#10;&#9;C325.475067,993.107605 325.261566,993.242493 324.751038,993.372070 &#10;&#9;C323.632233,993.815674 323.379272,994.311096 323.481628,994.987854 &#10;&#9;C323.481628,994.987854 323.152283,995.129578 322.665985,995.293823 &#10;&#9;C321.617126,995.735840 321.389557,996.183655 321.497040,996.801575 &#10;&#9;C321.497040,996.801575 320.993622,996.973877 320.565674,997.200073 &#10;&#9;C319.657349,997.643799 319.473114,998.009888 319.584930,998.524658 &#10;&#9;C319.584930,998.524658 318.803375,998.821838 318.433228,999.232544 &#10;&#9;C318.063080,999.643311 317.686737,1000.343994 317.686737,1000.343994 &#10;&#9;C317.686737,1000.343994 316.936584,1000.572998 316.169037,1001.098206 &#10;&#9;C312.782928,1004.202026 310.164337,1006.780640 307.545776,1009.359253 &#10;&#9;C307.545807,1009.359253 307.471771,1009.452942 306.959961,1009.469360 &#10;&#9;C305.785034,1009.748047 305.472931,1010.235168 305.511810,1010.947083 &#10;&#9;C305.511810,1010.947083 305.132294,1011.088623 304.670593,1011.242737 &#10;&#9;C303.668976,1011.633484 303.451355,1012.041809 303.556030,1012.621704 &#10;&#9;C303.556030,1012.621704 303.010193,1012.775696 302.280670,1013.198120 &#10;&#9;C298.410614,1016.429688 295.270081,1019.238892 292.129517,1022.048157 &#10;&#9;C292.129547,1022.048157 292.015320,1021.998596 291.398254,1022.151855 &#10;&#9;C288.345612,1024.493774 285.910095,1026.682373 283.474548,1028.871094 &#10;&#9;C283.474548,1028.871094 283.113312,1029.009766 282.419739,1029.280518 &#10;&#9;C279.645325,1031.353516 277.564484,1033.155762 275.483673,1034.958130 &#10;&#9;C275.483673,1034.958130 275.212311,1035.093872 274.537262,1035.299072 &#10;&#9;C272.443115,1036.801636 271.024048,1038.099243 269.604950,1039.396729 &#10;&#9;C269.604950,1039.396729 269.526550,1039.479614 269.033997,1039.455566 &#10;&#9;C267.880615,1039.642578 267.550171,1040.094849 267.550018,1040.788452 &#10;&#9;C267.550018,1040.788452 267.116638,1040.922729 266.405212,1041.204712 &#10;&#9;C263.861908,1043.014404 262.029999,1044.542236 260.198120,1046.069946 &#10;&#9;C260.198120,1046.069946 260.054108,1046.032104 259.456543,1046.119263 &#10;&#9;C257.767578,1047.235596 256.676239,1048.264893 255.584869,1049.294067 &#10;&#9;C255.584869,1049.294067 255.468964,1049.389038 254.724457,1049.508057 &#10;&#9;C240.419998,1058.137207 227.354050,1067.521240 211.816849,1075.008301 &#10;&#9;C211.816849,1071.250854 211.816528,1069.266846 211.816925,1067.282837 &#10;&#9;C211.824173,1030.017822 211.817612,992.752747 211.865234,955.487732 &#10;&#9;C211.869049,952.507263 212.246872,949.527344 212.450912,946.547180 &#10;&#9;C212.450912,946.547180 212.512604,946.463623 212.998047,946.488525 &#10;&#9;C214.141846,946.289246 214.442657,945.830688 214.385925,945.137695 &#10;&#9;C214.385925,945.137695 214.828674,945.023193 215.540863,944.755737 &#10;&#9;C218.335434,942.652222 220.417786,940.816162 222.500153,938.980103 &#10;&#9;C222.500168,938.980103 222.839691,938.847717 223.286011,938.743530 &#10;&#9;C224.279617,938.421021 224.487961,938.024780 224.357361,937.450562 &#10;&#9;C224.357361,937.450562 225.035645,937.297852 225.768723,936.868164 &#10;&#9;C228.476807,934.547913 230.451813,932.657288 232.426819,930.766724 &#10;&#9;C232.426819,930.766724 232.626984,930.665527 233.125183,930.609131 &#10;&#9;C234.248642,930.290344 234.519531,929.822754 234.436096,929.149902 &#10;&#9;C234.436096,929.149902 234.852646,929.010498 235.587830,928.681702 &#10;&#9;C247.084274,917.961426 257.845520,907.569946 268.606812,897.178467 &#10;&#9;C268.606812,897.178467 269.085388,896.980957 269.533569,896.741821 &#10;&#9;C270.494202,896.231995 270.660461,895.821411 270.480499,895.270874 &#10;&#9;C270.480499,895.270874 271.060547,895.073853 271.539581,894.758972 &#10;&#9;C272.548645,894.135071 272.717834,893.689209 272.526184,893.106506 &#10;&#9;C272.526184,893.106506 272.868530,892.944336 273.516388,892.587158 &#10;&#9;C275.588776,890.363464 277.013336,888.496948 278.437866,886.630371 &#10;&#9;C278.437866,886.630371 278.536499,886.532654 279.183655,886.324707 &#10;&#9;C281.285828,884.148071 282.740845,882.179321 284.195862,880.210571 &#10;&#9;C284.195862,880.210571 284.007141,880.011169 284.691711,879.967407 &#10;&#9;C286.487427,878.321960 287.598572,876.720215 288.709717,875.118530 &#10;&#9;C288.709747,875.118530 289.073975,874.905090 289.564941,874.610535 &#10;&#9;C290.600098,873.921509 290.757477,873.408447 290.528107,872.776672 &#10;&#9;C290.528107,872.776672 290.644714,872.652100 291.273987,872.405273 &#10;&#9;C293.517212,869.901001 295.131226,867.643494 296.745239,865.386047 &#10;&#9;C296.745239,865.386047 297.337952,865.065186 297.751648,864.703003 &#10;&#9;C298.615845,864.051331 298.740936,863.658569 298.540649,863.162415 &#10;&#9;C298.540649,863.162415 298.896088,862.983154 299.515869,862.546753 &#10;&#9;C301.663879,859.793579 303.192108,857.476746 304.720337,855.159973 &#10;&#9;C304.720337,855.159973 305.120453,854.936218 305.607422,854.618042 &#10;&#9;C306.631500,853.904114 306.779877,853.395081 306.539551,852.772827 &#10;&#9;C306.539551,852.772827 306.649628,852.642090 307.270905,852.324280 &#10;&#9;C309.430817,849.550293 310.969421,847.094116 312.508057,844.637878 &#10;&#9;C312.508026,844.637878 312.557037,844.535950 313.169434,844.285950 &#10;&#9;C314.741425,842.292542 315.701050,840.549133 316.660706,838.805786 &#10;&#9;C316.660706,838.805786 316.782104,838.667664 317.311981,838.411499 &#10;&#9;C317.999298,837.526794 318.156738,836.898376 318.314148,836.269897 &#10;&#9;C318.314148,836.269897 318.002441,836.000000 318.693481,835.979980 &#10;&#9;C319.838043,834.980408 320.291626,834.000916 320.745178,833.021423 &#10;&#9;C320.745148,833.021423 320.930450,832.832275 321.531738,832.388794 &#10;&#9;C324.080139,828.588623 326.027222,825.231934 327.974304,821.875244 &#10;&#9;C327.974304,821.875244 328.452728,821.528748 329.087616,820.909302 &#10;&#9;C330.637299,818.340881 331.552094,816.391846 332.466919,814.442871 &#10;&#9;C332.466919,814.442871 332.179077,814.161133 332.947510,813.984375 &#10;&#9;C335.301331,810.683472 336.886688,807.559326 338.472046,804.435242 &#10;&#9;C338.472046,804.435242 338.048676,804.112793 338.793549,804.052856 &#10;&#9;C339.704254,803.296082 339.870056,802.599243 340.035889,801.902344 &#10;&#9;C360.089508,768.300049 374.719940,732.356506 386.093079,695.017639 &#10;&#9;C388.125946,688.343689 389.876801,681.583374 391.704865,674.848511 &#10;&#9;C391.866180,674.254272 391.632446,673.552795 391.519623,672.090149 &#10;&#9;C331.056458,676.542297 271.425110,686.222717 211.457535,699.778320 &#10;&#9;C185.403671,669.910217 159.264206,639.943970 132.280487,609.009888 &#10;&#9;C258.045441,576.215820 384.125244,558.928772 513.416626,557.853760 &#10;&#9;C513.416626,566.365417 513.416626,574.228210 513.215332,583.740601 &#10;&#9;C512.302856,597.627563 511.591644,609.864990 510.880432,622.102417 &#10;&#9;C510.699249,622.960083 510.518066,623.817749 510.137024,626.045410 &#10;&#9;C509.955750,628.949341 509.974335,630.483276 509.992889,632.017151 &#10;z"
        transform="matrix(1, 0, 0, 1, -2.842170943040401e-14, -1.1368683772161603e-13)"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="none"
        d="&#10;M485.378632,850.067139 &#10;&#9;C487.113556,849.397827 488.846313,848.151733 490.583801,848.145142 &#10;&#9;C520.237549,848.032715 549.891907,848.067688 579.546082,848.109009 &#10;&#9;C580.481812,848.110291 581.417053,848.525085 582.957397,848.890625 &#10;&#9;C583.122620,851.758606 583.432739,854.666199 583.435974,857.574158 &#10;&#9;C583.473022,891.226807 583.335388,924.880432 583.589172,958.531189 &#10;&#9;C583.632812,964.327881 581.783508,968.566956 578.051270,972.791382 &#10;&#9;C555.997925,997.753296 534.140198,1022.888123 511.412231,1048.794922 &#10;&#9;C510.263458,1050.344604 509.919098,1051.064087 509.574768,1051.783691 &#10;&#9;C509.574768,1051.783691 509.771393,1051.804443 509.166504,1051.912476 &#10;&#9;C507.667969,1053.331909 506.774292,1054.643311 505.880615,1055.954712 &#10;&#9;C505.880646,1055.954712 505.998718,1055.990234 505.437469,1056.072510 &#10;&#9;C504.257477,1057.058716 503.638763,1057.962646 503.020050,1058.866699 &#10;&#9;C503.020050,1058.866699 502.950073,1059.063110 502.460083,1059.334473 &#10;&#9;C501.434570,1060.007568 501.180237,1060.542969 501.207184,1061.212036 &#10;&#9;C501.435028,1061.484497 501.662872,1061.756958 500.951599,1061.928955 &#10;&#9;C495.305450,1066.653320 490.598328,1071.478149 485.879333,1075.345947 &#10;&#9;C485.857300,1003.255920 485.853851,932.122864 485.817566,860.989746 &#10;&#9;C485.815704,857.348816 485.531433,853.708008 485.378632,850.067139 &#10;z"
        transform="matrix(1, 0, 0, 1, -2.842170943040401e-14, -1.1368683772161603e-13)"
      />
    </svg>
  );
};

export { FNC };
