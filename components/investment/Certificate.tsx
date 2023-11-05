// Certificate.js
'use client';
import React, { useState } from 'react';
import ImageModal from '../common/ImageModal';
import Image from 'next/image';
import Link from 'next/link';

export default function Certificate() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);

  return (
    <Link href="/static/images/investment/Incorporation-page-001 1 (3).png">
      <div className="w-[477px] h-[435px] relative" onClick={showModal}>
        <Image
          src="/static/images/investment/Incorporation-page-001 1 (3).png"
          alt="Certificate"
          layout="fill"
        />
        {isOpen && (
          <ImageModal
            src="/static/images/investment/Incorporation-page-001 1 (3).png"
            alt="Certificate"
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </Link>
  );
}
