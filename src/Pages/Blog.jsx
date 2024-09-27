import { useState } from "react";
import Blogs from "../Components/Blogs/Blogs";
import BookMarks from "../Components/BookMarks/BookMarks";

const Blog = () => {
  const [bookmarks,setBookmarks] = useState([]);
  const [readTime,setReadTime] = useState(0);

  const handleAddBookmark = (blog) => {
    const uniqeBookmarks = bookmarks.some(item => item.id === blog.id);
    if(!uniqeBookmarks) {
      const newBookmarks = [...bookmarks,blog]
      setBookmarks(newBookmarks);
    }
  }
  const handleReadTime = (id,time) => {
    const newTime = readTime + time;
    setReadTime(newTime)
    const removeItem = bookmarks.filter(item => item.id !== id);
    setBookmarks(removeItem);
  }

  return (
    <div>
     <div className="container mx-auto">
      <div className="flex py-5 gap-4">
        <div className="w-2/3">
          <Blogs handleAddBookmark={handleAddBookmark} handleReadTime={handleReadTime} />
        </div>
        <div className="w-1/3">
          <BookMarks bookmarks={bookmarks} readTime={readTime} />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Blog;