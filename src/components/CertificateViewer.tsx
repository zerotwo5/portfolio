import { Button } from '@/components/ui/button';
import MatrixBackground from './MatrixBackground';
import { useParams } from 'react-router-dom';
import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const CertificateViewer = () => {
  const { certificateId } = useParams();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Effect to simulate loading state
  useEffect(() => {
    setIsLoading(true);
    // Small timeout to prevent flash of loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [certificateId]);

  // Map of certificate IDs to their details
  const certificateDetails = {
    'bug-hunting-cert': {
      title: 'Professional Bug Hunting & Advanced Web Application Security Testing',
      vendor: 'Bytecapsuleit',
      fileName: 'bug-hunting-cert.pdf'
    },
    'linux-shell-cert': {
      title: 'Hands-on Introduction to Linux Commands & Shell Scripting',
      vendor: 'IBM',
      fileName: 'linux-shell-cert.pdf'
    },
    'networking-cert': {
      title: 'Networking Fundamentals',
      vendor: 'Akamami',
      fileName: 'networking-cert.pdf'
    },
    'web-design-cert': {
      title: 'Responsive Web Design Certificate',
      vendor: 'Coders trust',
      fileName: 'web-design-cert.pdf'
    }
  };

  const certificate = certificateId ? certificateDetails[certificateId as keyof typeof certificateDetails] : null;
  
  const handleDownload = async () => {
    if (!certificate || isDownloading) return;
    
    setIsDownloading(true);
    try {
      // Directly create an anchor element with the PDF file path
      const link = document.createElement('a');
      link.href = `/certificates/${certificate.fileName}`;
      link.download = certificate.fileName; // This ensures the file downloads with its original name
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading certificate:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground />
      <div className="relative z-10 container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <div className="w-16 h-16 border-4 border-[#00FFA1] border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-[#00FFA1] font-mono">Loading certificate...</p>
          </div>
        ) : certificate ? (
          <>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-[#00FFA1] font-mono">{certificate.title}</h1>
                  <p className="text-muted-foreground mt-2 font-mono">Issued by {certificate.vendor}</p>
                </div>
                <Button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="bg-[#00FFA1] hover:bg-[#00E890] text-black font-medium whitespace-nowrap transform transition-all duration-200 hover:scale-105"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {isDownloading ? 'Downloading...' : 'Download Certificate'}
                </Button>
              </div>
              
              <div className="bg-black/50 rounded-lg p-6 backdrop-blur-sm border border-[#00FFA1]/20 hover:border-[#00FFA1]/30 transition-all duration-300">
                <div className="relative group">
                  <img
                    src={`/certificates/${certificateId}.png`}
                    alt={certificate.title}
                    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold text-[#00FFA1] font-mono">Certificate Not Found</h1>
            <p className="text-muted-foreground mt-4 font-mono">The requested certificate could not be found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateViewer;