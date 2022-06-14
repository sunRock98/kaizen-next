import Image from "next/image";
import { LoginComponent } from "../components/LoginModal/Login";
import { RegisterComponent } from "../components/RegisterModal/RegisterModal";
import styles from "./index.module.scss";
import WEMHOENER from "../public/WEMHOENER.jpg";
import LogoSVG from "../public/logo.svg";
import { Col, Row, Space, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";

const { Title, Text } = Typography;

const Index = () => {
  return (
    <div className={styles.background}>
      <div className={styles.main_wrapper}>
        
        <div className={styles.header}>
          <Image src={LogoSVG} alt="LogoSVG" />

          <Space align="baseline">
            <RegisterComponent />
            <LoginComponent />
          </Space>
        </div>

        <div className={styles.content_wrapper}>
          <Row justify="space-between" gutter={48}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className={styles.text}>
                <Title className={styles.header} level={2}>
                  СПАСИБО, ЧТО ДЕЛАЕШЬ ЗАВОД ЛУЧШЕ
                </Title>
                <Text className={styles.kaizen_text}>
                  Кайдзен (яп. 改善) — японская философия или практика, которая
                  фокусируется на непрерывном совершенствовании процессов
                  производства, разработки, вспомогательных бизнес-процессов и
                  управления, а также всех аспектов жизни.
                </Text>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="flex justify_end">
                <div className={styles.image_wrapper}>
                  <Image
                    className={styles.image}
                    src={WEMHOENER}
                    alt="WEMHOENER"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* </Space> */}
      </div>
    </div>
  );
};

/* Retrieves pet(s) data from mongodb database */
// export async function getServerSideProps() {
//   await dbConnect();

//   /* find all the data in our database */
//   const result = await Pet.find({});
//   const pets = result.map((doc) => {
//     const pet = doc.toObject();
//     pet._id = pet._id.toString();
//     return pet;
//   });

//   return { props: { pets: pets } };
// }

export default Index;
