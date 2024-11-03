import React from 'react';
import './Styles/AboutUs.css';
import blog1 from './images/post-large-image1.jpg';
import blog2 from './images/post-large-image2.jpg';
import blog3 from './images/post-large-image3.jpg';

const blogPosts = [
  {
    id: 1,
    category: 'FASHION',
    date: 'JUL 11, 2022',
    title: 'HOW TO LOOK OUTSTANDING IN PASTEL',
    description: 'Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla...',
    image: blog1,
  },
  {
    id: 2,
    category: 'FASHION',
    date: 'JUL 11, 2022',
    title: 'TOP 10 FASHION TREND FOR SUMMER',
    description: 'Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...',
    image: blog2,
  },
  {
    id: 3,
    category: 'FASHION',
    date: 'JUL 11, 2022',
    title: 'CRAZY FASHION WITH UNIQUE MOMENT',
    description: 'Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...',
    image: blog3,
  },
];

function AboutUs() {
  return (
    <section className="blog-posts-section">
      <div className="container">
        {/* Header section for title and view all link */}
        <div className="header">
          <h2 className="section-title">READ BLOG POSTS</h2>
          <a href="/blog" className="view-all-link">VIEW ALL</a>
        </div>

        {/* Blog posts grid */}
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className="blog-post">
                <img src={post.image} alt={post.title} className="blog-image img-fluid" />
                <div className="blog-info">
                  <p className="blog-category-date">{post.category} / {post.date}</p>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-description">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
