import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import { uploadFile } from '@/lib/upload';

const UploadButton = () => {
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
      const data = await uploadFile(file);
    } catch (err: any) {
      console.error(err);
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