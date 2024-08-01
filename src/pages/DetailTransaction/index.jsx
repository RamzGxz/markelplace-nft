import React, { useState } from 'react';
import { Clipboard } from '@phosphor-icons/react'; 

const CopyableText = ({ label, text }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000); 
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between mb-4 space-y-2 lg:space-y-0">
      <span className="font-semibold lg:mr-11">{label}</span>
      <div className="flex items-center w-full lg:w-auto overflow-x-auto">
        <span className="flex-1 block overflow-wrap break-words overflow-hidden lg:mr-2">{text}</span>
        <button onClick={copyToClipboard} className="focus:outline-none flex-shrink-0 ml-2">
          <Clipboard className="w-5 h-5 text-white hover:text-[#764EBE]" />
        </button>
        {copySuccess && <span className="text-sm text-[#764EBE] ml-2">{copySuccess}</span>}
      </div>
    </div>
  );
};

const DetailTransaction = () => {
  const signature = '3uVDZCxxpisouiyuyfgvhttuwgwfdywiguhijoiuyfgihsqunqslhigufyhvjlukhgjvbkhoquitbuoiytytdghcvbkhlituydtyxfhgvbkhituydgchjklhguif';
  const block = '279592591';
  const contactAddress = 'GMAo63vTVdVFjj2j8PnAAhBunKnsGCPeosc6eeY4EB7K';

  return (
    <div className="text-white min-h-screen flex items-center justify-center p-2 mb-[100px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 relative">
        <div className="lg:col-span-3">
          <h2 className="text-[32px] font-bold text-white mb-2 md:text-[36px]">Detail Transaksi</h2>
          <div className="w-full h-1 bg-[#764EBE] mb-[10px] lg:mb-[80px]"></div>
        </div>
        <div className="flex justify-center items-center relative lg:col-span-1 h-full">
          <div className="relative w-full h-full">
            <img 
              src="/nf1.png" 
              alt="NFT" 
              className="rounded-lg w-full h-full" 
            />
            <h3 className="absolute top-0 right-0 text-xl font-bold mb-4 bg-gray-800 p-2 rounded-lg">Name Product #1212</h3>
          </div>
        </div>
        <div className="lg:col-span-2 bg-[#392B74]/15 rounded-lg shadow-lg p-4 mb-10 mt-[53px]">
          <div className="flex flex-col gap-4">
              <CopyableText label="Signature" text={signature} />
              <CopyableText label="Block" text={block} />
            <div className="flex flex-col lg:flex-row justify-between mb-4 space-y-2 lg:space-y-0">
              <span className="font-semibold">TimeStamp</span>
              <span className="break-words whitespace-normal max-w-full">about 14 hours ago | July 25, 2024 12:48:05 +UTC</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mb-4 space-y-2 lg:space-y-0">
              <span className="font-semibold">Result</span>
              <span className="flex items-center gap-2 break-words whitespace-normal max-w-full">
                <span className="">Success</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            <CopyableText label="Contact Address" text={contactAddress} />
            <div className="flex flex-col lg:flex-row justify-between mb-4 space-y-2 lg:space-y-0">
              <span className="font-semibold">Price</span>
              <span className="break-words whitespace-normal max-w-full">0.00005 SOL ($0.008792)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTransaction;
