import React, { useState } from 'react';
import { useFormContext } from '../../utils/FormProvider';
import './ExpandableTile.css';

const ExpandableTile = ({ header, section, showAddButton }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { formData, updateFormData } = useFormContext();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    updateFormData(section, index, value);
  };

  return (
    <div className={`expandable-tile ${isExpanded ? 'expanded' : ''}`}>
      <div className="tile-header" onClick={toggleExpand}>
        <div>{header}</div>
        <button className="expand-button">
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {isExpanded && (
        <div className="tile-content">
          <form>
            {formData[section].map((group, index) => (
              <div className="form-group" key={index}>
                <label htmlFor={`${group.name}-${index}`}>{group.label}:</label>
                {group.type === 'textarea' ? (
                  <textarea
                    id={`${group.name}-${index}`}
                    name={group.name}
                    value={group.value}
                    onChange={(e) => handleInputChange(index, e)}
                    rows="4"
                  />
                ) : (
                  <input
                    type={group.type}
                    id={`${group.name}-${index}`}
                    name={group.name}
                    value={group.value}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                )}
              </div>
            ))}

            {showAddButton && (
              <div className="form-group">
                <button type="button">Add</button>
                <button type="button">Delete</button>
              </div>
            )}

            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ExpandableTile;
