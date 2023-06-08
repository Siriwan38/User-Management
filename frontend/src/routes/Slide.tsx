import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/autumn-season-mountain-fuji-kawaguchiko-lake-japan_335224-96.jpg?w=1380&t=st=1685672636~exp=1685673236~hmac=76202ea5dfbb409291dcd1d59d3671acf8899ce22e4cc0c91e4dc9016e95525a/800x400?text=First"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/yasaka-pagoda-sannen-zaka-street-kyoto-japan_335224-10.jpg?w=1380&t=st=1685672559~exp=1685673159~hmac=043758aae9e69abfa6db72e5833f6daea9a9cf89bcac513dd2aeafbe26fbc992/800x400?text=Second"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-sunset-autumn-seasons-fuji-mountain-yamanachi-japan_335224-1.jpg?w=1480&t=st=1685672598~exp=1685673198~hmac=f8fec419e2584427600e2a79166850de4f15e4729cb58e6db551f1fbebd6402e/800x400?text=Third"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;