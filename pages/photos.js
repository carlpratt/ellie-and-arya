import Gallery from "react-photo-gallery";

const photos = [
    {
        src: 'https://i0.wp.com/media.boingboing.net/wp-content/uploads/2020/04/screenshot-64.jpg?resize=970%2C1370&ssl=1',
        width: 4,
        height: 3
    },
    {
        src: 'https://i.pinimg.com/originals/75/53/c4/7553c4f600af98c15454d3c2c53b4520.jpg',
        width: 1,
        height: 1
    }
];

export default function Photos() {
    return (
        <Gallery photos={photos} />
    )
}