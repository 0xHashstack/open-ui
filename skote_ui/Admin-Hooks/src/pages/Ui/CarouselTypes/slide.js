import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem } from "reactstrap";

// Carousel images
import img1 from "../../../assets/images/small/img-1.jpg";
import img2 from "../../../assets/images/small/img-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    // const nextIndex =
    //   this.state.activeIndex === items.length - 1
    //     ? 0
    //     : this.state.activeIndex + 1;
    // this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    // const nextIndex =
    //   this.state.activeIndex === 0
    //     ? items.length - 1
    //     : this.state.activeIndex - 1;
    // this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            src={item.src}
            className="d-block img-fluid"
            alt={item.altText}
          />
        </CarouselItem>
      )
    })

    return (
      <React.Fragment>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}
        </Carousel>
        {/* <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            activeIndex={activeIndex}
            items={[
              {
                altText: 'Slide 1',
                caption: 'Slide 1',
                key: 1,
                src: 'https://picsum.photos/id/123/1200/600'
              },
              {
                altText: 'Slide 2',
                caption: 'Slide 2',
                key: 2,
                src: 'https://picsum.photos/id/456/1200/600'
              },
              {
                altText: 'Slide 3',
                caption: 'Slide 3',
                key: 3,
                src: 'https://picsum.photos/id/678/1200/600'
              }
            ]}
            onClickHandler={this.next}
          />
          <CarouselItem
            onExited={this.onExiting}
            onExiting={this.onExited}
          >
            <img
              alt="Slide 1"
              src="https://picsum.photos/id/123/1200/600"
            />
            <CarouselCaption
              captionHeader="Slide 1"
              captionText="Slide 1"
            />
          </CarouselItem>
          <CarouselItem
            onExited={this.onExiting}
            onExiting={this.onExited}
          >
            <img
              alt="Slide 2"
              src="https://picsum.photos/id/456/1200/600"
            />
            <CarouselCaption
              captionHeader="Slide 2"
              captionText="Slide 2"
            />
          </CarouselItem>
          <CarouselItem
            onExited={this.onExiting}
            onExiting={this.onExited}
          >
            <img
              alt="Slide 3"
              src="https://picsum.photos/id/678/1200/600"
            />
            <CarouselCaption
              captionHeader="Slide 3"
              captionText="Slide 3"
            />
          </CarouselItem>
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.next}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel> */}
        {/* <Carousel
  activeIndex={0}
  next={function noRefCheck(){}}
  previous={function noRefCheck(){}}
>
  <CarouselIndicators
    activeIndex={0}
    items={[
      {
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
        src: 'https://picsum.photos/id/123/1200/600'
      },
      {
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
        src: 'https://picsum.photos/id/456/1200/600'
      },
      {
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
        src: 'https://picsum.photos/id/678/1200/600'
      }
    ]}
    onClickHandler={function noRefCheck(){}}
  />
  <CarouselItem
    onExited={function noRefCheck(){}}
    onExiting={function noRefCheck(){}}
  >
    <img
      alt="Slide 1"
      src="https://picsum.photos/id/123/1200/600"
    />
    <CarouselCaption
      captionHeader="Slide 1"
      captionText="Slide 1"
    />
  </CarouselItem>
  <CarouselItem
    onExited={function noRefCheck(){}}
    onExiting={function noRefCheck(){}}
  >
    <img
      alt="Slide 2"
      src="https://picsum.photos/id/456/1200/600"
    />
    <CarouselCaption
      captionHeader="Slide 2"
      captionText="Slide 2"
    />
  </CarouselItem>
  <CarouselItem
    onExited={function noRefCheck(){}}
    onExiting={function noRefCheck(){}}
  >
    <img
      alt="Slide 3"
      src="https://picsum.photos/id/678/1200/600"
    />
    <CarouselCaption
      captionHeader="Slide 3"
      captionText="Slide 3"
    />
  </CarouselItem>
  <CarouselControl
    direction="prev"
    directionText="Previous"
    onClickHandler={function noRefCheck(){}}
  />
  <CarouselControl
    direction="next"
    directionText="Next"
    onClickHandler={function noRefCheck(){}}
  />
</Carousel> */}
      </React.Fragment>
    );
  }
}

export default Slide;
