
import Clientcomponent from "../../components/client-component";
import styles from "./page.module.css";
import ServerComponent from "../../components/server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      index page
      <Clientcomponent>
        {/* children으로 받아서 서버컴포넌트 유지하기 */}
        <ServerComponent/>
      </Clientcomponent>
    </div>
  );
}
