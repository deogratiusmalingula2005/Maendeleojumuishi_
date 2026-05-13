import React from 'react';

interface Props {
  urls: string[];
}

export const SocialGallery: React.FC<Props> = ({ urls }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {urls.map((url, index) => {
        // Simple embed URL construction for Instagram/Facebook if possible, 
        // fallback to just a clickable link card if embed not strictly supported.
        const embedUrl = `${url.replace(/\/$/, '')}/embed`;
        
        return (
          <div key={index} className="aspect-square bg-emerald-950/40 rounded-2xl overflow-hidden border border-emerald-500/20">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
              title={`Social Media Content ${index}`}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};
