import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { uploadFile } from '@/lib/upload';
import { UIMessage } from '@/lib/app/ui-message.interface';
import { v4 as uuidv4 } from 'uuid';


interface UploadButtonProps {
  onUploadMessage: (message: UIMessage[]) => void;
}

const UploadButton = ({ onUploadMessage }: UploadButtonProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file first.');
    setUploading(true);

    try {
      const userMessage: UIMessage = {
        id: uuidv4(),
        role: "user",
        parts: [{ type: "text", text: `Uploaded file: ${file.name}` }],
      };
      
      const assistantMessages = (await uploadFile(file));

      onUploadMessage([userMessage, ...assistantMessages]);
      
    } catch (err: any) {
      console.error(err);
      onUploadMessage([{
        id: uuidv4(),
        role: "assistant",
        parts: [{ type: "text", text: "Upload failed. Please try again." }],
      }]);

    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-row items-center gap-4 p-6">
      <Input
        type="file"
        onChange={handleFileChange}
        accept=".pdf,.txt,.docx"
        className="hidden"
        id="file-input"
      />

      <Label htmlFor="file-input" >
        {file ? file.name : 'Click to choose File'}
      </Label>

      <Button
        onClick={handleUpload}
        disabled={!file || uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </Button>
    </div>
  );
};

export default UploadButton;