import { useScroll } from 'framer-motion';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { useRef } from 'react';
import SvgElements from '../src/Icons/SvgElements';


export default function MyDocument() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/AvenirNextGeorgian-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-UltLt.otf");
                font-weight:100;
                font-style:normal;
                font-display: fallback;
              }

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Thin.otf");
                font-weight:200;
                font-style:normal;
                font-display: fallback;
              }

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Light.otf");
                font-weight:300;
                font-style:normal;
                font-display: fallback;
              }

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Light.otf");
                font-weight:400;
                font-style:normal;
                font-display: fallback;
              }

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Regular.otf");
                font-weight:500;
                font-style:normal;
                font-display: fallback;
              }
                  
              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Medium.otf");
                font-weight:600;
                font-style:normal;
                font-display: fallback;
              }

                  
              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Bold.otf");
                font-weight:700;
                font-style:normal;
                font-display: fallback;
              }
                  
              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Black.otf");
                font-weight:900;
                font-style:normal;
                font-display: fallback;
              }
            `,
          }}
        />
      </Head>
      <body ref={ref}>
        {/* <script>0</script> */}
        <Main scroll={scrollYProgress} />
        <NextScript />

        <SvgElements />
      </body>
    </Html>)
}
