/// <reference types="@sanity-codegen/types" />

namespace Sanity.Default.Client {
  type Config = {
    AllBlogPosts: Sanity.Default.Query.AllBlogPosts;
    BlogPost: Sanity.Default.Query.BlogPost;
    PageByPath: Sanity.Default.Query.PageByPath;
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
          name: Sanity.Ref.Ref_T6Pof7b7RJAnBTFK;
          slug: Sanity.Ref.Ref_UW8Wjgbu5Ms9iv2q;
        }[]
      | null;
    tags:
      | {
          name: Sanity.Ref.Ref_tCmYWMEtBQhYfp4f;
          slug: Sanity.Ref.Ref_MD423f0oeRv8O7ox;
        }[]
      | null;
    title: string | null;
  };
}
namespace Sanity.Default.Query {
  type PageByPath = {
    pageHero: {
      button: {
        align: Sanity.Ref.Ref_WVM48BaLL6wPyUur;
        link: Sanity.Ref.Ref_WVM48BaLL6wPyUur;
        style: Sanity.Ref.Ref_WVM48BaLL6wPyUur;
        text: Sanity.Ref.Ref_WVM48BaLL6wPyUur;
        type: Sanity.Ref.Ref_WVM48BaLL6wPyUur;
      };
      header: Sanity.Ref.Ref_y6KuJAobS2giqAfX;
      image: {
        alt: Sanity.Ref.Ref_y4Yn3qGvfDQb4KZH;
        aspectRatio: Sanity.Ref.Ref_10Czy1BLyY18irtF;
        blurHash: Sanity.Ref.Ref_WVM48BaLL6wPyUur;
        height: Sanity.Ref.Ref_10Czy1BLyY18irtF;
        src: Sanity.Ref.Ref_01DOgDLrQ7mUooFp;
        width: Sanity.Ref.Ref_10Czy1BLyY18irtF;
      };
      media: Sanity.Ref.Ref_y6KuJAobS2giqAfX;
      subheader: Sanity.Ref.Ref_y6KuJAobS2giqAfX;
    };
    title: string | null;
  };
}
namespace Sanity.Default.Schema {
  type BlogPost =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_p4AwRCLGxnU7ye12>[];
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
        featuredImage?: Sanity.Ref.Ref_oUeZGW91jAHd9JZr;
        seo?: Sanity.Ref.Ref_DPPcdGSNNffLz930;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_jVfhxl0B5w7ksbQa>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Category =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_p4AwRCLGxnU7ye12>;
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
  type Geopoint =
    | {
        alt?: number;
        lat?: number;
        lng?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Link = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_72bDQjfuw0oGuQF8>;
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
          navigationSectionPanel?: Sanity.Ref.Ref_zS6SngqCQDQa0WOe;
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
          url: Sanity.Ref.Ref_CgDkjQznKJYUxZJX;
        };
        navigationLinkGroups: {
          navigationLinks: {
            title: string;
            url: Sanity.Ref.Ref_CgDkjQznKJYUxZJX;
          }[];
          title?: string;
          titlelink: Sanity.Ref.Ref_CgDkjQznKJYUxZJX;
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_zCgHwx8d0fTehOtH>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
        hero?: Sanity.Ref.Ref_SXfXLgj9Qmh0Qk82;
        parent?: Sanity.Reference<Sanity.Ref.Ref_72bDQjfuw0oGuQF8>;
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
  type PageHero =
    | {
        header?: string;
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
        media?: string;
        styledLink?: Sanity.Ref.Ref_9Ezj2nxyY1vc1lf1;
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
        source?: Sanity.Ref.Ref_Gyd6EZeQ99QODBqX;
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
        metadata?: Sanity.Ref.Ref_uX0FLhxxHDTkhbhF;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_Gyd6EZeQ99QODBqX;
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
        dimensions?: Sanity.Ref.Ref_bpxVoZGOQnT0S7OF;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_qD4HlkcxpO4BycCt;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
        darkVibrant?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
        dominant?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
        lightMuted?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
        lightVibrant?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
        muted?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
        vibrant?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
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
        link: string;
        style?: string;
        text: string;
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
namespace Sanity.Ref {
  type Ref_01DOgDLrQ7mUooFp = unknown;
}
namespace Sanity.Ref {
  type Ref_10Czy1BLyY18irtF = unknown;
}
namespace Sanity.Ref {
  type Ref_72bDQjfuw0oGuQF8 =
    | {
        _id: string;
        _type: "page";
        hero?: Sanity.Ref.Ref_SXfXLgj9Qmh0Qk82;
        parent?: Sanity.Reference<Sanity.Ref.Ref_72bDQjfuw0oGuQF8>;
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
  type Ref_9Ezj2nxyY1vc1lf1 = {
    align?: string;
    link: string;
    style?: string;
    text: string;
  };
}
namespace Sanity.Ref {
  type Ref_bpxVoZGOQnT0S7OF = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_CgDkjQznKJYUxZJX = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_72bDQjfuw0oGuQF8>;
  };
}
namespace Sanity.Ref {
  type Ref_DPPcdGSNNffLz930 = {
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
  type Ref_dtPLYJ6lTUSrrNfP = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_Gyd6EZeQ99QODBqX = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_jVfhxl0B5w7ksbQa =
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
  type Ref_MD423f0oeRv8O7ox = unknown;
}
namespace Sanity.Ref {
  type Ref_oUeZGW91jAHd9JZr = {
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
  type Ref_p4AwRCLGxnU7ye12 =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_p4AwRCLGxnU7ye12>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_qD4HlkcxpO4BycCt = {
    darkMuted?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
    darkVibrant?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
    dominant?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
    lightMuted?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
    lightVibrant?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
    muted?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
    vibrant?: Sanity.Ref.Ref_dtPLYJ6lTUSrrNfP;
  };
}
namespace Sanity.Ref {
  type Ref_SXfXLgj9Qmh0Qk82 = {
    header?: string;
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
    media?: string;
    styledLink?: Sanity.Ref.Ref_9Ezj2nxyY1vc1lf1;
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
  };
}
namespace Sanity.Ref {
  type Ref_T6Pof7b7RJAnBTFK = string | null;
}
namespace Sanity.Ref {
  type Ref_tCmYWMEtBQhYfp4f = string | null;
}
namespace Sanity.Ref {
  type Ref_UW8Wjgbu5Ms9iv2q = unknown;
}
namespace Sanity.Ref {
  type Ref_uX0FLhxxHDTkhbhF = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_bpxVoZGOQnT0S7OF;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_qD4HlkcxpO4BycCt;
  };
}
namespace Sanity.Ref {
  type Ref_WVM48BaLL6wPyUur = unknown;
}
namespace Sanity.Ref {
  type Ref_y4Yn3qGvfDQb4KZH = unknown;
}
namespace Sanity.Ref {
  type Ref_y6KuJAobS2giqAfX = string | null;
}
namespace Sanity.Ref {
  type Ref_zCgHwx8d0fTehOtH =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_p4AwRCLGxnU7ye12>[];
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
        featuredImage?: Sanity.Ref.Ref_oUeZGW91jAHd9JZr;
        seo?: Sanity.Ref.Ref_DPPcdGSNNffLz930;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_jVfhxl0B5w7ksbQa>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_zS6SngqCQDQa0WOe = {
    ctaLink?: {
      title?: string;
      url: Sanity.Ref.Ref_CgDkjQznKJYUxZJX;
    };
    navigationLinkGroups: {
      navigationLinks: {
        title: string;
        url: Sanity.Ref.Ref_CgDkjQznKJYUxZJX;
      }[];
      title?: string;
      titlelink: Sanity.Ref.Ref_CgDkjQznKJYUxZJX;
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_zCgHwx8d0fTehOtH>;
  };
}
