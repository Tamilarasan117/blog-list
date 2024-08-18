import './index.css'
import BlogItem from '../BlogItem'

const BlogList = (props) => {
  const {blogsList} = props

  return (
    <ul className="blogs-container">
      {
        blogsList.map(eachBlog => (
          <BlogItem
            blogItems={eachBlog}
            key={eachBlog.id}
          />
        ))
      }
    </ul>
  )
}

export default BlogList
