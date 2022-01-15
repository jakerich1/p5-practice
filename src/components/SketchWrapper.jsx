/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { motion } from 'framer-motion';
import useWindowSize from '../hooks/useWindowSize';

export default function SketchWrapper({ children }) {
  const size = useWindowSize();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        transition: 'all 0.5s ease-in-out',
        transform: size.width < 600 ? 'scale(0.5)' : 'scale(1)',
      }}
    >
      {children}
    </motion.div>
  );
}
SketchWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
