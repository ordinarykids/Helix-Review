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
<<<<<<< HEAD
          name: Sanity.Ref.Ref_IhvVS1h6gCbVs729;
          slug: Sanity.Ref.Ref_TzENAn7kdxrbzkbS;
=======
          name: Sanity.Ref.Ref_UQNbW4GvfvSRaG2S;
          slug: Sanity.Ref.Ref_n9BWzLCEmvVzxObC;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
        }[]
      | null;
    tags:
      | {
<<<<<<< HEAD
          name: Sanity.Ref.Ref_Qo2c2d9e7NcLGWrQ;
          slug: Sanity.Ref.Ref_o6lt9TznZ0GahjCz;
=======
          name: Sanity.Ref.Ref_cBMFwtAuje13NPuE;
          slug: Sanity.Ref.Ref_KaHeHcgui7abMWsc;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
        }[]
      | null;
    title: string | null;
  };
}
namespace Sanity.Default.Query {
  type PageByPath = {
    hero: Sanity.Ref.Ref_VmraLpevFIv05fR8;
    title: string | null;
  };
}
namespace Sanity.Default.Schema {
  type BlogPost =
    | {
        _id: string;
        _type: "blogPost";
<<<<<<< HEAD
        categories?: Sanity.Reference<Sanity.Ref.Ref_J1MlXZjCS3fWZApB>[];
=======
        categories?: Sanity.Reference<Sanity.Ref.Ref_GPuf4a9UddFj2cKH>[];
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
<<<<<<< HEAD
        featuredImage?: Sanity.Ref.Ref_Pvyw09jTKUA3Ffng;
        seo?: Sanity.Ref.Ref_tRmWLqJNszQXsfc9;
=======
        featuredImage?: Sanity.Ref.Ref_W5gkR3Pl8jiG9MmI;
        seo?: Sanity.Ref.Ref_xwukxpCj6ouwu0Vw;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
<<<<<<< HEAD
        tags?: Sanity.Reference<Sanity.Ref.Ref_OS0erVH659saj6Qd>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type CardWithImage =
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
=======
        tags?: Sanity.Reference<Sanity.Ref.Ref_kIh7upXUtGpMj7yn>[];
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
<<<<<<< HEAD
        parent?: Sanity.Reference<Sanity.Ref.Ref_J1MlXZjCS3fWZApB>;
=======
        parent?: Sanity.Reference<Sanity.Ref.Ref_GPuf4a9UddFj2cKH>;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_XkFPOIf3iseWL0Cm>;
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
          navigationSectionPanel?: Sanity.Ref.Ref_gXOpy1JZTO66rY0r;
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
  type NavigationLink =
    | {
        title: string;
        url: Sanity.Ref.Ref_XFmlPL6D0P5H6z9N;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type NavigationSectionPanel =
    | {
        ctaLink?: {
          title?: string;
          url: Sanity.Ref.Ref_XFmlPL6D0P5H6z9N;
        };
        navigationLinkGroups: {
          navigationLinks: {
            title: string;
            url: Sanity.Ref.Ref_XFmlPL6D0P5H6z9N;
          }[];
          title?: string;
          titlelink: Sanity.Ref.Ref_XFmlPL6D0P5H6z9N;
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_9dFt0MMBqnlUH34K>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
<<<<<<< HEAD
        hero?: Sanity.Ref.Ref_F0aVG2nhbg9bMyq8;
        parent?: Sanity.Reference<Sanity.Ref.Ref_GTHfnsqWFTc0C8HO>;
=======
        parent?: Sanity.Reference<Sanity.Ref.Ref_XkFPOIf3iseWL0Cm>;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
        cards?: Sanity.Ref.Ref_ez71lkJy3W2yv1wu[];
        header?: string;
        homeHeroSubsectionTitle?: string;
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
<<<<<<< HEAD
        source?: Sanity.Ref.Ref_h3cqfGfoKG93qt58;
=======
        source?: Sanity.Ref.Ref_QPeoa7zJwBINTF54;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
<<<<<<< HEAD
        metadata?: Sanity.Ref.Ref_d0L00lx8fDzfxDCz;
=======
        metadata?: Sanity.Ref.Ref_ijqKQ8HI8J9h0Jxf;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
<<<<<<< HEAD
        source?: Sanity.Ref.Ref_h3cqfGfoKG93qt58;
=======
        source?: Sanity.Ref.Ref_QPeoa7zJwBINTF54;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
<<<<<<< HEAD
        dimensions?: Sanity.Ref.Ref_cbfAx1wlgU9HuejA;
=======
        dimensions?: Sanity.Ref.Ref_OGBxPIGtFLizMITE;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
<<<<<<< HEAD
        palette?: Sanity.Ref.Ref_1mxdSGBpTyHAOl1G;
=======
        palette?: Sanity.Ref.Ref_lmS3Kcw5cN68sqNZ;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
<<<<<<< HEAD
        darkMuted?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
        darkVibrant?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
        dominant?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
        lightMuted?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
        lightVibrant?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
        muted?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
        vibrant?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
=======
        darkMuted?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
        darkVibrant?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
        dominant?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
        lightMuted?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
        lightVibrant?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
        muted?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
        vibrant?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
namespace Sanity.Ref {
<<<<<<< HEAD
  type Ref_1mxdSGBpTyHAOl1G = {
    darkMuted?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
    darkVibrant?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
    dominant?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
    lightMuted?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
    lightVibrant?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
    muted?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
    vibrant?: Sanity.Ref.Ref_X5jRpuBMN4anuleM;
  };
}
namespace Sanity.Ref {
  type Ref_cbfAx1wlgU9HuejA = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_d0L00lx8fDzfxDCz = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_cbfAx1wlgU9HuejA;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_1mxdSGBpTyHAOl1G;
  };
}
namespace Sanity.Ref {
  type Ref_ez71lkJy3W2yv1wu = Sanity.Ref.Ref_ez71lkJy3W2yv1wu;
}
namespace Sanity.Ref {
  type Ref_F0aVG2nhbg9bMyq8 = {
    cards?: Sanity.Ref.Ref_ez71lkJy3W2yv1wu[];
    header?: string;
    homeHeroSubsectionTitle?: string;
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
  type Ref_GTHfnsqWFTc0C8HO =
    | {
        _id: string;
        _type: "page";
        hero?: Sanity.Ref.Ref_F0aVG2nhbg9bMyq8;
        parent?: Sanity.Reference<Sanity.Ref.Ref_GTHfnsqWFTc0C8HO>;
        slug?: {
=======
  type Ref_9dFt0MMBqnlUH34K =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_GPuf4a9UddFj2cKH>[];
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
        featuredImage?: Sanity.Ref.Ref_W5gkR3Pl8jiG9MmI;
        seo?: Sanity.Ref.Ref_xwukxpCj6ouwu0Vw;
        showHeroSubheader?: boolean;
        slug: {
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
          _type: "slug";
          current: string;
          source?: string;
        };
<<<<<<< HEAD
=======
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_kIh7upXUtGpMj7yn>[];
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
<<<<<<< HEAD
  type Ref_h3cqfGfoKG93qt58 = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_IhvVS1h6gCbVs729 = string | null;
}
namespace Sanity.Ref {
  type Ref_J1MlXZjCS3fWZApB =
=======
  type Ref_cBMFwtAuje13NPuE = string | null;
}
namespace Sanity.Ref {
  type Ref_GPuf4a9UddFj2cKH =
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
    | {
        _id: string;
        _type: "category";
        name?: string;
<<<<<<< HEAD
        parent?: Sanity.Reference<Sanity.Ref.Ref_J1MlXZjCS3fWZApB>;
=======
        parent?: Sanity.Reference<Sanity.Ref.Ref_GPuf4a9UddFj2cKH>;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
<<<<<<< HEAD
  type Ref_o6lt9TznZ0GahjCz = unknown;
}
namespace Sanity.Ref {
  type Ref_OS0erVH659saj6Qd =
=======
  type Ref_gXOpy1JZTO66rY0r = {
    ctaLink?: {
      title?: string;
      url: Sanity.Ref.Ref_XFmlPL6D0P5H6z9N;
    };
    navigationLinkGroups: {
      navigationLinks: {
        title: string;
        url: Sanity.Ref.Ref_XFmlPL6D0P5H6z9N;
      }[];
      title?: string;
      titlelink: Sanity.Ref.Ref_XFmlPL6D0P5H6z9N;
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_9dFt0MMBqnlUH34K>;
  };
}
namespace Sanity.Ref {
  type Ref_ijqKQ8HI8J9h0Jxf = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_OGBxPIGtFLizMITE;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_lmS3Kcw5cN68sqNZ;
  };
}
namespace Sanity.Ref {
  type Ref_KaHeHcgui7abMWsc = unknown;
}
namespace Sanity.Ref {
  type Ref_kIh7upXUtGpMj7yn =
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
<<<<<<< HEAD
  type Ref_Pvyw09jTKUA3Ffng = {
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
  type Ref_Qo2c2d9e7NcLGWrQ = string | null;
}
namespace Sanity.Ref {
  type Ref_tRmWLqJNszQXsfc9 = {
    canonicalUrl?: string;
    focusKeyword?: string;
    focusSynonyms?: string;
    nofollow?: boolean;
    noindex?: boolean;
    ogDescription?: string;
    ogImage?: {
=======
  type Ref_lmS3Kcw5cN68sqNZ = {
    darkMuted?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
    darkVibrant?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
    dominant?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
    lightMuted?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
    lightVibrant?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
    muted?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
    vibrant?: Sanity.Ref.Ref_pf2loXbx0NPuHGZ6;
  };
}
namespace Sanity.Ref {
  type Ref_n9BWzLCEmvVzxObC = unknown;
}
namespace Sanity.Ref {
  type Ref_OGBxPIGtFLizMITE = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_pf2loXbx0NPuHGZ6 = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_QPeoa7zJwBINTF54 = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_UQNbW4GvfvSRaG2S = string | null;
}
namespace Sanity.Ref {
  type Ref_W5gkR3Pl8jiG9MmI = {
    image?: {
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
<<<<<<< HEAD
  type Ref_TzENAn7kdxrbzkbS = unknown;
}
namespace Sanity.Ref {
  type Ref_VmraLpevFIv05fR8 = {
    cards?: Sanity.Ref.Ref_ez71lkJy3W2yv1wu[];
    header?: string;
    homeHeroSubsectionTitle?: string;
    image?: {
=======
  type Ref_XFmlPL6D0P5H6z9N = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_XkFPOIf3iseWL0Cm>;
  };
}
namespace Sanity.Ref {
  type Ref_XkFPOIf3iseWL0Cm =
    | {
        _id: string;
        _type: "page";
        parent?: Sanity.Reference<Sanity.Ref.Ref_XkFPOIf3iseWL0Cm>;
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
  type Ref_xwukxpCj6ouwu0Vw = {
    canonicalUrl?: string;
    focusKeyword?: string;
    focusSynonyms?: string;
    nofollow?: boolean;
    noindex?: boolean;
    ogDescription?: string;
    ogImage?: {
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
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
<<<<<<< HEAD
    media?: string;
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
  } | null;
}
namespace Sanity.Ref {
  type Ref_X5jRpuBMN4anuleM = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
=======
    openGraphUrl?: string;
    seoDescription?: string;
    seoTitle?: string;
>>>>>>> 753c62147817719cc0ef910382c8966e088d74d6
  };
}
