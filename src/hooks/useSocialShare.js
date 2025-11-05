import { useCallback } from 'react';

/**
 * Custom hook for social media sharing functionality
 * Provides methods to share content across different platforms
 */
export const useSocialShare = () => {
  // Share to WhatsApp
  const shareToWhatsApp = useCallback((text, url) => {
    const shareText = encodeURIComponent(`${text}\n\n${url}`);
    const whatsappUrl = `https://wa.me/?text=${shareText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, []);

  // Share to Twitter/X
  const shareToTwitter = useCallback((text, url, hashtags = []) => {
    const shareText = encodeURIComponent(text);
    const shareUrl = encodeURIComponent(url);
    const hashtagsParam = hashtags.length > 0 ? `&hashtags=${hashtags.join(',')}` : '';
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}${hashtagsParam}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  }, []);

  // Share to LinkedIn
  const shareToLinkedIn = useCallback((url, title, summary) => {
    const shareUrl = encodeURIComponent(url);
    const shareTitle = encodeURIComponent(title);
    const shareSummary = encodeURIComponent(summary);
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&title=${shareTitle}&summary=${shareSummary}`;
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  }, []);

  // Share to Facebook
  const shareToFacebook = useCallback((url) => {
    const shareUrl = encodeURIComponent(url);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    window.open(facebookUrl, '_blank', 'noopener,noreferrer');
  }, []);

  // Share to Telegram
  const shareToTelegram = useCallback((text, url) => {
    const shareText = encodeURIComponent(`${text}\n\n${url}`);
    const telegramUrl = `https://t.me/share/url?text=${shareText}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  }, []);

  // Copy link to clipboard
  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
      } catch (fallbackErr) {
        document.body.removeChild(textArea);
        return false;
      }
    }
  }, []);

  // Generic web share API (for supported browsers)
  const nativeShare = useCallback(async (shareData) => {
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return true;
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
        return false;
      }
    }
    return false;
  }, []);

  return {
    shareToWhatsApp,
    shareToTwitter,
    shareToLinkedIn,
    shareToFacebook,
    shareToTelegram,
    copyToClipboard,
    nativeShare
  };
};
