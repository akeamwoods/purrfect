import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useUploadCat } from "hooks";
import { RiFolderUploadFill } from "react-icons/ri";
import styles from "./UploadPage.module.css";

export const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const navigate = useNavigate();
  const uploadMutation = useUploadCat();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const currentFile = acceptedFiles[0];
    if (currentFile) {
      setFile(currentFile);
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setImagePreview(fileReader.result as string);
      };
      fileReader.readAsDataURL(currentFile);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      try {
        await uploadMutation.mutateAsync(file);
        navigate("/");
      } catch (error) {
        console.error("Error uploading the image:", error);
      }
    }
  };

  const imageSrc = imagePreview || "/placeholder.svg";

  return (
    <div className={styles.container}>
      <h2>Upload Cat Image</h2>
      <div className={styles.previewCard}>
        <div className={styles.previewImageContainer}>
          <img src={imageSrc} alt="Preview" className={styles.previewImage} />
        </div>
        <div {...getRootProps()} className={styles.dropzone}>
          <input {...getInputProps()} />
        </div>
        <p>Drag file here or click to select files</p>
      </div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <button
          className={styles.uploadButton}
          type="submit"
          disabled={!file || uploadMutation.isLoading || !imagePreview}
        >
          <RiFolderUploadFill />
          Upload
        </button>
      </form>
      {uploadMutation.isError && <p>Error: {uploadMutation.error.message}</p>}
    </div>
  );
};
