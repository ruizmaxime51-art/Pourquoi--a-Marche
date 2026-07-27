import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from './site';
import { imageDimensions } from './imageDimensions';

export function buildPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  robots,
}) {
  const url = new URL(path, `${SITE_URL}/`).toString();
  const dimensions = imageDimensions[image] || { width: 1200, height: 630 };
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      locale: 'fr_FR',
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [{ url: image, ...dimensions, alt: socialTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [image],
    },
    ...(robots ? { robots } : {}),
  };
}
