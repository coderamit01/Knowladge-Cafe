import { useEffect } from "react";
import { useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark,handleReadTime}) => {
  const [blogs,setBlogs] = useState([]);

  useEffect(() => {
    fetch('../../../public/fakedata.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])



  return (
    <div>
      {
        blogs.map(item => (
          <BlogItem key={item.id} blog={item} handleAddBookmark={handleAddBookmark} handleReadTime={handleReadTime} />
        ))
      }
    </div>
  );
};

Blogs.propTypes = {
  handleAddBookmark: PropTypes.func,
  handleReadTime: PropTypes.func
}

export default Blogs;