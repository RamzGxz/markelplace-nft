import Appshell from "@/components/layouts/appshell";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Appshell>
      <Component {...pageProps} />
    </Appshell>
  );
}
