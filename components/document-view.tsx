import Link from "next/link"
import { FC } from "react"
import DocumentType from "../types/document"

const DocumentView: FC<{ document: DocumentType }> = ({ document }) => {
  return (
    <div className="preview">
      {/* order number */}
      <div className="order-no">
        <h1>{document.order}</h1>
      </div>
      {/* preview text */}
      <div className="preview-text">
        <Link href={"/" + document.slug} passHref>
          <a>
            <h1>{document.title}</h1>
          </a>
        </Link>
        {/* tags */}
        {/* {d.tags.map((t, i) => (
                  <span key={i}>{t}</span>
                ))} */}
        <p>{document.desc}</p>
      </div>
    </div>
  )
}

export default DocumentView
