import React, { useState, useRef } from 'react';
import { submitServiceEnquiryWithFile} from '../lib/firebase';
import type { EnquiryFormData } from '../lib/firebase';
import { IconUpload, IconFile, IconX, IconUser, IconMail, IconPhone, IconMapPin, IconMessage } from '@tabler/icons-react';

interface ServiceEnquiryFormProps {
  source?: string;
  className?: string;
}

export default function ServiceEnquiryForm({ source = 'services-page', className = '' }: ServiceEnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    message: '',
    phone: '',
    country: '',
    state: '',
    course: '',
    source
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        setErrorMessage('Please select a valid file type (PDF, DOC, or DOCX)');
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('File size must be less than 5MB');
        return;
      }

      setSelectedFile(file);
      setErrorMessage('');
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    if (!formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Phone number is required');
      return false;
    }
    if (!formData.country.trim()) {
      setErrorMessage('Country is required');
      return false;
    }
    if (!formData.state.trim()) {
      setErrorMessage('State is required');
      return false;
    }
    if (!formData.course.trim()) {
      setErrorMessage('Please select a course');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Message is required');
      return false;
    }
    if (formData.message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }



    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setUploadProgress(0);

    try {
      let progressInterval: NodeJS.Timeout | null = null;
      
      // Simulate upload progress only if there's a file
      if (selectedFile) {
        progressInterval = setInterval(() => {
          setUploadProgress(prev => {
            if (prev >= 90) {
              return 90;
            }
            return prev + 10;
          });
        }, 200);
      }

      const result = await submitServiceEnquiryWithFile(formData, selectedFile || undefined);
      
      // Clear interval and set to 100%
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      setUploadProgress(100);
      
      // Wait a moment for the 100% to show, then reset
      setTimeout(() => {
        setUploadProgress(0);
      }, 1000);

      if (result.error) {
        setSubmitStatus('error');
        setErrorMessage(result.error);
      } else {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: '',
          country: '',
          state: '',
          course: '',
          source
        });
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white/25 backdrop-blur-[15px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-6 sm:p-8 ${className}`}>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        {/* Status Messages */}
        {submitStatus === 'error' && (
          <div className="col-span-1 sm:col-span-2 text-red-700 bg-red-100 border border-red-300 rounded-md px-3 py-2 text-sm">
            {errorMessage}
          </div>
        )}
        {submitStatus === 'success' && (
          <div className="col-span-1 sm:col-span-2 text-green-700 bg-green-100 border border-green-300 rounded-md px-3 py-2 text-sm">
            Your enquiry has been submitted successfully!
          </div>
        )}

        {/* Upload Progress */}
        {isSubmitting && selectedFile && uploadProgress > 0 && (
          <div className="col-span-1 sm:col-span-2">
            <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-700 text-sm font-medium">
                  {uploadProgress < 100 ? 'Uploading...' : 'Upload Complete!'}
                </span>
                <span className="text-blue-700 text-sm">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Name Field */}
        <div className="col-span-1">
          <label className=" text-black font-semibold mb-2 flex items-center gap-2">
            <IconUser size={16} />
            Name
          </label>
          <input 
            name="name" 
            type="text" 
            required 
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" 
            placeholder="Your name" 
          />
        </div>

        {/* Phone Field */}
        <div className="col-span-1">
          <label className=" text-black font-semibold mb-2 flex items-center gap-2">
            <IconPhone size={16} />
            Phone
          </label>
          <input 
            name="phone" 
            type="tel" 
            required 
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" 
            placeholder="Your phone number" 
          />
        </div>

        {/* Email Field */}
        <div className="col-span-1">
          <label className=" text-black font-semibold mb-2 flex items-center gap-2">
            <IconMail size={16} />
            Email
          </label>
          <input 
            name="email" 
            type="email" 
            required 
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" 
            placeholder="you@example.com" 
          />
        </div>

        {/* Country Field */}
        <div className="col-span-1">
          <label className=" text-black font-semibold mb-2 flex items-center gap-2">
            <IconMapPin size={16} />
            Country
          </label>
          <input 
            name="country" 
            type="text" 
            required 
            value={formData.country}
            onChange={handleInputChange}
            className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" 
            placeholder="Your country" 
          />
        </div>

        {/* State Field */}
        <div className="col-span-1">
          <label className="block text-black font-semibold mb-2">State</label>
          <input 
            name="state" 
            type="text" 
            required 
            value={formData.state}
            onChange={handleInputChange}
            className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" 
            placeholder="Your state" 
          />
        </div>

        {/* Course Field */}
        <div className="col-span-1">
          <label className="block text-black font-semibold mb-2">Course</label>
          <select 
            name="course" 
            required 
            value={formData.course}
            onChange={handleInputChange}
            className="w-full bg-white/25 backdrop-blur-2xl text-black border-2 border-white/35 shadow rounded-md px-4 py-2 focus:outline-none focus:border-orange-500"
          >
            <option value="">Select a course</option>
            <option value="Robotics & Automation">Robotics & Automation</option>
            <option value="Special Purpose Machine (SPM)">Special Purpose Machine (SPM)</option>
            <option value="SCADA">SCADA</option>
            <option value="Custom Panel Design & Manufacturing">Custom Panel Design & Manufacturing</option>
            <option value="Robot Programming Services">Robot Programming Services</option>
            <option value="PLC & HMI Programming Services">PLC & HMI Programming Services</option>
          </select>
        </div>

        {/* File Upload Field */}
        <div className="col-span-1 sm:col-span-2">
          <label className=" text-black font-semibold mb-2 flex items-center gap-2">
            <IconFile size={16} />
            Resume/Document (Optional)
          </label>
          <div className="relative">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="border-2 border-dashed border-white/35 rounded-md p-4 text-center hover:border-orange-500 transition-colors cursor-pointer"
                 onClick={() => fileInputRef.current?.click()}>
              {selectedFile ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconFile size={20} className="text-orange-500" />
                    <span className="text-black font-medium">{selectedFile.name}</span>
                                         <span className="text-gray-500 text-sm">
                       ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                     </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile();
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <IconX size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <IconUpload size={24} className="text-orange-500" />
                  <span className="text-black">Click to upload or drag and drop</span>
                  <span className="text-gray-500 text-sm">PDF, DOC, DOCX (max 5MB)</span>
                  
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div className="col-span-1 sm:col-span-2">
          <label className=" text-black font-semibold mb-2 flex items-center gap-2">
            <IconMessage size={16} />
            Message
          </label>
          <textarea 
            name="message" 
            rows={7} 
            required
            value={formData.message}
            onChange={handleInputChange}
            className="w-full bg-white/25 backdrop-blur-2xl text-black placeholder-black/60 border-2 border-white/35 rounded-md px-4 py-2 focus:outline-none focus:border-orange-500" 
            placeholder="Tell us about your requirements and how we can help you..."
          />
        </div>

                 {/* Submit Button */}
         <div className="col-span-1 sm:col-span-2 flex justify-center">
           <button 
             type="submit" 
             disabled={isSubmitting}
             className="bg-[#ff4f0f] hover:bg-[#e65a08] disabled:bg-gray-400 text-xl text-white font-semibold px-8 py-3 rounded-md transition-colors disabled:cursor-not-allowed flex items-center gap-2"
           >
             {isSubmitting ? (
               <>
                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                 {selectedFile ? 'Uploading & Submitting...' : 'Submitting...'}
               </>
             ) : submitStatus === 'success' ? (
               'Submitted Successfully!'
             ) : (
               'Submit Enquiry'
             )}
           </button>
         </div>

         
      </form>
    </div>
  );
}
