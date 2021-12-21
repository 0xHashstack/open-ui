import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

//Import Images
import blog1 from "../../../../assets/images/crypto/blog/img-1.jpg"
import blog2 from "../../../../assets/images/crypto/blog/img-2.jpg"
import blog3 from "../../../../assets/images/crypto/blog/img-3.jpg"

const Blog = () => {
  const blogs = [
    {
      imgUrl: blog1,
      tag: "Cryptocurrency",
      date: "04 Mar, 2020",
      title: "Donec pede justo, fringilla vele",
      desc:
        "If several languages coalesce, the grammar of the resulting language",
    },
    {
      imgUrl: blog2,
      tag: "Cryptocurrency",
      date: "12 Feb, 2020",
      title: "Aenean ut eros et nisl",
      desc: "Everyone realizes why a new common language would be desirable",
    },
    {
      imgUrl: blog3,
      tag: "Cryptocurrency",
      date: "06 Jan, 2020",
      title: "In turpis, pellentesque posuere",
      desc:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge",
    },
  ]
  return (
    <React.Fragment>
      <section className="section bg-white" id="news">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">Blog</div>
                <h4>Latest News</h4>
              </div>
            </Col>
          </Row>

          <Row>
            {blogs.map((blog, key) => (
              <Col xl="4" sm="6" key={key}>
                <div className="blog-box mb-4 mb-xl-0">
                  <div className="position-relative">
                    <img
                      src={blog.imgUrl}
                      alt=""
                      className="rounded img-fluid mx-auto d-block"
                    />
                    <div className="badge badge-success blog-badge font-size-11">
                      {blog.tag}
                    </div>
                  </div>

                  <div className="mt-4 text-muted">
                    <p className="mb-2">
                      <i className="bx bx-calendar ms-1"/> {blog.date}
                    </p>
                    <h5 className="mb-3">{blog.title}</h5>
                    <p>{blog.desc}</p>

                    <div>
                      <Link to="#">Read more</Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Blog
