import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/news.css'
import Spinner from './Spinner'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: "6",
    category: "Technology",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  articles = [
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "As Jet Airways Plans Take-Off, Security Clearance Comes From Centre - NDTV Profit",
      "description": "Union home ministry has granted security clearance to Jet Airways that is planning to relaunch commercial flight operations in the next few months",
      "url": "https://www.ndtv.com/business/jet-airways-gets-home-ministrys-clearance-2956836",
      "urlToImage": "https://c.ndtvimg.com/2022-05/u6n19geo_jet-airways-240_625x300_05_May_22.jpg",
      "publishedAt": "2022-05-08T16:26:00Z",
      "content": "Home Ministry has granted security clearance to Jet Airways\r\nUnion home ministry has granted security clearance to Jet Airways that is planning to relaunch commercial flight operations in the next fe… [+1389 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "IPL 2022, CSK vs DC Live Score: Delhi Capitals Lose KS Bharat Early In Chase Of 209 vs Chennai Super Kings - NDTV Sports",
      "description": "IPL 2022, Chennai Super Kings vs Delhi Capitals Score Updates: CSK have set a target of 209 runs vs DC in their Indian Premier League match at the Dr DY Patil Sports Academy in Navi Mumbai, on Sunday.",
      "url": "https://sports.ndtv.com/ipl-2022/ipl-2022-csk-vs-dc-live-score-updates-chennai-super-kings-vs-delhi-capitals-live-score-2956897",
      "urlToImage": "https://c.ndtvimg.com/2022-05/ic0pgbog_pant-marsh-bcci-ipl_625x300_08_May_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2022-05-08T16:25:17Z",
      "content": "Chasing a target of 209 runs, Chennai Super Kings (CSK) are two wickets down vs Delhi Capitals (DC) in Match 55 of the ongoing Indian Premier League (IPL) 2022 season, at the Dr DY Patil Sports Acade… [+476 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ommcomnews.com"
      },
      "author": "OMMCOM NEWS",
      "title": "Vax To Curb Covid Spread Should Now Be Top Priority: UK Scientist | World - Ommcom News",
      "description": "London:  While existing Covid-19 vaccines have largely helped prevent deaths, scientists must now train their focus on developing a jab that stops transmission of the virus, according to leading scientist at Oxford.Covid vaccines have led to sharp de",
      "url": "https://ommcomnews.com/world-news/vax-to-curb-covid-spread-should-now-be-top-priority-uk-scientist",
      "urlToImage": "https://ommcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/10/01202529/Covid-vaccine-3-1-e1633162878778.jpg",
      "publishedAt": "2022-05-08T15:20:32Z",
      "content": "London:  While existing Covid-19 vaccines have largely helped prevent deaths, scientists must now train their focus on developing a jab that stops transmission of the virus, according to leading scie… [+2339 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Republic World"
      },
      "author": "Harsh Vardhan",
      "title": "ESA shares pictures of SpaceX Dragon capsule before and after brutal atmospheric re-entry - Republic World",
      "description": "ESA astronaut Matthias Maurer along with three NASA astronauts recently arrived on Earth after spending six months aboard the International Space Station.",
      "url": "https://www.republicworld.com/science/space/esa-shares-pictures-of-spacex-dragon-capsule-before-and-after-brutal-atmospheric-re-entry-articleshow.html",
      "urlToImage": "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/nofh5nrez0zyu3j5_1652020116.jpeg",
      "publishedAt": "2022-05-08T15:13:00Z",
      "content": "SpaceX's Dragon capsule splashed down in the Atlantic ocean with four astronauts on May 6, and like every other spacecraft, it went through the unforgiving atmospheric re-entry. It is the phase, whic… [+2272 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "Check out this Doctor Strange, Infinix Note 12 connection in India - HT Tech",
      "description": "The Infinix Note 12 series is all set for its launch in India. To add to the excitement is its connection with Marvel's Doctor Strange!",
      "url": "https://tech.hindustantimes.com/mobile/news/check-out-this-doctor-strange-infinix-note-12-connection-in-india-71652021257154.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/08/1600x900/Marvel_1_1652021329604_1652021368800.jpg",
      "publishedAt": "2022-05-08T14:50:25Z",
      "content": "Right now, all the Marvel fans are talking about Doctor Strange in the Multiverse of Madness! Marvel's latest superhero film is currently running in theatres! And now, it has been revealed that Infin… [+1971 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "Furore over IndiGo denying boarding to disabled child, parents at Ranchi airport - Hindustan Times",
      "description": "Indigo issued a statement saying the child was in a state of panic and the ground staff waited for him to calm down. The family was provided with a hotel stay and they flew to their destination the next morning, the airline said amid huge backlash for the vir…",
      "url": "https://www.hindustantimes.com/india-news/furore-over-indigo-denying-boarding-to-disabled-child-parents-at-ranchi-airport-101652020846673.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/08/1600x900/indigo_1652021033230_1652021040233.JPG",
      "publishedAt": "2022-05-08T14:46:27Z",
      "content": "A Facebook post on how the staff of IndiGo airlines barred an adolescent with special needs from boarding a plane along with his parents at the Ranchi airport on Saturday has created an uproar on soc… [+3256 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Firstpost"
      },
      "author": "FirstCricket Staff",
      "title": "Highlights, Tata IPL 2022 SRH vs RCB, Full Cricket Score and Update: Hasaranga's five-fer helps RCB thrash SRH by 67 runs - Firstpost - Firstpost",
      "description": "Sunrisers Hyderabad vs Royal Challengers Bangalore Live update - Tata IPL 2022 SRH vs RCB cricket score, 54th IPL Match Live Coverage: Hasaranga's 5/18 helps RCB bundle SRH out for a meagre 125 after Du Plessis' unbeaten 73 and Karthik's blistering 30 not out…",
      "url": "https://www.firstpost.com/firstcricket/sports-news/highlights-tata-ipl-2022-srh-vs-rcb-full-cricket-score-and-update-hasarangas-five-fer-helps-rcb-thrash-srh-by-67-runs-10644221.html",
      "urlToImage": "https://images.firstpost.com/wp-content/uploads/2022/05/Kane-Williamson-Faf-du-Plessis-Sportzpics-640.jpg",
      "publishedAt": "2022-05-08T14:08:59Z",
      "content": "Sunrisers Hyderabad vs Royal Challengers Bangalore Live update - Tata IPL 2022 SRH vs RCB cricket score, 54th IPL Match Live Coverage: Hasaranga's 5/18 helps RCB bundle SRH out for a meagre 125 after… [+2794 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "US-Returned Chennai Couple Murdered By Domestic Help, Rs 5 Crore Stolen - NDTV",
      "description": "The accused allegedly killed the couple in a gruesome way in their house and buried the bodies in their farmhouse outside Chennai. Police have arrested him and another man in Andhra Pradesh as they attempted to escape to their hometown in Nepal.",
      "url": "https://www.ndtv.com/india-news/us-returned-chennai-couple-murdered-by-domestic-help-rs-5-crore-stolen-2957054",
      "urlToImage": "https://c.ndtvimg.com/2022-05/9o08062g_chennai-couple-killed_625x300_08_May_22.jpg",
      "publishedAt": "2022-05-08T14:07:15Z",
      "content": "The couple reportedly had Rs 40 crore cash at their house from a recent real estate deal.\r\nChennai: A couple in Chennai who returned from the United States just yesterday has been murdered by a domes… [+1482 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "US First Lady makes unannounced visit to Ukraine, meets Ukrainian counterpart - Hindustan Times",
      "description": "Earlier in the day, US First Lady Jill Biden had celebrated Mother's Day in Slovakia, interacting with the Ukrainian mothers displaced due to the war. She assured them that the ‘hearts of American people’ are with them. | World News",
      "url": "https://www.hindustantimes.com/world-news/us-first-lady-jill-biden-makes-unannounced-visit-to-ukraine-meets-olena-zelenska-101652017999159.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/08/1600x900/Jill_Biden_Olena_Zelenska_1652018305465_1652018305814.JPG",
      "publishedAt": "2022-05-08T13:59:38Z",
      "content": "US First Lady Jill Biden on Sunday made an unannounced visit to Ukraine to show support to the war-torn country in its fight against Russia, Reuters reported. She also met her Ukrainian counterpart O… [+1844 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "LIC IPO: Issue subscribed 1.79 times on Day 5, policyholders portion booked 5.04 times, retail 1.59 times,... - Moneycontrol",
      "description": "The government will raise Rs 21,000 crore by issuing 22.13 crore equity shares to the public via initial public offering which will be closed on May 9.",
      "url": "https://www.moneycontrol.com/news/business/ipo/lic-ipo-day-5-open-for-subscription-on-sunday-too-issue-subscribed-1-66-times-till-now-8470551.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/05/LIC-IPO-3-770x433.jpg",
      "publishedAt": "2022-05-08T13:34:05Z",
      "content": "May 08, 2022 / 06:50 PM IST\r\nKey Risk to LICs business: KR Choksey• Under the IRDAI Investment Regulations, LIC is required to invest its investment assets forming part of its controlled fund incerta… [+1285 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Express News Service",
      "title": "Woman says Rajasthan minister’s son raped her several times in Jaipur and Delhi - The Indian Express",
      "description": "An FIR registered in New Delhi says the accused, who befriended the 23-year-old woman first on Facebook, raped her on multiple occasions between January 8, 2021 and April 17 this year.",
      "url": "https://indianexpress.com/article/cities/delhi/woman-says-rajasthan-ministers-son-raped-her-several-times-in-jaipur-and-delhi-7906760/",
      "urlToImage": "https://images.indianexpress.com/2022/05/express-photo-13-1.jpeg",
      "publishedAt": "2022-05-08T13:27:15Z",
      "content": "A 23-year-old woman was allegedly raped by a Rajasthan minsters son in Jaipur and Delhi last year, police said on Sunday.According to a zero FIR registered against the Congress leaders son, the Jaipu… [+1364 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livemint"
      },
      "author": "Livemint",
      "title": "Amazon Summer Sale Ends Today. Buy Samsung Phones At Big Discount. Details Here | Mint - Mint",
      "description": "Samsung phones being sold on discount for the amazon Summer Sale include Samsung M32 5G, Samsung Galaxy S22 Ultra 5G and many more.",
      "url": "https://www.livemint.com/technology/amazon-summer-sale-ends-today-buy-samsung-phones-at-big-discount-details-here-11652013752658.html",
      "urlToImage": "https://images.livemint.com/img/2022/05/08/600x338/2021-07-14T232911Z_1_LYNXMPEH6D1DR_RTROPTP_3_AMAZON-COM-RESULTS_1626703159089_1652015960413.JPG",
      "publishedAt": "2022-05-08T13:20:08Z",
      "content": "There is good news for people who are willing to buy Samsung phones this summer. Amazon Summer Sale that started on 4 May will go on till 8 May, today. So hurry up and read up on the prices and disco… [+2405 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "\"Surrender Is Not An Option\": Ukraine Troops In Azovstal Steel Plant - NDTV",
      "description": "Ukraine forces holed up in the sprawling Azovstal steel works in the Russian controlled city of Mariupol said Sunday that they were unable to surrender fearing reprisals from Russian forces.",
      "url": "https://www.ndtv.com/world-news/surrender-is-not-an-option-ukraine-troops-in-azovstal-steel-plant-2956972",
      "urlToImage": "https://c.ndtvimg.com/2022-04/idav4s8_azovstal-plant-mariupolreuters_625x300_15_April_22.jpg",
      "publishedAt": "2022-05-08T13:15:22Z",
      "content": "The Azovstal steel mill is the last pocket of Ukrainian resistance in Mariupol\r\nKyiv: Ukraine forces holed up in the sprawling Azovstal steel works in the Russian-controlled city of Mariupol said Sun… [+1020 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "How to snooze notifications on Samsung Galaxy F23 5G; Silence the disturbance this way - HT Tech",
      "description": "Did you know that you can snooze notifications just like your alarms! Here’s how to snooze notifications on Samsung Galaxy F23 5G.",
      "url": "https://tech.hindustantimes.com/how-to/how-to-snooze-notifications-on-samsung-galaxy-f23-5g-silence-the-disturbance-this-way-71652015512012.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/08/1600x900/2_1647766084379_1652015703129.jpg",
      "publishedAt": "2022-05-08T13:15:21Z",
      "content": "Notifications are an important aspect of your smartphone - to make you aware about all the latest happenings on social media, breaking news and much more. But sometimes, that constant buzz of notific… [+893 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "\"Punjab's Resurrection Possible...\": Navjot Sidhu To Meet Bhagwant Mann - NDTV",
      "description": "Congress's Navjot Sidhu today said he will meet Punjab Chief Minister Bhagwant Mann tomorrow to discuss the \"economic revival\" of the state.",
      "url": "https://www.ndtv.com/india-news/punjab-ex-congress-chief-navjot-sidhu-says-will-meet-chief-minister-bhagwant-mann-tomorrow-2956935",
      "urlToImage": "https://c.ndtvimg.com/2019-06/7fd5bosg_navjot-sidhu_650x400_09_June_19.jpeg",
      "publishedAt": "2022-05-08T13:10:09Z",
      "content": "Chandigarh: Congress's Navjot Sidhu today declared that he will meet Punjab Chief Minister Bhagwant Mann tomorrow to discuss the \"economic revival\" of the state. Mr Sidhu, the cricketer-turned-politi… [+1804 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "Arun Kumar",
      "title": "BPSC orders probe into Bihar civil services exam paper leak, report in 24 hours - Hindustan Times",
      "description": "BPSC ordered the probe into alleged paper leak of the 67th Combined (Preliminary) Competitive Examination after reports that question papers were being sent via messaging services WhatsApp and Telegram before turning up on social media platforms.",
      "url": "https://www.hindustantimes.com/education/competitive-exams/bpsc-orders-probe-into-bihar-civil-services-exam-paper-leak-report-in-24-hours-101652012780136.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/08/1600x900/2780978a-cec9-11ec-a18e-026abbb3bb32_1652012778803.jpg",
      "publishedAt": "2022-05-08T12:26:19Z",
      "content": "PATNA: Bihar Public Service Commission (BPSC) has ordered an inquiry into the alleged leak of the question paper of the 67th Combined (Preliminary) Competitive Examination held on Sunday across the s… [+3655 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "Imran Khan's cops protected wife's friend during his stint as Pak PM: Report - Hindustan Times",
      "description": "According to the Pakistan media report, the police personnel were told to work in three shifts of eight hours each to ensure that Farah Khan's residence was protected round-the clock. Four cops were deployed per shift, which means that 12 police personnel and…",
      "url": "https://www.hindustantimes.com/world-news/imran-khan-s-cops-protected-wife-s-friend-during-his-stint-as-pakistan-pm-101652009218926.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/08/1600x900/Farah_Khan_friend_of_Bushra_Bibi_1652009349123_1652009349411.jpg",
      "publishedAt": "2022-05-08T11:56:14Z",
      "content": "Farah Khan, a close friend of Imran Khan's wife Bushra Bibi, was provided security cover outside her residence by the Pakistan Punjab Police officials soon after the former cricketer-turned-politicia… [+2475 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Entertainment Desk",
      "title": "Kajal Aggarwal gives credit to writer after getting called out for copying poem - Hindustan Times",
      "description": "A writer Sarah called out Kajal Aggarwal for her poem and caption for her Mother's Day Instagram post. Here's what happened.",
      "url": "https://www.hindustantimes.com/entertainment/bollywood/kajal-aggarwal-gives-credit-to-writer-after-getting-called-out-for-copying-poem-caption-for-mother-s-day-instagram-post-101652007756262.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/05/08/1600x900/Kajal_Aggarwal_1652008148140_1652008155700.jfif",
      "publishedAt": "2022-05-08T11:41:27Z",
      "content": "Actor Kajal Aggarwal on Sunday got called out for copying a writer's poem as well as the caption for her Instagram post on Mother's Day. However, after this, Kajal edited her post and gave credit to … [+3089 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Tribune India"
      },
      "author": "The Tribune India",
      "title": "Why do some people get sicker than others from Covid? - The Tribune India",
      "description": "People who escape the worst symptoms of Covid-19 infection may be having the right balance of a type of immune cells called macrophages, suggests a new study.",
      "url": "https://www.tribuneindia.com/news/coronavirus/why-do-some-people-get-sicker-than-others-from-covid-392970",
      "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_1328094188.jpg",
      "publishedAt": "2022-05-08T11:23:00Z",
      "content": "New York, May 8\r\nPeople who escape the worst symptoms of Covid-19 infection may be having the right balance of a type of immune cells called macrophages, suggests a new study.\r\nSince SARS-CoV-2 first… [+2697 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SciTechDaily"
      },
      "author": null,
      "title": "Cognitive Impairment From Severe COVID-19 Equivalent to 20 Years of Aging – Losing 10 IQ Points - SciTechDaily",
      "description": "Cognitive impairment as a result of severe COVID-19 is similar to that sustained between 50 and 70 years of age and is the equivalent to losing 10 IQ points, say a team of scientists from the University of Cambridge and Imperial College London. The findings, …",
      "url": "https://scitechdaily.com/cognitive-impairment-from-severe-covid-19-equivalent-to-20-years-of-aging-losing-10-iq-points/",
      "urlToImage": "https://scitechdaily.com/images/Headache-Migraine-Concept.jpg",
      "publishedAt": "2022-05-08T11:06:39Z",
      "content": "ByUniversity of CambridgeMay 8, 2022\r\nAccording to a team of scientists, cognitive impairment as a result of severe COVID-19 is similar to that sustained from the 20 years of aging between 50 and 70 … [+8052 chars]"
    }
  ]

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    // console.log("hello bro, I am from News Components");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    }
    document.title = `NewsToday  - ${this.capitalizeFirstLetter(this.props.category)}`;
  };

  async update() {
    this.props.setProgress({ progress: 10})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&cetegory=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress({ progress: 30})
    let parsedData = await data.json();
    this.props.setProgress({ progress: 70})
    this.setState({
      articles: parsedData.articles,
      loading: false
    });
    this.props.setProgress({ progress: 100})
  }

  async componentDidMount() {
    // console.log("component did mount.");
    this.update();
  }

  // handlePrevClick = async () => {
  //   // console.log("pre");
  //   this.setState({ page: this.state.page + 1 });
  //   this.update();
  // }
  // handleNextClick = async () => {
  //   // console.log("next");
  //   this.setState({ page: this.state.page + 1 })
  //   this.update()
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&cetegory=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      // loading: false
    });

  }


  render() {
    return (
      <div className="container">
        <div id="newsBox">
          <h1>Today News -  Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={< Spinner />}
          >

            <div id="newsItemBox">
              {this.state.loading && this.state.articles.map((element) => {
                // console.log(element)
                return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
              })}
              {/* <NewsItem title="This is your Title" description="This is your description" imageUrl="" /> */}
            </div>

          </InfiniteScroll>

          {/* <div id="priv-Next">
            <button disabled={this.state.page <= 1} className="btn" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}
        </div>
      </div>
    )
  }
}
