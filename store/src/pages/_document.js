import SettingServices from "@services/SettingServices";
import { getValidImagePath } from "@utils/filePath";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Fetch general metadata from backend API
    const setting = await SettingServices.getStoreSeoSetting();

    return { ...initialProps, setting };
  }

  render() {
    const setting = this.props.setting;
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={getValidImagePath(setting?.seo?.favicon || "/favicon.png")} />
          <meta property="og:title" content={setting?.meta_title || "ZAPMarketplace - Store e-commerce"} />
          <meta property="og:type" content="eCommerce Website" />
          <meta property="og:description" content={setting?.meta_description || "Store e-commerce"} />
          <meta name="keywords" content={setting?.meta_keywords || "ecommenrce online store"} />
          <meta property="og:url" content={setting?.meta_url || "https://store.zapmarketplace.online/"} />
          <meta
            property="og:image"
            content={getValidImagePath(setting?.meta_img || "https://res.cloudinary.com/dapzqelui/image/upload/v1701957157/images/facebook-page.png")}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
