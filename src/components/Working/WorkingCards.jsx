import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { plus, minus } from "../../assets";
import "./workingcards.css";

const WorkingCards = ({ index, title, description }) => {
  const number = (index + 1).toString().padStart(2, "0");
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  // Toggle expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const sharedTransition = {
    duration: 0.7,
    ease: [0.19, 1, 0.22, 1],
  };

  return (
    <motion.div
      className={`working__card ${isExpanded ? "expanded" : ""}`}
      animate={{
        backgroundColor: isExpanded ? "var(--green)" : "var(--grey)",
        boxShadow: isExpanded
          ? "0 6px 0 rgba(0, 0, 0, 1)"
          : "0 4px 0 rgba(0, 0, 0, 1)",
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="working__card-header">
        <div className="working__card-left">
          <span className="working__card-index">{number}</span>
          <h3 className="working__card-title">{title}</h3>
        </div>
        <motion.button
          className="working__toggle-btn"
          onClick={toggleExpand}
          whileTap={{ scale: 0.95 }}
        >
          <img src={isExpanded ? minus : plus} alt="toggle" />
        </motion.button>
      </div>

      <motion.div
        className="working__card-desc-wrapper"
        animate={{
          maxHeight: isExpanded ? 2000 : 0,
          marginTop: isExpanded ? 30 : 0,
          paddingTop: isExpanded ? 30 : 0,
          borderTopWidth: isExpanded ? "1px" : "0px",
          borderTopColor: isExpanded ? "rgba(0, 0, 0, 0.7)" : "transparent",
        }}
        transition={sharedTransition}
      >
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              ref={contentRef}
              className="working__card-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={sharedTransition}
            >
              <p className="working__card-desc">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default WorkingCards;
