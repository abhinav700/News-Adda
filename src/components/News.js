import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

let disabledPage = false;
const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState([true]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirstLetter(props.category)}-NewsAdda`;

  const updateNews = async () => {
    props.setProgress(0);
    setLoading(true);
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&from=2022-04-02&sortBy=publishedAt&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    props.setProgress(20);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(40);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalArticles);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&from=2022-04-02&sortBy=publishedAt&category=${props.category}&apiKey=${
      props.apiKey
    }&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalArticles);
    setLoading(false);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {!loading &&
              articles.map((element, pos) => {
                return (
                  <div className="col-md-4" key={pos}>
                    {/* {element.urlToImage} */}
                    <NewsItem
                      date={
                        element.publishedAt ? element.publishedAt : "unknown"
                      }
                      author={element.author}
                      title={
                        element.title
                          ? element.title.slice(0, 88) + "...."
                          : "...."
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url ? element.url : "url Not available"}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  apiKey: "21",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
