import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GOOGLE_DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/1yRx1VOx_s9VlxUynmCP4aNQVzn7DnbI2?usp=sharing';

const CVDownload = () => {
  const handleDownloadCV = () => {
    window.open(GOOGLE_DRIVE_FOLDER_URL, '_blank');
  };

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-card p-8 rounded-lg shadow-lg card-hover">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-cyber-green/10 rounded-full">
              <FileText className="w-12 h-12 cyber-text" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 font-mono cyber-text">
            Download My CV
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access my latest CV and professional documents. Click below to view my Google Drive 
            folder with up-to-date materials, including my cybersecurity experience, skills, and certifications.
          </p>
          
          <Button
            onClick={handleDownloadCV}
            size="lg"
            className="bg-cyber-green text-primary-foreground hover:bg-cyber-cyan font-medium group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            View My CV
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4">
            Last updated: October 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default CVDownload;