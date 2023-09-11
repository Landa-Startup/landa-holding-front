'use client';
import React, { useState } from 'react';


interface FormData {
  name: string;
  family: string;
  file: File | null;
}

const UploadFormPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    family: '',
    file: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const uploadForm = new FormData();
    uploadForm.append('name', formData.name);
    uploadForm.append('family', formData.family);
    uploadForm.append('file', formData.file as Blob);
    // images.forEach((image) => {
    //     formData.append("images", image);
    // });

    const response = await fetch('/api/upload-form', {
      method: 'POST',
      body: uploadForm,
    });
  };

  return (
    <div>
      <div> </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="family">Family:</label>
          <input
            type="text"
            id="family"
            name="family"
            value={formData.family}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="file">File:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadFormPage;
