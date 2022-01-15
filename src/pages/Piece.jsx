import React, { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import SketchWrapper from '../components/SketchWrapper';
import articles from '../data/art';

export default function Piece() {
  const { pieceId } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    const articleData = articles.find((piece) => piece.uid === pieceId);
    setArticle(articleData);
  }, [pieceId]);

  return (
    <div>
      {article && (
        <>
          <h1 className="piece-title">{article.title}</h1>
          <SketchWrapper>
            <p className="live-label">Live view</p>
            {article.component}
          </SketchWrapper>
        </>
      )}
    </div>
  );
}
