import React from 'react';
import { motion } from 'framer-motion';
import {
  Link,
} from 'react-router-dom';
import articles from '../data/art';

export default function Home() {
  return (
    <div>
      <header
        className="flex-container"
      >
        <h1>Learning generative design.</h1>
        <p className="lead">My replications of existing designs + practice sketches + tutorial pieces</p>
      </header>

      <div className="list-group">
        {
            articles.map((article) => (
              <Link
                key={article.uid}
                className="router-link"
                to={`/pieces/${article.uid}`}
              >
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="list-item"
                >
                  <img className="article-thumb" src={article.image} alt={article.title} />
                  <h2 className="article-title">{article.title}</h2>
                  <h2 className="article-sub-title">{article.type}</h2>
                </motion.div>
              </Link>
            ))
          }
      </div>
    </div>
  );
}
