export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    className: 'w-full h-full',
    adaptiveHeight: true,
    appendDots: dots => (
        <div
            style={{
                zIndex: 1,
                bottom: "-10px"
            }}
        >
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
    ),
};