import "antd/dist/antd.variable.min.css";
import "../css/style.css";
import Head from "next/head";
import { ConfigProvider } from "antd";
import { AuthContextProvider } from "../components/AuthContextProvider/AuthContextProvider";

ConfigProvider.config({
  theme: { primaryColor: "#7d58d1" },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kastamonu Kaizen</title>
      </Head>
      <AuthContextProvider>
        <ConfigProvider>
          <Component {...pageProps} />
        </ConfigProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
