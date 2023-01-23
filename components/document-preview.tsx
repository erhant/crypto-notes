import Link from 'next/link';
import React from 'react';
import {FC} from 'react';
import {DocumentHeader} from '../types/document';

const DocumentPreview: FC<{header: DocumentHeader; slug: string}> = ({header, slug}) => {
  return (
    <div className="preview">
      {/* order number */}
      <div className="order-no">
        <h1>{header.order}</h1>
      </div>
      {/* preview text */}
      <div className="preview-text">
        <Link href={'/' + slug} passHref>
          <a>
            <h1>{header.title}</h1>
          </a>
        </Link>
        <p>{header.desc}</p>
      </div>
    </div>
  );
};

export default DocumentPreview;
