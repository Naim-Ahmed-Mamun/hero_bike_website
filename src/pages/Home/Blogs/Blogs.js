import React from 'react';
import useBlogs from '../../../hooks/useBlogs';
import './Blogs.css';
import SingleBlog from './SingleBlog/SingleBlog';


const Blogs = () => {
   const { blogsData } = useBlogs();
   return (
      <>
         <div className="blogs">
            <div className="container">
               <div className="sec_title mb-4" data-aos="fade-up">
                  <h2>Blogs</h2>
               </div>
               <div className="row">
                  {
                     blogsData.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default Blogs;