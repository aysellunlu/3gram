import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Card from "../../components/Card";
import Slider from "../../components/Slider";
import { fetchData } from "../../services/api";
import ReactPaginate from "react-paginate";

const News = ({ className = "", title, ...props }) => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;

  useEffect(
    (currentPage) => {
      fetchData(`/albums?_page=${currentPage}&_limit=${limit}`)
        .then((result) => {
          setAlbums(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error("API error:", error);
          setLoading(false);
        });
    },
    [limit]
  );
  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetch(currentPage);

    setAlbums(commentsFormServer);
  };
  useEffect(() => {
    fetchData("/photos")
      .then((result) => {
        setPhotos(result?.slice(-10));
        setLoading(false);
      })
      .catch((error) => {
        console.error("API error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div {...props}>
      {console.log("albüm", albums)}
      {console.log("photo", photos)}
      {albums &&
        albums?.map((album) => (
          <Card key={album?.id}>
            <div className={`${styles.container}`}>
              <h5 className={`${styles.title}`}>{album?.title}</h5>
              <div className={`${styles.sliderContainer}`}>
                {photos && <Slider photos={photos} />}
              </div>
            </div>
          </Card>
        ))}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default News;
