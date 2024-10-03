import React from 'react'
import styles from "./PaperCupWithSleeve.module.css"
interface PaperCupWithSleeve {
  width?: string | number; // Width can be a string (e.g., '100px') or a number (e.g., 100 for pixels)
}
const PaperCupWithSleeve: React.FC<PaperCupWithSleeve> = ({ width="100" }) => {
  return (
    <div>
        <svg width={width} viewBox="0 0 811 811" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.border} d="M424.802 784.221C418.314 784.221 411.664 784.221 405.176 784.221C385.549 784.383 365.761 784.545 346.135 784.545C341.269 784.545 336.565 784.383 331.699 784.221C322.129 783.896 312.722 783.41 303.152 783.085C296.826 782.761 290.338 782.436 284.012 781.95C278.822 781.625 273.631 781.463 268.603 780.652C259.682 779.192 252.708 771.569 251.572 762.324C249.95 750.159 248.49 738.156 246.868 725.991C245.409 714.799 243.787 703.769 242.327 692.578C240.543 679.602 238.921 666.626 237.299 653.812C235.677 641.485 234.217 629.157 232.595 616.83C231.297 606.449 229.837 596.069 228.378 585.688C226.918 574.172 225.458 562.818 223.998 551.301C222.538 540.11 220.916 528.918 219.457 517.726C218.159 507.345 216.861 496.802 215.402 486.421C214.104 476.203 212.644 466.146 211.184 455.928C209.887 445.709 208.589 435.491 207.129 425.11C205.832 414.891 204.372 404.673 202.912 394.454C201.452 383.1 199.993 371.746 198.533 360.392C198.046 356.824 198.046 356.824 194.64 356.824C192.694 356.824 190.909 356.824 188.963 356.824C186.53 356.824 184.908 355.202 184.908 352.769C184.908 350.498 186.53 349.038 188.963 348.876C189.612 348.876 190.423 348.876 191.072 348.876C313.533 348.876 436.156 348.876 558.617 348.876C559.428 348.876 560.239 348.876 560.888 348.876C563.321 349.038 564.78 350.66 564.618 352.931C564.618 355.202 563.158 356.661 560.888 356.824C557.806 356.986 554.724 356.824 551.804 356.824C550.507 356.824 550.02 357.31 549.858 358.608C548.885 366.88 547.587 374.99 546.452 383.262C545.316 391.534 544.343 399.969 543.208 408.241C542.235 415.378 541.261 422.515 540.288 429.814C539.315 437.113 538.342 444.412 537.369 451.711C536.071 461.118 534.773 470.364 533.638 479.771C532.503 488.043 531.529 496.478 530.394 504.75C529.259 513.022 528.123 521.132 527.15 529.404C526.177 536.866 525.204 544.327 524.23 551.95C523.419 558.114 522.608 564.277 521.797 570.441C520.986 577.091 520.013 583.741 519.202 590.392C518.391 596.717 517.58 602.881 516.607 609.207C515.634 616.668 514.661 624.129 513.687 631.428C512.714 638.727 511.741 646.026 510.768 653.325C509.957 659.975 509.146 666.463 508.173 673.114C507.362 679.439 506.551 685.603 505.577 691.929C504.766 698.417 503.955 705.067 502.982 711.555C502.171 717.881 501.36 724.369 500.549 730.695C499.576 738.318 498.603 745.941 497.63 753.565C496.819 758.755 496.981 764.27 494.548 769.136C490.331 777.084 483.68 780.977 474.922 781.463C467.298 781.95 459.837 782.436 452.376 782.923C449.943 783.085 447.51 783.247 445.077 783.41C438.264 783.734 431.452 783.896 424.802 784.221C424.802 784.058 424.802 783.896 424.802 784.221ZM374.358 356.661C319.534 356.661 264.548 356.661 209.725 356.661C209.076 356.661 208.427 356.661 207.778 356.661C206.318 356.499 205.994 357.148 206.156 358.446C207.292 367.042 208.427 375.477 209.562 384.073C211.509 399.32 213.617 414.567 215.726 429.651C217.997 446.682 220.268 463.876 222.538 480.907C224.485 495.991 226.593 511.076 228.54 526.16C231.297 547.409 234.055 568.819 236.812 590.067C239.732 611.802 242.489 633.537 245.409 655.434C247.679 672.465 249.95 689.496 252.221 706.689C254.654 724.855 256.925 743.022 259.358 761.188C260.169 767.19 265.197 772.704 270.874 773.029C280.444 773.84 290.014 774.489 299.583 774.975C308.18 775.462 316.614 775.786 325.211 776.111C335.754 776.435 346.297 776.922 356.84 776.922C376.791 776.922 396.903 776.597 416.854 776.273C423.504 776.111 430.154 775.948 436.805 775.462C450.105 774.813 463.405 773.84 476.706 773.191C483.194 772.867 488.546 767.838 489.52 761.35C490.331 755.187 491.142 749.185 491.79 743.022C493.737 727.613 495.683 712.042 497.792 696.633C499.9 680.25 502.171 663.868 504.28 647.486C506.064 633.375 508.01 619.101 509.795 604.99C511.741 589.581 513.85 574.334 515.958 558.925C517.418 547.246 519.04 535.73 520.5 524.052C521.96 513.347 523.419 502.479 524.879 491.774C526.501 479.447 528.123 466.957 529.745 454.63C531.205 443.601 532.827 432.409 534.287 421.379C535.909 409.052 537.531 396.887 539.153 384.56C540.288 375.801 541.424 367.042 542.721 358.446C542.883 357.148 542.559 356.824 541.261 356.824C540.613 356.824 539.964 356.824 539.315 356.824C484.167 356.661 429.181 356.661 374.358 356.661Z" fill="black"/>
            <path className={styles.bg} d="M374.357 356.661C429.181 356.661 484.167 356.661 538.99 356.661C539.639 356.661 540.288 356.661 540.937 356.661C542.072 356.661 542.559 356.986 542.397 358.283C541.099 367.042 539.964 375.801 538.828 384.398C537.206 396.725 535.584 408.89 533.962 421.217C532.502 432.247 530.88 443.438 529.421 454.468C527.799 466.795 526.177 479.285 524.555 491.612C523.095 502.317 521.635 513.184 520.175 523.89C518.553 535.568 517.093 547.084 515.634 558.763C513.525 574.172 511.579 589.418 509.47 604.827C507.524 618.939 505.739 633.212 503.955 647.324C501.847 663.706 499.576 680.088 497.467 696.47C495.521 711.879 493.412 727.451 491.466 742.86C490.655 749.023 490.006 755.025 489.195 761.188C488.384 767.676 482.869 772.542 476.381 773.029C463.081 773.84 449.78 774.651 436.48 775.3C429.83 775.624 423.18 775.948 416.529 776.111C396.579 776.435 376.466 776.759 356.515 776.759C345.972 776.759 335.429 776.273 324.886 775.948C316.29 775.624 307.855 775.3 299.259 774.813C289.689 774.326 280.119 773.678 270.549 772.867C265.035 772.38 259.844 766.865 259.033 761.026C256.6 742.86 254.329 724.693 251.896 706.527C249.626 689.496 247.355 672.465 245.084 655.272C242.164 633.537 239.407 611.802 236.487 589.905C233.73 568.657 230.973 547.246 228.215 525.998C226.269 510.914 224.16 495.829 222.214 480.744C219.943 463.713 217.672 446.52 215.401 429.489C213.455 414.242 211.346 398.996 209.238 383.911C208.102 375.314 206.967 366.88 205.832 358.283C205.669 356.824 205.994 356.337 207.454 356.499C208.102 356.499 208.751 356.499 209.4 356.499C264.548 356.661 319.372 356.661 374.357 356.661Z" fill="white"/>
            <g className={styles.lid}>
            <path className={styles.border} d="M370.14 312.381C304.611 312.381 239.083 312.219 173.554 312.543C165.119 312.543 162.849 305.893 164.471 300.216C166.579 293.079 169.012 285.942 171.932 279.13C175.014 271.669 180.853 267.127 188.801 265.181C189.936 264.856 190.585 264.532 190.747 263.234C191.234 259.017 191.72 254.962 192.207 250.745C193.018 243.932 193.667 237.12 194.964 230.47C196.586 222.846 205.183 216.521 212.968 216.196C213.617 216.196 214.266 216.196 214.915 216.196C318.561 216.196 422.206 216.196 525.852 216.196C536.395 216.196 545.641 224.306 546.776 234.2C547.587 241.013 548.236 247.987 549.047 254.8C549.371 257.557 549.858 260.477 550.02 263.234C550.182 264.37 550.669 264.856 551.804 265.181C561.374 267.614 567.375 273.777 570.295 283.023C572.079 288.213 574.026 293.403 575.81 298.594C577.107 302.649 577.107 306.542 574.35 310.11C573.052 311.894 570.944 312.543 568.673 312.543C557.643 312.543 546.452 312.543 535.422 312.543C480.436 312.219 425.288 312.219 370.14 312.381ZM370.465 223.657C319.534 223.657 268.765 223.657 217.834 223.657C217.023 223.657 216.212 223.657 215.564 223.657C208.102 223.82 202.588 228.361 201.614 235.011C200.479 243.608 199.668 252.205 198.695 260.801C198.37 263.559 198.533 263.559 201.128 263.559C216.05 263.396 230.973 263.234 245.895 263.234C325.049 263.234 404.364 263.234 483.518 263.234C502.171 263.234 520.986 263.234 539.639 263.234C541.423 263.234 541.91 262.91 541.748 260.963C540.775 253.502 540.126 245.879 539.315 238.418C538.99 234.849 538.342 231.281 535.746 228.361C532.502 224.631 528.285 223.657 523.744 223.657C472.651 223.657 421.558 223.657 370.465 223.657ZM370.302 304.757C435.182 304.757 500.062 304.757 564.942 304.757C565.753 304.757 566.564 304.757 567.213 304.757C568.511 304.757 568.997 304.109 568.835 302.973C568.673 302.162 568.511 301.513 568.349 300.702C566.402 295.188 564.618 289.835 562.672 284.32C560.401 278.481 556.67 273.939 550.344 272.642C547.263 271.993 544.181 271.831 541.099 271.831C425.288 271.993 309.315 271.993 193.504 272.155C187.179 272.155 181.015 276.372 178.744 282.374C176.473 288.375 174.365 294.377 172.418 300.378C170.959 304.271 171.445 304.757 175.5 304.757C240.38 304.757 305.26 304.757 370.302 304.757Z" fill="black"/>
            <path  d="M370.465 223.657C421.558 223.657 472.651 223.657 523.744 223.657C528.447 223.657 532.665 224.631 535.746 228.361C538.342 231.281 538.99 234.849 539.315 238.418C540.126 245.879 540.937 253.502 541.748 260.963C542.072 262.91 541.423 263.234 539.639 263.234C520.986 263.234 502.171 263.234 483.518 263.234C404.364 263.234 325.049 263.234 245.895 263.234C230.973 263.234 216.05 263.396 201.128 263.559C198.37 263.559 198.37 263.559 198.695 260.801C199.668 252.205 200.479 243.608 201.614 235.011C202.425 228.361 208.102 223.82 215.564 223.657C216.375 223.657 217.186 223.657 217.834 223.657C268.765 223.657 319.696 223.657 370.465 223.657Z" fill="white"/>
            <path  d="M370.303 304.758C305.26 304.758 240.218 304.758 175.338 304.758C171.283 304.758 170.959 304.271 172.256 300.378C174.365 294.377 176.474 288.375 178.582 282.374C180.853 276.373 187.017 272.155 193.342 272.155C309.153 271.993 425.126 271.831 540.937 271.831C544.019 271.831 547.263 271.993 550.182 272.642C556.67 273.94 560.401 278.481 562.51 284.32C564.456 289.673 566.402 295.188 568.187 300.703C568.511 301.351 568.673 302.162 568.673 302.973C568.835 304.109 568.187 304.758 567.051 304.758C566.24 304.758 565.429 304.758 564.78 304.758C500.063 304.758 435.183 304.758 370.303 304.758Z" fill="white"/>
            </g>
            <path className={styles.sleeve} d="M506.226 631.915H242.002L221.403 472.31H527.15L506.226 631.915Z" fill="currentColor" />
            <path className={styles.leaf} d="M398.688 579.362C382.954 591.527 362.03 594.284 342.242 582.606C341.431 582.119 340.296 581.633 339.16 581.309C338.187 581.146 336.565 581.471 335.916 582.12C333.159 584.39 332.51 585.688 331.375 589.419C330.564 592.014 324.562 593.636 323.102 591.365C321.967 589.418 321.967 586.174 324.724 584.715C327.482 583.255 331.699 579.524 334.132 575.794C352.136 548.22 386.198 530.378 408.906 523.728C409.717 523.565 410.042 523.241 410.042 523.241C410.042 523.079 409.555 523.241 408.582 523.403C375.169 531.189 348.406 551.464 334.132 570.928C333.97 571.252 333.645 571.739 333.159 571.739C332.834 571.739 332.348 571.09 332.348 570.928C327.32 556.005 331.05 535.892 337.7 527.458C362.355 496.316 410.853 498.1 449.294 516.266C449.618 516.429 449.943 516.753 449.943 517.077C449.943 517.402 449.618 517.726 449.294 517.888C411.988 544.651 419.611 563.304 398.688 579.362Z" fill="white"/>
        </svg>
    </div>
  )
}

export default PaperCupWithSleeve