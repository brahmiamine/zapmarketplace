import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { getValidImagePath } from "@utils/filePath";

const Uploader = ({ setImageUrl, imageUrl }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    maxSize: 100000, //the size of image,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img className="inline-flex border-2 border-gray-100 w-24 max-h-24" src={getValidImagePath(file.preview)} alt={file.name} />
      </div>
    </div>
  ));

  useEffect(() => {
    if (files) {
      files.forEach((file) => {
        const formData = new FormData();
        formData.append("file", file);
        axios({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/file`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: formData,
        })
          .then((res) => {
            setImageUrl(res.data.secure_url);
          })
          .catch((err) => console.log(err));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className="w-full text-center">
      <div className="px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer" {...getRootProps()}>
        <input {...getInputProps()} />
        <span className="mx-auto flex justify-center">
          <FiUploadCloud className="text-3xl text-emerald-500" />
        </span>
        <p className="text-sm mt-2">Drag your image here</p>
        <em className="text-xs text-gray-400">(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside className="flex flex-row flex-wrap mt-4">
        {imageUrl ? (
          <img className="inline-flex border rounded-md border-gray-100 w-24 max-h-24 p-2" src={getValidImagePath(imageUrl)} alt="product" />
        ) : (
          thumbs
        )}
      </aside>
    </div>
  );
};

export default Uploader;
