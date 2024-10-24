import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
