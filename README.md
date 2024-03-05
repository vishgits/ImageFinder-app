# Image Finder
An application that allow the following functionalities

Write a small React JS Web application with the following functionality: 
 
### Allow the user to enter their Name, Surname, and a Preferred Topic. Possible values for the topic are: Travel, Cars, Wildlife, Technology and Other. 
### When ‘Other’ is selected as a topic, allow the user to enter their preferred topic in free text. 
### Once the topic has been specified, fetch a matching image from Unsplash.com. You can use any free / opensource package or an API; for example: https://www.npmjs.com/package/unsplash-react 
### Present the image to the user on a new view along with two buttons Accept and Reject. 
### If the user rejects the picture, carry out another search. 
### If the user accepts the picture, present them with a new view with a "card" displaying Name, Surname and a thumbnail of the image selected. 

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vishgits/Image-Finder.git
cd Image-Finder
```

### 2. Install Dependencies

```bash
npm install 
```
### 3. Run the Development Server
```bash
npm run dev 
```

### 4. Run the Test 
```bash
npm run test 
```


## Libaries & Features 

### 1. Tailwind css
Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.
### 2. Error boundray
To catch the error and showing a fall back ui to user, rather than showing a broken page with technical erros

### 3. Context API

Since it is a smaller project used context for state mangement, rather than intergating redux 

### 4. Vitest
Vitest for testing 

### 5. unsplash
Unsplash for retreving images 

### 6. formik
Used formik for managing form data.
Adavantages of formik : 
Getting values in and out of form state
Validation and error messages
Handling form submission

### 6. yup
Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation.

### 7. Headless UI
Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.



