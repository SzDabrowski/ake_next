import { PropsWithChildren } from "react";
import AppHeader from "../AppHeader/AppHeader";
import MainContainer from "../MainContainer/MainContainer";
import Footer from "../Footer/Footer";
import MyToaster from "../utils/MyToaster";

import styles from "./AppLayout.module.scss";

const AppLayout = (props: PropsWithChildren<{}>) => {
  return (
    <div className={styles.layout}>
      <MyToaster />
      <AppHeader />
      <MainContainer>{props.children}</MainContainer>
      <Footer />
    </div>
  );
};

export default AppLayout;
