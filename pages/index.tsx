
import ItemCard from "@/components/item-card";
import DefaultLayout from "@/layouts/default";
import styles from "../styles/page-main.module.scss";
import ControllerCard from "@/components/controller-card";


export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className={styles.container}>
        <ControllerCard></ControllerCard>
        <ItemCard></ItemCard>
      </div>

    </DefaultLayout>
  );
}
