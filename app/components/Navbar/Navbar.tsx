import Link from "next/link";

import styles from "./Navbar.module.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <>
      <nav className={styles["navbar"]}></nav>
    </>
  );
};

export default Navbar;
