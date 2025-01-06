import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { compressApi } from '../services/compressApi';

const DragAndDropFileUpload = () => {
    const [files, setFiles] = useState([]);
    const [uploadSpeed, setUploadSpeed] = useState(100); // Bytes per millisecond for simulation
    const location = useLocation();

    const getFileType = () => {
        const path = location.pathname.slice(1);
        switch (path) {
            case 'video':
                return { type: 'video', accept: 'video/*', extensions: ['.mp4', '.avi', '.mov', '.mkv'] };
            case 'pdf':
                return { type: 'pdf', accept: 'application/pdf', extensions: ['.pdf'] };
            case 'document':
                return { 
                    type: 'doc', 
                    accept: 'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    extensions: ['.doc', '.docx']
                };
            default:
                return { type: 'image', accept: 'image/*', extensions: ['.jpg', '.jfif','.jpeg', '.png', '.gif', '.webp'] };
        }
    };

    const isValidFileType = (file) => {
        const currentFileType = getFileType();
        const extension = '.' + file.name.split('.').pop().toLowerCase();
        
        // Check if it's a PDF file
        const isPdf = extension === '.pdf';
        // Get current section
        const currentSection = location.pathname.slice(1) || 'image';
        
        // If it's a PDF in wrong section or wrong file in PDF section
        if ((isPdf && currentSection !== 'pdf') || (!isPdf && currentSection === 'pdf')) {
            return {
                valid: false,
                error: `Invalid file type: PDF files can only be compressed in the PDF section. Please go to the PDF section to compress PDF files.`
            };
        }
        
        // Check if extension is valid for current section
        const isValidExtension = currentFileType.extensions.includes(extension);
        return {
            valid: isValidExtension,
            error: isValidExtension ? null : `Invalid file type: ${file.name}. Please upload only ${currentFileType.type} files.`
        };
    };

    const handleCompression = async (fileObj, index) => {
        if (!fileObj || !fileObj.file) {
            console.error('Invalid file object');
            return;
        }

        const currentFileType = getFileType();
        const fileType = currentFileType.type;
        console.log('Starting compression for:', fileType, fileObj.file.name);

        try {
            setFiles(prevFiles => {
                const files = [...prevFiles];
                const file = files[index];
                if (!file) return prevFiles;
                file.status = "uploading";
                file.error = null;
                return files;
            });

            const startTime = Date.now();
            let progressInterval = setInterval(() => {
                setFiles(prevFiles => {
                    const files = [...prevFiles];
                    const file = files[index];
                    if (!file || file.status !== "uploading") {
                        clearInterval(progressInterval);
                        return prevFiles;
                    }
                    
                    const elapsedTime = Date.now() - startTime;
                    const progress = Math.min(Math.round((elapsedTime / 2000) * 90), 90);
                    
                    file.progress = progress;
                    file.remainingTime = Math.ceil((100 - progress) * 20 / 100);
                    return files;
                });
            }, 100);

            let apiFunction;
            switch (fileType) {
                case 'video':
                    apiFunction = compressApi.compressVideo;
                    break;
                case 'pdf':
                    apiFunction = compressApi.compressPdf;
                    break;
                case 'doc':
                    apiFunction = compressApi.compressDoc;
                    break;
                default:
                    apiFunction = compressApi.compressImage;
            }

            console.log('Calling API for:', fileType);
            const result = await apiFunction(fileObj.file);
            console.log('API Response:', result);
            
            clearInterval(progressInterval);
            
            if (result.success) {
                setFiles(prevFiles => {
                    const files = [...prevFiles];
                    const file = files[index];
                    if (!file) return prevFiles;

                    const compressedKey = fileType === 'doc' ? 'compressed_doc' : 
                                        fileType === 'pdf' ? 'compressed_pdf' :
                                        fileType === 'video' ? 'compressed_video' : 
                                        'compressed_image';

                    file.compressedUrl = result.data[compressedKey];
                    file.originalSize = (fileObj.file.size / 1024).toFixed(2);
                    file.compressedSize = result.data.compressed_size_kb || 
                        (fileObj.file.size / 1024 * 0.8).toFixed(2);
                    file.status = "completed";
                    file.progress = 100;
                    file.remainingTime = null;
                    file.error = null;
                    return files;
                });
            } else {
                throw new Error(result.error || 'Compression failed');
            }
        } catch (error) {
            console.error('Compression error:', error);
            setFiles(prevFiles => {
                const files = [...prevFiles];
                const file = files[index];
                if (!file) return prevFiles;

                file.status = "error";
                file.error = error.message;
                file.progress = 0;
                file.remainingTime = null;
                return files;
            });
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const validFiles = [];
        const droppedFiles = Array.from(e.dataTransfer.files);
        
        for (const file of droppedFiles) {
            const validation = isValidFileType(file);
            if (validation.valid) {
                validFiles.push(file);
            } else {
                setFiles(prevFiles => [...prevFiles, {
                    file,
                    status: "error",
                    progress: 0,
                    error: validation.error
                }]);
            }
        }

        if (validFiles.length === 0) return;

        const uploadedFiles = validFiles.map((file) => ({
            file,
            progress: 0,
            status: "uploading",
            remainingTime: null,
            error: null
        }));

        // First add all files to state
        const newFiles = [...files, ...uploadedFiles];
        setFiles(newFiles);

        // Then start compression for each new file
        uploadedFiles.forEach((fileObj, index) => {
            const newIndex = files.length + index;
            handleCompression(fileObj, newIndex);
        });
    };

    const handleFileChange = async (e) => {
        const validFiles = [];
        const selectedFiles = Array.from(e.target.files);
        
        for (const file of selectedFiles) {
            const validation = isValidFileType(file);
            if (validation.valid) {
                validFiles.push(file);
            } else {
                setFiles(prevFiles => [...prevFiles, {
                    file,
                    status: "error",
                    progress: 0,
                    error: validation.error
                }]);
            }
        }

        if (validFiles.length === 0) return;

        const uploadedFiles = validFiles.map((file) => ({
            file,
            progress: 0,
            status: "uploading",
            remainingTime: null,
            error: null
        }));

        // First add all files to state
        const newFiles = [...files, ...uploadedFiles];
        setFiles(newFiles);

        // Then start compression for each new file
        uploadedFiles.forEach((fileObj, index) => {
            const newIndex = files.length + index;
            handleCompression(fileObj, newIndex);
        });
    };

    const downloadFile = async (index) => {
        const file = files[index];
        if (!file || !file.compressedUrl) {
            console.error('No compressed URL available');
            return;
        }

        try {
            console.log('Downloading file:', file.compressedUrl);
            
            const response = await fetch(file.compressedUrl);
            if (!response.ok) throw new Error('Download failed');
            
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = file.file.name;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading file:', error);
            setFiles(prevFiles => {
                const files = [...prevFiles];
                const file = files[index];
                if (!file) return prevFiles;
                file.error = 'Download failed. Please try again.';
                return files;
            });
        }
    };

    const downloadAllFiles = async () => {
        const completedFiles = files.filter(file => 
            file.status === "completed" && file.compressedUrl
        );

        // Create a delay between downloads to prevent browser blocking
        for (let i = 0; i < completedFiles.length; i++) {
            const fileIndex = files.findIndex(f => f === completedFiles[i]);
            if (fileIndex !== -1) {
                await downloadFile(fileIndex);
                // Small delay between downloads
                if (i < completedFiles.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            }
        }
    };

    return (
        <div className="file-upload-container">
            <div
                className="drop-zone"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <img className="file-upload-container-image" src="/images/upload.svg" alt="file-upload-container-image" />
                <p>Drag & Drop files here</p>
                <input
                    type="file"
                    multiple
                    accept={getFileType().accept}
                    onChange={handleFileChange}
                    className="file-input"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="btn">
                    Choose Files
                </label>
            </div>
            {files.length > 0 && (
                <div className="file-list">
                    <ul className="prog-list">
                        {files.map((fileObj, index) => (
                            <li key={index}>
                                <div className="file-item">
                                    <div className={"progress-bar " + (fileObj.progress === 100 && 'complete')} 
                                         style={{
                                             width: `${fileObj.progress}%`,
                                             backgroundColor: fileObj.error ? "#ff4444" : "#D0E2FF"
                                         }}>
                                    </div>
                                    <div className="caption-area">
                                        <h6>{fileObj.file.name}</h6>
                                        {fileObj.error && (
                                            <p className="error-message" style={{ color: '#ff4444', marginTop: '5px' }}>
                                                Error: {fileObj.error}
                                            </p>
                                        )}
                                        <div>
                                            {fileObj.status === "completed" ? (
                                                <div className="file-info">
                                                    <p>Original: {fileObj.originalSize} KB</p>
                                                    <p>Compressed: {fileObj.compressedSize} KB</p>
                                                </div>
                                            ) : fileObj.status === "uploading" && (
                                                <p>
                                                    {fileObj.progress}% |{" "}
                                                    {fileObj.remainingTime
                                                        ? `${fileObj.remainingTime}s remaining`
                                                        : ""}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="action-buttons">
                                        {fileObj.status === "completed" && (
                                            <button 
                                                className="btn-img" 
                                                onClick={() => downloadFile(index)}
                                                title="Download compressed file"
                                            >
                                                <img src="/images/download.png" alt="Download"/>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {files.some(file => file.status === "completed") && (
                        <div className="btn-row">
                            <button className="btn" type="button" onClick={downloadAllFiles}>
                                Download All
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DragAndDropFileUpload;
