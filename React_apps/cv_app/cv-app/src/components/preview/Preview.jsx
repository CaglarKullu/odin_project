import React, { useState } from 'react';
import { useFormContext } from '../../utils/FormProvider';
import TemplateSelector from './templete_selector/TempleteSelector';
import TemplateOne from './template_one/TemplateOne';
import TemplateTwo from './template_two/TemplateTwo';
import TemplateThree from './template_three/TemplateThree';
import './Preview.css';
import ColorSelector from './color_selector/ColorSelector';

const Preview = () => {
  const { formData } = useFormContext();
  const [template, setTemplate] = useState('template1');
  const [color, setColor] = useState('#1e90ff');

  return (
    <div id="Preview">
      <TemplateSelector setTemplate={setTemplate} />
      <ColorSelector />
      <div className="preview-container" id="preview-content">
        {template === 'template1' && <TemplateOne formData={formData} />}
        {template === 'template2' && <TemplateTwo formData={formData} />}
        {template === 'template3' && <TemplateThree formData={formData}  color={color}/>}
      </div>
    </div>
  );
};

export default Preview;
