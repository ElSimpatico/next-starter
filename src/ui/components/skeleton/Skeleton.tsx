import { FaImage } from "react-icons/fa";
import { clsx } from "clsx";

import { SkeletonProps } from "./SkeletonProps";

import styles from "./Skeleton.module.css";

export default function Skeleton({
  width,
  height,
  className = "",
  circular,
  image,
}: SkeletonProps) {
  const rootClassname = clsx(styles.skeleton, {
    [styles.skeletonCircular]: circular,
    [className]: !!className,
  });

  return (
    <div
      style={{ width, height: circular ? width : height }}
      className={rootClassname}
    >
      <div className={styles.skeleton__background} />
      {image && <FaImage className={styles.skeleton__imageIcon} />}
    </div>
  );
}
