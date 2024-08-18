import './index.css'

const BlogItem = (props) => {
  const {blogItems} = props
  const {
    title,
    description,
    publishedDate
  } = blogItems

  return (
    <li className="blog-list-card">
      <div className="title-date-card">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
