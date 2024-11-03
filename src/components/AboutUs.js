import React from 'react';
import './Styles/AboutUs.css';
import blog1 from './images/post-large-image1.jpg';
import blog2 from './images/post-large-image2.jpg';
import blog3 from './images/post-large-image3.jpg';
import blog4 from './images/post-image7.jpg';
import blog5 from './images/post-image8.jpg';
import blog6 from './images/post-image9.jpg';

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
  {
    id: 4,
    category: 'FASHION',
    date: 'JUL 12, 2022',
    title: 'STYLE TIPS FOR FALL',
    description: 'Explore the latest styles and trends for the upcoming fall season...',
    image: blog4,
  },
  {
    id: 5,
    category: 'FASHION',
    date: 'JUL 12, 2022',
    title: 'STREET STYLE INSPIRATIONS',
    description: 'Get inspired by street style trends from around the world...',
    image: blog5,
  },
  {
    id: 6,
    category: 'FASHION',
    date: 'JUL 12, 2022',
    title: 'ACCESSORIES TO COMPLETE YOUR LOOK',
    description: 'Learn how accessories can elevate your style and complete your outfit...',
    image: blog6,
  },
];

function AboutUs() {
  return (
    <section className="blog-posts-section">
      {/* Tiêu đề "READ BLOG POSTS" ở đầu trang */}
      <div className="title-container">
        <h2 className="section-title">READ BLOG POSTS</h2>
      </div>

      {/* Danh sách các bài viết */}
      <div className="container">
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