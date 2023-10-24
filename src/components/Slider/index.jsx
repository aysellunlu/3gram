import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Slider = ({ id, albumId, photos, className = "", ...props }) => {
  return (
    <>
      <div class="carousel slide" data-ride="carousel">
        <Swiper
          id={albumId}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {photos &&
            photos?.map((photo) => (
              <>
                <SwiperSlide id={photo.id}>
                  <img src={photo.url} alt={photo.title} width="100%" />
                  <p className="mt-4 pt-4 mb-4 pb-4 fs-5">{photo.title}</p>
                </SwiperSlide>
              </>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
