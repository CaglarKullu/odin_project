
# Resume Generator

Welcome to the Resume Generator! This web application allows users to create customized resumes with different templates and color schemes. The site is deployed and available at [caglarcvgenerator.netlify.app](https://caglarcvgenerator.netlify.app/).

## Features

- **Dynamic Form Handling**: Users can fill out personal information, work experience, education, skills, and languages.
- **Template Selection**: Choose from multiple resume templates to find the one that suits your style.
- **Color Customization**: Customize the color scheme of your resume to make it unique.
- **PDF Export**: Print your resume as a PDF.
- **Expandable Sections**: Add or remove sections dynamically to fit your needs.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/resume-generator.git
   cd resume-generator
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm start
```

This will start the app on [http://localhost:3000](http://localhost:3000) and open it in your default web browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This will create a `build` directory with the production build of your app. You can serve it with a static server or deploy it to your hosting service of choice.

## Usage

Visit [caglarcvgenerator.netlify.app](https://caglarcvgenerator.netlify.app/) to use the resume generator. Follow these steps to create your resume:

1. **Fill Out the Form**:
   - Enter your personal information, work experience, education, skills, and languages.
   - Use the "Add" buttons to include multiple entries for work experience, education, skills, and languages.
   - Use the "Delete" buttons to remove entries.

2. **Select a Template**:
   - Choose from the available templates by clicking the buttons in the "Template Selector" section.

3. **Customize the Color**:
   - Select your preferred color scheme from the "Color Selector" section.

4. **Preview and Print**:
   - Preview your resume in the "Preview" section.
   - Click the "Print" button to export your resume as a PDF.

## File Structure

Here's a brief overview of the project's file structure:

```plaintext
resume-generator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── ExpandableTile.js
│   │   ├── Template1.js
│   │   ├── Template2.js
│   │   ├── Template3.js
│   │   ├── Preview.js
│   │   ├── TemplateSelector.js
│   │   ├── ColorSelector.js
│   │   └── ...
│   ├── utils/
│   │   ├── FormProvider.js
│   │   └── ...
│   ├── models/
│   │   ├── FormGroupData.js
│   │   └── ...
│   ├── App.css
│   ├── index.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Contributing

We welcome contributions! Please fork the repository and submit pull requests for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all the open-source projects that provide the tools and libraries used in this project.

