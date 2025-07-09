"use client";

import { X } from "lucide-react";

import { useEffect } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramShareButton,
  RedditShareButton,
  PinterestShareButton,

  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
  TelegramIcon,
  RedditIcon,
  PinterestIcon
} from 'react-share'

const ShareDrawer = ({ link, onClose}) => {
    // Lock the body scroll when the drawer is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto'; // Reset on unmount
        };
    }, []);
  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-70 backdrop:blur-xl flex justify-center items-end sm:items-center">
      <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Share Your Portfolio</h2>
          <button className="p-0 bg-white" onClick={onClose}><X className="hover:text-black text-gray-500 translate-x-3 -translate-y-3" /></button>
        </div>

        {/* Share Buttons Grid */}
        <div className="grid grid-cols-4 gap-3 space-y-4 justify-items-center px-4">
          <FacebookShareButton url={link}><FacebookIcon size={40} round /></FacebookShareButton>
          <TwitterShareButton url={link}><TwitterIcon size={40} round /></TwitterShareButton>
          <LinkedinShareButton url={link}><LinkedinIcon size={40} round /></LinkedinShareButton>
          <WhatsappShareButton url={link}><WhatsappIcon size={40} round /></WhatsappShareButton>
          <EmailShareButton url={link} subject="Check out my portfolio!" body="Here's my portfolio: "><EmailIcon size={40} round /></EmailShareButton>
          <TelegramShareButton url={link}><TelegramIcon size={40} round /></TelegramShareButton>
          <RedditShareButton url={link} title="My Portfolio"><RedditIcon size={40} round /></RedditShareButton>
          <PinterestShareButton url={link} media={link}><PinterestIcon size={40} round /></PinterestShareButton>
        </div>

        {/* Copy link section */}
        <div className="mt-10 text-center text-sm text-gray-600">
          <p className="text-black">or copy link manually</p>
          <div className="mt-2 p-2 border rounded-md bg-gray-100 break-all">{link}</div>
        </div>
      </div>
    </div>
  )
}

export default ShareDrawer