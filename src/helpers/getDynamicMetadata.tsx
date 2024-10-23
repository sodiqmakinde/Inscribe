import { Metadata } from 'next';
interface DynamicMetadataProps {
  title: string;
  description: string;
}

export function getDynamicMetadata({ title, description }: DynamicMetadataProps): Metadata {
  return {
    title,
    description,
    icons: {
      icon: '/favicon.png',
      apple: '/apple-icon.png',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@askimlearning',
      title,
      description,
      images: ['https://media.imlearning.com/brand/twitter-meta-image.jpg'],
    },
    openGraph: {
      type: 'website',
      title,
      url: 'https://imlearning.com/',
      images: ['https://media.imlearning.com/brand/ogimage.jpg'],
      description,
    },
  };
}
