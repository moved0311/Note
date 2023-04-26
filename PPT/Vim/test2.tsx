/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-danger */
import 'anue-fe-sdk/web-axios-preset';
import React from 'react';
import idx from 'idx';
import Head from 'next/head';
import ScrollToTop from 'fe-common-library/dest/components/ScrollToTop';
import 'fe-common-library/dest/components/ScrollToTop/style.css';
import AppHeader from 'components/AppHeader/AppHeader';
import Footer from 'components/Footer/Footer';
import AppHK from 'components/AppHKStock/AppHKStock';
import IPO from 'components/AppHKStock/IPO';
import ETF from 'components/AppHKStock/ETF';
import Warrants from 'components/AppHKStock/Warrants';
import AnalyticsWrapper from 'components/App/AnalyticsWrapper';
import { SEND_GLOBAL_TARGET, SEND_LOBBY_TARGET, LOBBY_PAGE_VIEW_TARGETS, gaDataPrefixFactory } from 'utils/analytics';
import { getEnv } from 'utils/env';
import LobbyGaEvents from 'constant/analytics/lobby.json';
import SharedGaEvents from 'constant/analytics/shared.json';
import { etnetUrl } from 'utils/linkFactory';
import AnalyticsContextProvider from 'context/AnalyticsContextProvider';
import etnetHkstockMapping from 'constant/etnet/hkstock';
import { GETchartingHistoryBySymbol } from 'utils/apis';
import universalProps from 'constant/universal-props';
import { getCode } from 'utils/constants';

import QuoteContextProvider from '../context/QuoteContextProvider';
import { lobbyGlobalStyle } from '../styles/global.style';

const cnyesBaseUrl = getEnv('cnyesBaseUrl');
const googleAnalyticsId = getEnv('googleAnalyticsIdForLobby');
const googleAnalyticsName = 'lobby';
const GaEvents = { ...SharedGaEvents, ...LobbyGaEvents };
const DEFAULT_URL = `${etnetUrl}/content/cnyes/tc/stocks/delayed/home.php`;
const HKSTOCK_QUOTE_LENGTH = 5;

/*
  每個頁面(/, /etf, /ipo, /warrants)右邊都有固定高，有時第一次載入沒辦法監聽到postMessage造成高度壓縮
  設定右側欄位預設高度
*/
const HK_CONFIG = {
  ipo: {
    rightIframeHeight: 954,
  },
  etf: {
    rightIframeHeight: 1500,
  },
  warrants: {
    rightIframeHeight: 1828,
  },
  classroom: {
    rightIframeHeight: 1828,
  },
  default: {
    rightIframeHeight: 2972,
  },
};

