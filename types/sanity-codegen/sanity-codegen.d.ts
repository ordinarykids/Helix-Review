/// <reference types="@sanity-codegen/types" />

namespace Sanity.Default.Client {
  type Config = {
    AllBlogPosts: Sanity.Default.Query.AllBlogPosts;
    BlogPost: Sanity.Default.Query.BlogPost;
  };
}
namespace Sanity.Default.Query {
  type AllBlogPosts = {
    slug: string;
    title: string | null;
  }[];
}
namespace Sanity.Default.Query {
  type BlogPost = {
    categories:
      | {
          name: Sanity.Ref.Ref_IxQHGxcvwPfrMIMx;
          slug: Sanity.Ref.Ref_YDQvcCqV998ivCra;
        }[]
      | null;
    tags:
      | {
          name: Sanity.Ref.Ref_q4PJO3EMyNFMzqtm;
          slug: Sanity.Ref.Ref_6rZ4HMzGlFfKuRBH;
        }[]
      | null;
    title: string | null;
  };
}
namespace Sanity.Default.Schema {
  type BlogPost =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_dMaEi65jLMcSvh7k>[];
        content?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        featuredImage?: Sanity.Ref.Ref_qX2aXcGKtRrAQIXy;
        seo?: Sanity.Ref.Ref_a4HiQLelQD5s1R6E;
        showHeroSubheader?: boolean;
        slug: {
          _type: "slug";
          current: string;
          source?: string;
        };
        subheader?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        tags?: Sanity.Reference<Sanity.Ref.Ref_CeiSOCrybASs5AFv>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Button =
    | {
        align?: string;
        buttonStyle?: string;
        link: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
        size?: string;
        text: string;
        theme?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type CardGrid =
    | {
        cards: Sanity.Ref.Ref_vFT5OeRkLCU8VyMw[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Category =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_dMaEi65jLMcSvh7k>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type FeaturedImage =
    | {
        image?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type GeometricCTA =
    | {
        content?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        linkText?: string;
        linkUrl: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
        shape: string;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type GeometricCTAs =
    | {
        ctas: Sanity.Ref.Ref_w31G5P8pfYGFDSq3[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Geopoint =
    | {
        alt?: number;
        lat?: number;
        lng?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Icon = string | undefined;
}
namespace Sanity.Default.Schema {
  type IconCard =
    | {
        header?: string;
        icon?: Sanity.Ref.Ref_hjMOAzgmse6xDThU;
        subheader?: string;
        text?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Link = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_xYwoqYqmLIHn3hwB>;
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
          navigationSectionPanel?: Sanity.Ref.Ref_1yVzeaPF7rzJnfVv;
          title: string;
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type MediaTag =
    | {
        _id: string;
        _type: "media.tag";
        name?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type NavigationSectionPanel =
    | {
        ctaLink?: {
          title?: string;
          url: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
        };
        hideTeaserDesktop?: boolean;
        hideTeaserMobile?: boolean;
        navigationLinkGroups: {
          navigationLinks: {
            title: string;
            url: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
          }[];
          title?: string;
          titlelink: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_VF6GhJpVvLvO6JKc>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
        pageBuilder?: Sanity.Ref.Ref_u6y8QSbZwlQuoNa7;
        parent?: Sanity.Reference<Sanity.Ref.Ref_xYwoqYqmLIHn3hwB>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type PageBuilder =
    | (Sanity.Ref.Ref_B8pKYUPd7Rsgr5jV | Sanity.Ref.Ref_YYBpEMCSFZvMqCsU)[]
    | undefined;
}
namespace Sanity.Default.Schema {
  type PageSection =
    | {
        innerBlocks?: (
          | Sanity.Ref.Ref_Ev1qAoiSkdmo2bqb
          | Sanity.Ref.Ref_zdzZYA3Aqo2lg5fB
        )[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityAssetSourceData =
    | {
        id?: string;
        name?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityFileAsset =
    | {
        _id: string;
        _type: "sanity.fileAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_OFotreTHfGjYLlTV;
        title?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageAsset =
    | {
        _id: string;
        _type: "sanity.imageAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        metadata?: Sanity.Ref.Ref_LUmOn99EJ9hPFz4x;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_OFotreTHfGjYLlTV;
        title?: string;
        uploadId?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageCrop =
    | {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageDimensions =
    | {
        aspectRatio?: number;
        height?: number;
        width?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageHotspot =
    | {
        height?: number;
        width?: number;
        x?: number;
        y?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageMetadata =
    | {
        blurHash?: string;
        dimensions?: Sanity.Ref.Ref_f9BPL3TO58yQZNGc;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_4JD2Pfe2xSaqiNZI;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        darkVibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        dominant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        lightMuted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        lightVibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        muted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        vibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePaletteSwatch =
    | {
        background?: string;
        foreground?: string;
        population?: number;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SeoFields =
    | {
        canonicalUrl?: string;
        focusKeyword?: string;
        focusSynonyms?: string;
        nofollow?: boolean;
        noindex?: boolean;
        ogDescription?: string;
        ogImage?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        openGraphUrl?: string;
        seoDescription?: string;
        seoTitle?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Slug =
    | {
        current?: string;
        source?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type StyledLink =
    | {
        align?: string;
        link?: string;
        style?: string;
        text?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Tag =
    | {
        _id: string;
        _type: "tag";
        name?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type VideoEmbed =
    | {
        url?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_1yVzeaPF7rzJnfVv = {
    ctaLink?: {
      title?: string;
      url: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
    };
    hideTeaserDesktop?: boolean;
    hideTeaserMobile?: boolean;
    navigationLinkGroups: {
      navigationLinks: {
        title: string;
        url: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
      }[];
      title?: string;
      titlelink: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_VF6GhJpVvLvO6JKc>;
  };
}
namespace Sanity.Ref {
  type Ref_4JD2Pfe2xSaqiNZI = {
    darkMuted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    darkVibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    dominant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    lightMuted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    lightVibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    muted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    vibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
  };
}
namespace Sanity.Ref {
  type Ref_6h9MMY2vGJp9KmiC = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_6rZ4HMzGlFfKuRBH = unknown;
}
namespace Sanity.Ref {
  type Ref_a4HiQLelQD5s1R6E = {
    canonicalUrl?: string;
    focusKeyword?: string;
    focusSynonyms?: string;
    nofollow?: boolean;
    noindex?: boolean;
    ogDescription?: string;
    ogImage?: {
      asset: Sanity.Reference<{
        _type: "sanity.imageAsset";
        assetId: string;
        extension: string;
        metadata: {
          _type: "sanity.imageMetadata";
          dimensions: {
            _type: "sanity.imageDimensions";
            aspectRatio: number;
            height: number;
            width: number;
          };
          hasAlpha: boolean;
          isOpaque: boolean;
          lqip: string;
          palette: {
            _type: "sanity.imagePalette";
            darkMuted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            dominant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            lightMuted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            muted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            vibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
          };
        };
        mimeType: string;
        originalFilename: string;
        path: string;
        sha1hash: string;
        size: number;
        uploadId: string;
        url: string;
      }>;
      crop?: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot?: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
    openGraphUrl?: string;
    seoDescription?: string;
    seoTitle?: string;
  };
}
namespace Sanity.Ref {
  type Ref_B8pKYUPd7Rsgr5jV = {
    innerBlocks?: (
      | Sanity.Ref.Ref_Ev1qAoiSkdmo2bqb
      | Sanity.Ref.Ref_zdzZYA3Aqo2lg5fB
    )[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_CeiSOCrybASs5AFv =
    | {
        _id: string;
        _type: "tag";
        name?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_dMaEi65jLMcSvh7k =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_dMaEi65jLMcSvh7k>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_Ev1qAoiSkdmo2bqb = {
    cards: Sanity.Ref.Ref_vFT5OeRkLCU8VyMw[];
  };
}
namespace Sanity.Ref {
  type Ref_f9BPL3TO58yQZNGc = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_hjMOAzgmse6xDThU = string;
}
namespace Sanity.Ref {
  type Ref_IxQHGxcvwPfrMIMx = string | null;
}
namespace Sanity.Ref {
  type Ref_LUmOn99EJ9hPFz4x = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_f9BPL3TO58yQZNGc;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_4JD2Pfe2xSaqiNZI;
  };
}
namespace Sanity.Ref {
  type Ref_NUuVfHd6c88BnAOE = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_xYwoqYqmLIHn3hwB>;
  };
}
namespace Sanity.Ref {
  type Ref_OFotreTHfGjYLlTV = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_q4PJO3EMyNFMzqtm = string | null;
}
namespace Sanity.Ref {
  type Ref_qX2aXcGKtRrAQIXy = {
    image?: {
      asset: Sanity.Reference<{
        _type: "sanity.imageAsset";
        assetId: string;
        extension: string;
        metadata: {
          _type: "sanity.imageMetadata";
          dimensions: {
            _type: "sanity.imageDimensions";
            aspectRatio: number;
            height: number;
            width: number;
          };
          hasAlpha: boolean;
          isOpaque: boolean;
          lqip: string;
          palette: {
            _type: "sanity.imagePalette";
            darkMuted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            dominant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            lightMuted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            muted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            vibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
          };
        };
        mimeType: string;
        originalFilename: string;
        path: string;
        sha1hash: string;
        size: number;
        uploadId: string;
        url: string;
      }>;
      crop?: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot?: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
  };
}
namespace Sanity.Ref {
  type Ref_u6y8QSbZwlQuoNa7 = (
    | Sanity.Ref.Ref_B8pKYUPd7Rsgr5jV
    | Sanity.Ref.Ref_YYBpEMCSFZvMqCsU
  )[];
}
namespace Sanity.Ref {
  type Ref_VF6GhJpVvLvO6JKc =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_dMaEi65jLMcSvh7k>[];
        content?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        featuredImage?: Sanity.Ref.Ref_qX2aXcGKtRrAQIXy;
        seo?: Sanity.Ref.Ref_a4HiQLelQD5s1R6E;
        showHeroSubheader?: boolean;
        slug: {
          _type: "slug";
          current: string;
          source?: string;
        };
        subheader?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        tags?: Sanity.Reference<Sanity.Ref.Ref_CeiSOCrybASs5AFv>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_vFT5OeRkLCU8VyMw = {
    header?: string;
    icon?: Sanity.Ref.Ref_hjMOAzgmse6xDThU;
    subheader?: string;
    text?: {
      _key: string;
      _type: "block";
      children: {
        _key: string;
        _type: "span";
        marks?: unknown[];
        text?: string;
      }[];
      markDefs?: unknown[];
      style?: string;
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_w31G5P8pfYGFDSq3 = {
    content?: {
      _key: string;
      _type: "block";
      children: {
        _key: string;
        _type: "span";
        marks?: unknown[];
        text?: string;
      }[];
      markDefs?: unknown[];
      style?: string;
    }[];
    linkText?: string;
    linkUrl: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
    shape: string;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_xYwoqYqmLIHn3hwB =
    | {
        _id: string;
        _type: "page";
        pageBuilder?: Sanity.Ref.Ref_u6y8QSbZwlQuoNa7;
        parent?: Sanity.Reference<Sanity.Ref.Ref_xYwoqYqmLIHn3hwB>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_YDQvcCqV998ivCra = unknown;
}
namespace Sanity.Ref {
  type Ref_YYBpEMCSFZvMqCsU = {
    ctas: Sanity.Ref.Ref_w31G5P8pfYGFDSq3[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_zdzZYA3Aqo2lg5fB = {
    url?: string;
  };
}
