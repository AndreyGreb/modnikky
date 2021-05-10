import React from 'react';
import PageWrapper from '../../components/common/PageWrapper/PageWrapper';
import MainPageContent from './MainPageContent/MainPageContent';
import backgroundImage from '../../components/common/exportImages/ExportMainPage/ExportMainPage';

import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <PageWrapper colorHeader="white">
      <div
        className={style.mainPage}
        style={{ background: `url(${backgroundImage.newCollection})` }}>
        {/* block new collection */}
        <div
          className={style.mainPage__content}
          style={{ bottom: '200px', left: '300px' }}>
          <MainPageContent
            textTitle="NEW COLLECTION"
            textMiddle={
              <>
                Our easiest chuck-on-and-go staples come with a serious style
                heritage
                <br />
                that’s liberating, sexy, comfy and supremely cool.
              </>
            }
            textButton="SHOP NEW ARRIVALS"
            pathButton="/"
          />
        </div>
      </div>

      {/* block vintage inspired */}
      <div
        className={style.mainPage}
        style={{ background: `url(${backgroundImage.vintageInspired})` }}>
        <div
          className={style.mainPage__content}
          style={{ top: '480px', left: '300px' }}>
          <MainPageContent
            textTitle="VINTAGE INSPIRED"
            textMiddle={
              <>
                Inspired by the ‘70s and 80’s), we know that if you sift through
                <br />
                our vintage inspired collection you’re gonna rock the perfect
                silhouette.
              </>
            }
            textButton="SHOP NOW"
            pathButton="/"
          />
        </div>
      </div>

      {/* block slider */}

      {/* block sustainable denim */}
      <div
        className={style.mainPage}
        style={{ background: `url(${backgroundImage.sustainableDenim})` }}>
        <div
          className={style.mainPage__content}
          style={{ top: '460px', left: '300px' }}>
          <MainPageContent
            textTitle="SUSTAINABLE DENIM"
            textMiddle={
              <>
                What started as a true ‘80s vintage pair of jeans,
                <br />
                finished as a re-energised, wider leg vintage jean with
                versatile detailing.
              </>
            }
            textButton="SHOP DENIM"
            pathButton="/"
          />
        </div>
      </div>

      {/* block new arrivals */}

      {/* block pray for rock */}
      <div
        className={`${style.mainPage}`}
        style={{ backgroundImage: `url(${backgroundImage.prayForRock})` }}>
        <div
          className={style.mainPage__content}
          style={{ bottom: '385px', right: '220px' }}>
          <MainPageContent
            textTitle="PRAY FOR ROCK"
            textMiddle={
              <>
                Beloved and forever relevant, there’s a convenience
                <br />
                factor in a well-built pair of all-in-ones.
              </>
            }
            textButton="SHOP COLLECTION"
            pathButton="/"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default MainPage;
