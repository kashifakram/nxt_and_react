import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const Page = () => {
  return (
    <div className={styles.dsh}>
      <br />
      <Link href={"/blog"}>Check Blogs</Link>
      <h2>Dashboard</h2>
      <Image src="/18.jpg" alt={"Kashif in Al Ain"} width={700} height={500} />
    </div>
  );
};

export default Page;
