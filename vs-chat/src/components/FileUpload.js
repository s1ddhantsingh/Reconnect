import React from "react";

const FileUpload = () => {
	return (
		<input
			type="file"
			className="m-5 p-5 flex justify-center items-center
                    bg-white
                    focus:ring-blue-500
                    focus:border-blue-500
                    dark:focus:ring-blue-500
                    dark:focus:border-blue-500 
                    border 
                    rounded-lg"
		/>
	);
};

export default FileUpload;
