// 'use client';

// import React, { useState } from 'react';
// import { X, Copy, Share2 } from 'lucide-react';

// interface ShareQuestionnaireModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   formId?: string;
//   shareLink?: string;
// }

//  const ShareQuestionnaireModal: React.FC<ShareQuestionnaireModalProps> = ({
//   isOpen,
//   onClose,
  
//   shareLink = 'https://example.com/questionnaire/abc123',
// }) => {
//   const [copied, setCopied] = useState(false);

//   if (!isOpen) return null;

//   const handleCopyLink = () => {
//     navigator.clipboard.writeText(shareLink);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleShare = () => {
//     if (navigator.share) {
//       navigator.share({
//         title: 'Share Questionnaire',
//         text: 'Check out this questionnaire',
//         url: shareLink,
//       }).catch(err => console.log('Error sharing:', err));
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
//       <div
//         className="bg-white rounded-[12px] shadow-2xl relative"
//         style={{
//           width: '400px',
//         }}
//       >
//         <style jsx>{`
//           @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
//           .manrope { font-family: 'Manrope', sans-serif; }
//         `}</style>

//         {/* Modal Header */}
//         <div
//           className="flex items-center justify-between p-6 border-b border-gray-200"
//           style={{ paddingLeft: '24px', paddingRight: '24px' }}
//         >
//           <button
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-800"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Modal Content */}
//         <div className="p-6 space-y-6" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
//           <h2
//             className="manrope text-lg font-semibold text-gray-900"
//             style={{
//               fontSize: '16px',
//               fontWeight: 600,
//               color: '#1A1A1A'
//             }}
//           >
//             Create Questionnaire
//           </h2>

//           {/* Send To */}
//           <div>
//             <label className="manrope block text-sm font-medium text-gray-700 mb-2">
//               Send To:
//             </label>
//             <div className="flex items-center gap-2">
//               <svg
//                 className="w-4 h-4 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
//                 />
//               </svg>
//               <span className="manrope text-sm text-gray-700">
//                 Anyone with the link
//               </span>
//             </div>
//           </div>

//           {/* Share Link */}
//           <div className="space-y-3">
//             <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-[8px] border border-gray-200">
//               <input
//                 type="text"
//                 value={shareLink}
//                 readOnly
//                 className="manrope text-sm text-gray-700 bg-transparent flex-1 outline-none"
//               />
//               <button
//                 onClick={handleCopyLink}
//                 className="text-gray-400 hover:text-gray-600"
//                 title={copied ? 'Copied!' : 'Copy link'}
//               >
//                 <Copy className="w-4 h-4" />
//               </button>
//             </div>
//             {copied && (
//               <p className="manrope text-xs text-green-600">Copied to clipboard!</p>
//             )}
//           </div>
//         </div>

//         {/* Modal Footer */}
//         <div
//           className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50/50"
//           style={{ paddingLeft: '24px', paddingRight: '24px' }}
//         >
//           <button
//             type="button"
//             onClick={handleCopyLink}
//             className="manrope px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm flex items-center gap-2"
//             style={{
//               borderRadius: '24px',
//               borderColor: '#CCCCCC'
//             }}
//           >
//             <Copy className="w-4 h-4" />
//             Copy Link
//           </button>
//           <button
//             type="button"
//             onClick={handleShare}
//             className="manrope px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium text-sm flex items-center gap-2"
//             style={{
//               borderRadius: '24px',
//               backgroundColor: '#5D2A8B'
//             }}
//           >
//             <Share2 className="w-4 h-4" />
//             Share
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ShareQuestionnaireModal;


'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Copy, Share2, ArrowLeft } from 'lucide-react';

export default function ShareQuestionnairePage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const shareLink = 'https://example.com/questionnaire/abc123';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Share Questionnaire',
        text: 'Check out this questionnaire',
        url: shareLink,
      }).catch(err => console.log('Error sharing:', err));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Page Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => router.back()}
                className="mr-4 text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="manrope text-xl font-semibold text-gray-900">
                Share Questionnaire
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="manrope text-lg font-semibold text-gray-900 mb-6">
            Create Questionnaire
          </h2>

          {/* Send To */}
          <div className="mb-6">
            <label className="manrope block text-sm font-medium text-gray-700 mb-2">
              Send To:
            </label>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <span className="manrope text-sm text-gray-700">
                Anyone with the link
              </span>
            </div>
          </div>

          {/* Share Link */}
          <div className="mb-8">
            <label className="manrope block text-sm font-medium text-gray-700 mb-2">
              Share Link:
            </label>
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <input
                type="text"
                value={shareLink}
                readOnly
                className="manrope text-sm text-gray-700 bg-transparent flex-1 outline-none"
              />
              <button
                onClick={handleCopyLink}
                className="text-gray-400 hover:text-gray-600"
                title={copied ? 'Copied!' : 'Copy link'}
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            {copied && (
              <p className="manrope text-xs text-green-600 mt-2">Copied to clipboard!</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCopyLink}
              className="manrope px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy Link
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="manrope px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium text-sm flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}