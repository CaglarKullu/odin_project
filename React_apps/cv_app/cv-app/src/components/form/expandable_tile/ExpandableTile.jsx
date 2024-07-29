import React, { useState } from 'react';
import { useFormContext } from '../../../utils/FormProvider';
import './ExpandableTile.css';

const ExpandableTile = ({ header, section, showAddButton, showDeleteButton }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { formData, updateFormData, addNewSection, deleteSection } = useFormContext();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (groupIndex, fieldIndex, event) => {
    const { value } = event.target;
    updateFormData(section, groupIndex, value, fieldIndex);
  };

  const handleAddSection = () => {
    addNewSection(section);
  };

  const handleDeleteSection = (index) => {
       deleteSection(section, index);
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
            {formData[section].map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.map((field, fieldIndex) => (
                  <div className="form-group" key={fieldIndex}>
                    <label htmlFor={`${field.name}-${groupIndex}-${fieldIndex}`}>
                      {field.label}:
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={`${field.name}-${groupIndex}-${fieldIndex}`}
                        name={field.name}
                        value={field.value}
                        onChange={(e) => handleInputChange(groupIndex, fieldIndex, e)}
                        rows="4"
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={`${field.name}-${groupIndex}-${fieldIndex}`}
                        name={field.name}
                        value={field.value}
                        onChange={(e) => handleInputChange(groupIndex, fieldIndex, e)}
                      />
                    )}
                  </div>
                ))}
                {showDeleteButton && (
                  <div className="form-group">
                    <button className="cancel-button" type="button" onClick={() => handleDeleteSection(groupIndex)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}

            {showAddButton && (
              <div className="form-group">
                <button type="button" onClick={handleAddSection}>
                  Add
                </button>
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
