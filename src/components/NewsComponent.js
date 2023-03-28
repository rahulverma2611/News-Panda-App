import React from "react";

const NewsComponent=(props)=>  {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://c.ndtvimg.com/2023-03/hh8teoq8_virat-kohli-and-rahul-dravid-bcci_625x300_14_March_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <h4>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'69%!important', zIndex:'1'}}>
                  {source}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </h4>
            </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-muted">
                News by {!author ? "unknown" : author} on {publishedAt}{" "}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsComponent;
