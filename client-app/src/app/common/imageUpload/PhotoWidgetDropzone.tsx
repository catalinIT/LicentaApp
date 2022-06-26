import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Center, Text } from '@chakra-ui/react';

interface Props {
  setFiles: (files: any) => void;
}
export default function PhotoWidgetDropzone({ setFiles }: Props) {
  //create two alternative styles - one for when the dropzone is active, and another one for when the dropzone is inactive
  const dzStyles = {
    border: 'dashed 3px #eee',
    borderColor: '#eee',
    borderRadius: '5px',
    paddingTop: '20px',
    paddingBottom: '20px',
    textAlling: 'center',
    heigh: 200
  }

  const dzActive = {
    borderColor: 'green'
  }

  // this hooks returnes a memoized version of the callback that only change if one of its dependencies change
  const onDrop = useCallback(acceptedFiles => {
    // set the files
    // preview is an additional property to the file - generates a preview of the image dropped - preview is stored on client's memory until we dispose of it
    setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })))
  }, [setFiles])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()} style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}>
      <input {...getInputProps()} />
      <Center>
        <FileUploadIcon fontSize='large' />
        <Text>Upload photo here</Text>
      </Center>
    </div>
  )
}

//Obs.
// for the first div we added a conditional style component (additional styling is appliend when the drag zone is acive)
// {{...dzStyles, ...dzActive}} all dzStyles are applied by default, if isDragActive is true, then some styles properties are overiden