const Index = props => {
  const App = () => {
    const subpage = props.subpage;

    switch (subpage) {
      case 'ipo':
        return <IPO {...props} rightIframeHeight={HK_CONFIG[subpage].rightIframeHeight} />;
      case 'etf':
        return <ETF {...props} rightIframeHeight={HK_CONFIG[subpage].rightIframeHeight} />;
      case 'warrants':
        return <Warrants {...props} rightIframeHeight={HK_CONFIG[subpage].rightIframeHeight} />;
      default:
        return <AppHK {...props} rightIframeHeight={HK_CONFIG.default.rightIframeHeight} />;
    }
  };

  return (
    <QuoteContextProvider>
      <Head>
        <title>香港股市、港股行情 - Anue 鉅亨網</title>
        <meta
          name="description"
          content="鉅亨網提供最完整的港股走勢，即時新聞、行情報價、股票漲跌排行、產業概念股、AH股、創新高、派息配息、記者會及股東戶資訊、協助投資人從新聞出發找尋大漲大跌表現原因，快速制定投資策略。"
        />
        <meta
          name="keywords"
          content="港股新聞、AH股、產業概念股、漲跌排行、恆生指數、藍紅籌國企指數、新聞找漲跌原因"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cnyes.com/hkstock" />
        <meta property="og:title" content="香港股市、港股行情 - Anue 鉅亨網" />
        <meta property="og:site_name" content="Anue 鉅亨網" />
        <meta
          property="og:description"
          content="鉅亨網提供最完整的港股走勢，即時新聞、行情報價、股票漲跌排行、產業概念股、AH股、創新高、派息配息、記者會及股東戶資訊、協助投資人從新聞出發找尋大漲大跌表現原因，快速制定投資策略。"
        />
        <meta property="og:locale" content="zh_tw" />
        <meta property="og:image" content={`https://www.${cnyesBaseUrl}/static/anue-og-image.png`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Noto+Sans+TC:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.${cnyesBaseUrl}",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.${cnyesBaseUrl}/search/all?googleEmbed=searchbar&keyword={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `,
          }}
        />
        <script type="text/javascript" src="https://www.googleoptimize.com/optimize.js?id=OPT-NXGS5V5" async />
      </Head>
      <AnalyticsWrapper
        enableSendEvent
        pageviewTargets={LOBBY_PAGE_VIEW_TARGETS}
        googleAnalyticsId={googleAnalyticsId}
        googleAnalyticsName={googleAnalyticsName}
      >
        <AppHeader channel="陸港股" hideLoginForIe showShadowPlaceholder location={{}} />
        <AnalyticsContextProvider prefix={SEND_LOBBY_TARGET} events={GaEvents}>
          <App />
        </AnalyticsContextProvider>
        <ScrollToTop
          hasFooter
          size="m"
          showOnMobile
          stickyComponent={null}
          stickyAlign="right"
          stickyPointerEvents="none"
        />
        <Footer dataPrefix={gaDataPrefixFactory(SEND_GLOBAL_TARGET)} />
      </AnalyticsWrapper>
      <style jsx global>
        {lobbyGlobalStyle}
      </style>
    </QuoteContextProvider>
  );
};

const config = {
  etf: {
    root: '/hkstock/etf',
    url: `${etnetUrl}/content/cnyes/tc/etf/index.php`,
  },
  ipo: {
    root: '/hkstock/ipo',
    url: `${etnetUrl}/content/cnyes/tc/stocks/ci_ipo.php`,
  },
  warrants: {
    root: '/hkstock/warrants',
    url: `${etnetUrl}/content/cnyes/tc/warrants/delayed/home.php`,
  },
};

Index.getInitialProps = async ({ query, res }) => {
  const { subpage, code } = query;

  if (['ipo', 'etf', 'warrants'].includes(subpage)) {
    return { subpage, root: config[subpage].root, url: config[subpage].url };
  }

  const root = '/hkstock';
  const subUrl = etnetHkstockMapping[subpage];

  console.log({ subUrl });

  if (!subUrl) return { subpage, url: DEFAULT_URL, root };

  const url = code ? `${etnetUrl}/${subUrl}${code}` : `${etnetUrl}/${subUrl}`;

  try {
    const response = await GETchartingHistoryBySymbol({
      symbol: `HKS:${code}:STOCK`,
      resolution: 'D',
      compress: 1,
      quote: '1',
    });

    const quote = idx(response, _ => _.data.data.quote);
    const symbol = idx(quote, _ => _[universalProps.Code]);
    const name = idx(quote, _ => _[universalProps.Name]);
    const symbolCode = getCode(symbol);

    // 如果有code且找不到股票代號,或長度不為5(港股代碼長度為5) → 404
    if (code && (!symbolCode || code.length !== HKSTOCK_QUOTE_LENGTH)) {
      res.writeHead(302, {
        Location: '/notfound',
      });
      res.end();
    }

    return {
      subpage,
      url,
      root,
      name,
      symbolCode,
    };
  } catch (error) {
    console.error('[GETchartingHistoryBySymbol Error]', error);

    return {
      subpage,
      url,
      root,
    };
  }
};

export default Index;

