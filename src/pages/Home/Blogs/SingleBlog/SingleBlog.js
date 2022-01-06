import { faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBlog = ({ blog }) => {
   return (
      <>
         <div className="col-lg-4 col-md-6">
            <Link to={`/blog/${blog.id}`}>
               <Card>
                  <div className="blog_img">
                     <Card.Img variant="top" src={blog.img} />
                  </div>
                  <Card.Body>
                     <div className="date_btn text-center">
                        <button className='regular_btn rounded-pill'>{blog.date}</button>
                     </div>
                     <Card.Title className="blog_title  mb-3">{blog.title}</Card.Title>
                     <div className="name_comments d-flex align-items-center mb-3">
                        <div className="name">
                           <FontAwesomeIcon className="user_icon me-2" icon={faUser} />
                           <span className='blog_name'>{blog.blogerName}</span>
                        </div>
                        <div className="comments">
                           <FontAwesomeIcon className="comments_icon me-2 ms-4" icon={faComments} />
                           <span className='blog_comments'>Comments</span>
                        </div>
                     </div>
                     <Card.Text className='blog_shortDesc'>
                        {blog.shortDesc.slice(0, 100)} ....
                     </Card.Text>
                     {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
               </Card></Link>
         </div>
      </>
   );
};

export default SingleBlog;